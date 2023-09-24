export type UserProfile = {
  alias?: string;
  birthDate?: string;
  city?: string;
  country?: string;
  name?: string;
  phoneNumber?: string;
  picture?: string;
  schoolName?: string;
  schoolType?: 'highSchool' | 'university';
};

export type UserDB = {
  accountType: string;
  createdAt: string;
  email: string;
  id: string;
  password?: string;
  profile: UserProfile;
  provider: string;
  role: 'user' | 'expert' | 'administrator';
};

export type User = Omit<UserDB, 'password'>;

export interface AddUserPayload {
  accountType: 'credentials' | 'oauth';
  email: string;
  password?: string;
  profile: UserProfile;
  provider: string;
}
export interface UpdateUserPayload {
  email?: string;
  profile: UserProfile;
}

export interface NextAuthUser {
  name: string;
  image: string;
  email: string;
}

export interface AddUser {
  (data: AddUserPayload): Promise<User>;
}
export interface GetUser {
  (email: string): Promise<UserDB>;
}
export interface UpdateUser {
  (email: string, data: UpdateUserPayload): Promise<UserDB>;
}
