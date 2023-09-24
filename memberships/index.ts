export enum MembershipType {
  FREE = 'FREE',
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
}

export enum MembershipStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CANCELLED = 'CANCELLED',
}

export interface Membership {
  userId: string;
  type: MembershipType;
  status: MembershipStatus;
}

export interface MembershipDB extends Membership {
  id: string;
  createdAt: string;
  startDate?: string;
  endDate?: string;
}

export type UpdateMemership = Partial<
  Pick<MembershipDB, 'type' | 'status' | 'startDate' | 'endDate'>
>;
