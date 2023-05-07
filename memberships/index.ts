export interface Membership {
  userId:     string;
  email:      string;
  type:       string;
  status:     string;
  startDate:  string;
  endDate:    string;
}

export interface MembershipDB extends Membership {
  id:         string;
  createdAt:  string;
}

export type UpdateMemership = Omit<Membership, 'userId' | 'email'>