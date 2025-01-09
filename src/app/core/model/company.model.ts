export interface ICompany {
  id?: number;
  name?: string | null;
  catchPhrase?: string | null;
  bs?: string | null;
}

export class Company implements ICompany {
  constructor(public id?: number, public name?: string | null, public catchPhrase?: string | null, public bs?: string | null) {}
}

export function getCompanyIdentifier(company: ICompany): number | undefined {
  return company.id;
}
