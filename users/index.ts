export type UserProfile = {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  city?: string;
};

export type User = {
  email: string;
  username: string;
  profile?: UserProfile;
  isVerified: boolean;
  accountType: string;
  password?: string;
  provider: string;
  role: 'student' | 'tutor' | 'administrator';
};

export type UserDB = User & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type SignUpPayload = Pick<
  UserDB,
  'email' | 'password' | 'provider' | 'accountType'
> & { oauthId?: string };

export type UpdateUserProfile = {
  profile: UserProfile;
  updatedAt: string;
};
export interface NextAuthUser {
  name: string;
  image: string;
  email: string;
}

export type FormikSignUpPayload = SignUpPayload & { confirmPassword: string };
export type ChangePassword = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  token: string;
};
