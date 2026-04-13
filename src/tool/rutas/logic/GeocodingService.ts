export interface GeocodingResult {
  address: string;
  name: string;
}

export interface GeocodingStrings {
  addressUnknown: string;
  errorAddress: string;
  errorAddressName: string;
}

interface NominatimAddress {
  road?: string;
  house_number?: string;
  suburb?: string;
  city?: string;
  town?: string;
  village?: string;
}

interface NominatimResponse {
  address?: NominatimAddress;
  display_name: string;
}

function buildAddressString(addr: NominatimAddress, displayName: string): string {
  const parts: string[] = [];
  if (addr.road) parts.push(addr.road);
  if (addr.house_number) parts.push(addr.house_number);
  if (addr.suburb && !addr.road) parts.push(addr.suburb);
  const city = addr.city ?? addr.town ?? addr.village ?? '';
  if (city) parts.push(city);
  return parts.join(', ') || displayName.split(',')[0];
}

export class GeocodingService {
  private strings: GeocodingStrings;

  constructor(strings: GeocodingStrings) {
    this.strings = strings;
  }

  async getAddress(lat: number, lng: number): Promise<GeocodingResult> {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
      const response = await fetch(url, { headers: { 'User-Agent': 'RutasApp/1.0' } });
      const data = await response.json() as NominatimResponse;
      const addressStr = data.address
        ? buildAddressString(data.address, data.display_name)
        : this.strings.addressUnknown;
      return { address: addressStr, name: addressStr };
    } catch {
      return { address: this.strings.errorAddress, name: this.strings.errorAddressName };
    }
  }
}
