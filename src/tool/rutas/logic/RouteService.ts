export interface OsrmWaypoint {
  waypoint_index?: number;
  location: [number, number];
}

export interface OsrmLeg {
  distance: number;
  duration: number;
}

export interface OsrmTrip {
  legs: OsrmLeg[];
  distance: number;
}

export interface OsrmGeometry {
  type: string;
  coordinates: [number, number][];
}

export interface OsrmRoute {
  geometry: OsrmGeometry;
  distance: number;
}

export interface OptimizationResult {
  waypoints: OsrmWaypoint[];
  trip: OsrmTrip;
}

interface OsrmTripResponse {
  code: string;
  message?: string;
  waypoints: OsrmWaypoint[];
  trips: OsrmTrip[];
}

interface OsrmRouteResponse {
  code: string;
  message?: string;
  routes: OsrmRoute[];
}

export class RouteService {
  async optimizeRoute(points: { lat: number; lng: number }[]): Promise<OptimizationResult> {
    const coords = points.map((p) => `${p.lng},${p.lat}`).join(';');
    const url = `https://router.project-osrm.org/trip/v1/driving/${coords}?source=any&roundtrip=true&geometries=geojson&overview=full`;
    const response = await fetch(url);
    const data = await response.json() as OsrmTripResponse;
    if (data.code !== 'Ok') throw new Error(data.message ?? 'Route optimization failed');
    return { waypoints: data.waypoints, trip: data.trips[0] };
  }

  async getRoute(points: { lat: number; lng: number }[]): Promise<OsrmRoute> {
    const coords = points.map((p) => `${p.lng},${p.lat}`).join(';');
    const url = `https://router.project-osrm.org/route/v1/driving/${coords}?geometries=geojson&overview=full`;
    const response = await fetch(url);
    const data = await response.json() as OsrmRouteResponse;
    if (data.code !== 'Ok') throw new Error(data.message ?? 'Route calculation failed');
    return data.routes[0];
  }
}
