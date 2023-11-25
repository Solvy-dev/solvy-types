/* 
  ---Membership statuses---
  STARTER: User signed up but not subscribed
  FREE_TRIAL: User subscribed to free trial
  ACTIVE: User subscribed to premium
  EXPIRED: User subscription expired
  CANCELLED: User cancelled subscription
  DEACTIVATED: User deactivated the account
*/
export interface Membership {
  userId: string;
  type: 'FREE' | 'PREMIUM';
  status:
    | 'STARTER'
    | 'FREE_TRIAL'
    | 'ACTIVE'
    | 'EXPIRED'
    | 'CANCELLED'
    | 'DEACTIVATED';
  trialEndDate?: string;
  trialStartDate?: string;
  startDate?: string;
  endDate?: string;
  paymentFrequency?: 'MONTHLY' | 'ANNUAL';
}

export interface MembershipDB extends Membership {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type UpdateMembership = Partial<
  Pick<MembershipDB, 'type' | 'status' | 'startDate' | 'endDate'>
>;
