export interface Membership {
  userId: string;
  type: 'FREE' | 'PREMIUM';
  status: 'ACTIVE' | 'INACTIVE' | 'CANCELLED';
  startDate?: string;
  endDate?: string;
}

export interface MembershipDB extends Membership {
  id: string;
  createdAt: string;
}

export type UpdateMembership = Partial<
  Pick<MembershipDB, 'type' | 'status' | 'startDate' | 'endDate'>
>;
