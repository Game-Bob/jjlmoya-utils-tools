import type * as LeafletNS from 'leaflet';
import type { GeocodingService } from './GeocodingService';
import type { RouteService, OsrmWaypoint, OsrmLeg, OsrmRoute } from './RouteService';

declare const L: typeof LeafletNS;

export interface RoutePoint {
  id: number;
  lat: number;
  lng: number;
  marker: L.Marker;
  name: string;
  address?: string;
}

export interface RouteManagerStrings {
  labelLoadingAddress: string;
  labelPoint: string;
  labelDeleteAria: string;
  errorMinPoints: string;
  errorCalculate: string;
}

export class RouteManager extends EventTarget {
  private map: L.Map | null = null;
  private points: RoutePoint[] = [];
  private routeLine: L.GeoJSON | null = null;
  private geocoding: GeocodingService;
  private routing: RouteService;
  private strings: RouteManagerStrings;

  constructor(geocoding: GeocodingService, routing: RouteService, strings: RouteManagerStrings) {
    super();
    this.geocoding = geocoding;
    this.routing = routing;
    this.strings = strings;
  }

  initMap(elementId: string) {
    const el = document.getElementById(elementId);
    if (!el) return;
    this.map = L.map(elementId).setView([40.416775, -3.70379], 6);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(this.map);
    this.map.on('click', (e: L.LeafletMouseEvent) => { this.addPoint(e.latlng.lat, e.latlng.lng); });
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.map?.setView([pos.coords.latitude, pos.coords.longitude], 13);
      });
    }
  }

  private getNumberedIcon(number: number): L.DivIcon {
    return L.divIcon({
      className: 'rut-icon-container',
      html: `<div class="rut-icon">${number}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 36],
      popupAnchor: [0, -36],
    });
  }

  async addPoint(lat: number, lng: number) {
    if (!this.map) return;
    const id = Date.now();
    const index = this.points.length + 1;
    const marker = L.marker([lat, lng], { draggable: true, icon: this.getNumberedIcon(index) }).addTo(this.map);
    const point: RoutePoint = { id, lat, lng, marker, name: `${this.strings.labelPoint} ${index}`, address: this.strings.labelLoadingAddress };
    this.points.push(point);
    this.notifyUpdate();
    marker.on('dragend', () => {
      const pos = marker.getLatLng();
      point.lat = pos.lat;
      point.lng = pos.lng;
      this.clearRoute();
      this.updateAddress(point);
    });
    await this.updateAddress(point);
  }

  private async updateAddress(point: RoutePoint) {
    const result = await this.geocoding.getAddress(point.lat, point.lng);
    point.address = result.address;
    point.name = result.name;
    this.bindMarkerPopup(point);
    this.notifyUpdate();
  }

  private bindMarkerPopup(point: RoutePoint) {
    const div = document.createElement('div');
    div.className = 'rut-popup';
    div.innerHTML = `<strong class="rut-popup-name">${point.name}</strong><p class="rut-popup-coords">Lat: ${point.lat.toFixed(4)}, Lng: ${point.lng.toFixed(4)}</p><button class="rut-popup-btn" id="rut-del-${point.id}">${this.strings.labelDeleteAria}</button>`;
    point.marker.bindPopup(div);
    point.marker.on('popupopen', () => {
      document.getElementById(`rut-del-${point.id}`)?.addEventListener('click', () => this.deletePoint(point.id));
    });
  }

  deletePoint(id: number) {
    const index = this.points.findIndex((p) => p.id === id);
    if (index === -1) return;
    const point = this.points[index];
    if (point) this.map?.removeLayer(point.marker);
    this.points.splice(index, 1);
    this.refreshMarkerIcons();
    this.clearRoute();
    this.notifyUpdate();
  }

  private refreshMarkerIcons() {
    this.points.forEach((point, index) => { point.marker.setIcon(this.getNumberedIcon(index + 1)); });
  }

  clearAll() {
    this.points.forEach((p) => this.map?.removeLayer(p.marker));
    this.points = [];
    this.clearRoute();
    this.notifyUpdate();
  }

  private clearRoute() {
    if (this.routeLine && this.map) {
      this.map.removeLayer(this.routeLine);
      this.routeLine = null;
    }
    this.dispatchEvent(new CustomEvent('routeCleared'));
  }

  private findCutIndex(legs: OsrmLeg[]): number {
    let maxIdx = 0;
    let maxDist = -1;
    legs.forEach((leg, idx) => {
      if (leg.distance > maxDist) { maxDist = leg.distance; maxIdx = idx; }
    });
    return maxIdx;
  }

  private reorderPoints(waypoints: OsrmWaypoint[], legs: OsrmLeg[]): RoutePoint[] {
    const mapped = waypoints
      .map((wp) => (wp.waypoint_index !== undefined && wp.waypoint_index < this.points.length ? this.points[wp.waypoint_index] : undefined))
      .filter((p): p is RoutePoint => p !== undefined);
    if (mapped.length !== this.points.length) return this.points;
    const startIdx = (this.findCutIndex(legs) + 1) % mapped.length;
    return [...mapped.slice(startIdx), ...mapped.slice(0, startIdx)];
  }

  private drawRouteGeometry(route: OsrmRoute) {
    this.clearRoute();
    const feature: GeoJSON.Feature = { type: 'Feature', properties: {}, geometry: route.geometry as GeoJSON.Geometry };
    this.routeLine = L.geoJSON(feature, {
      style: { color: '#0891b2', weight: 5, opacity: 0.8, lineCap: 'round', lineJoin: 'round' },
    }).addTo(this.map!);
    this.map?.fitBounds(this.routeLine.getBounds(), { padding: [50, 50] });
  }

  async optimizeRoute() {
    if (this.points.length < 2) {
      this.dispatchEvent(new CustomEvent('error', { detail: this.strings.errorMinPoints }));
      return;
    }
    this.dispatchEvent(new CustomEvent('loading', { detail: true }));
    try {
      const { waypoints, trip } = await this.routing.optimizeRoute(this.points);
      this.points = this.reorderPoints(waypoints, trip.legs);
      this.refreshMarkerIcons();
      this.notifyUpdate();
      const route = await this.routing.getRoute(this.points);
      this.drawRouteGeometry(route);
      this.dispatchEvent(new CustomEvent('routeCalculated', { detail: { distance: route.distance } }));
    } catch (error) {
      console.error(error);
      this.dispatchEvent(new CustomEvent('error', { detail: this.strings.errorCalculate }));
    } finally {
      this.dispatchEvent(new CustomEvent('loading', { detail: false }));
    }
  }

  panToPoint(id: number) {
    const point = this.points.find((p) => p.id === id);
    if (point && this.map) {
      this.map.flyTo([point.lat, point.lng], 16);
      point.marker.openPopup();
    }
  }

  private notifyUpdate() {
    this.dispatchEvent(new CustomEvent('update', { detail: this.points }));
  }
}
