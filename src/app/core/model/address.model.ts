import { IGeo } from "./geo.model";

export interface IAddress {
  id?: number;
  street?: string | null;
  suite?: string | null;
  city?: string | null;
  zipcode?: string | null;
  geo?: IGeo | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public street?: string | null,
    public suite?: string | null,
    public city?: string | null,
    public zipcode?: string | null,
    public geo?: IGeo | null
  ) {}
}

export function getAddressIdentifier(address: IAddress): number | undefined {
  return address.id;
}
