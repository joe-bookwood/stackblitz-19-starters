import { IAddress } from "./address.model";
import { ICompany } from "./company.model";

export interface IUser {
  id?: number;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  company?: ICompany | null;
  address?: IAddress | null;
}

export class UserA implements IUser {
  constructor(
    public id?: number,
    public name?: string | null,
    public username?: string | null,
    public email?: string | null,
    public phone?: string | null,
    public website?: string | null,
    public company?: ICompany | null,
    public address?: IAddress | null
  ) {}
}

export function getUserAIdentifier(user: IUser): number | undefined {
  return user.id;
}
