export type UserProfile = {
  picture?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string | null;
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
  type: 'student' | 'tutor' | 'parent'; // Analytics
  role: 'student' | 'tutor' | 'admin'; // Show content conditionally in the platform
};

export type UserDB = User & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type SignUpPayload = Pick<
  UserDB,
  'email' | 'password' | 'provider' | 'accountType' | 'type'
> & { oauthId?: string; image?: string; name?: string };

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
