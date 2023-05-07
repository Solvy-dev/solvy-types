export enum MembershipType {
  FREE = 'FREE',
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM'
}

export enum MembershipStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CANCELLED = 'CANCELLED',
}

export interface Membership {
  userId:     string;
  type:       MembershipType;
  status:     MembershipStatus;
  startDate?:  string;
  endDate?:    string;
}

export interface MembershipDB extends Membership {
  id:         string;
  createdAt:  string;
}

export type UpdateMemership = Omit<Membership, 'userId' | 'email'>