export type UserProfile = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  city: string;
};

export type User = {
  email: string;
  username: string;
  profile: UserProfile;
  isVerified: boolean;
  accountType: string;
  password?: string;
  provider: string;
  role: 'student' | 'tutor' | 'admin';
};

export type UserDB = User & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UserPayload = Partial<User>;
export type UpdateUserPayload = UserPayload & { updatedAt: string };

export interface NextAuthUser {
  name: string;
  image: string;
  email: string;
}

export interface AddUser {
  (data: UserPayload): Promise<User>;
}
export interface GetUser {
  (email: string): Promise<UserDB>;
}
export interface UpdateUser {
  (email: string, data: UpdateUserPayload): Promise<UserDB>;
}
