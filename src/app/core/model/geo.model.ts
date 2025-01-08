export interface IGeo {
  id?: number;
  lat?: string | null;
  lng?: string | null;
}

export class Geo implements IGeo {
  constructor(public id?: number, public lat?: string | null, public lng?: string | null) {}
}

export function getGeoIdentifier(geo: IGeo): number | undefined {
  return geo.id;
}
