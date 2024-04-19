import { CalendarDate } from "@internationalized/date";

export type UserProfileForm = {
  firstName: string;
  picture?: string;
  lastName?: string;
  birthDate?: CalendarDate;
  country?: string;
  city?: string;
};
export type UserProfile = Omit<UserProfileForm, 'birthDate'> & { birthDate?: string };

export type User = {
  email: string;
  username: string;
  profile: UserProfile;
  isVerified: boolean;
  accountType: string; // 'credentials' | 'oauth'
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

export type UpdateUserProfile = {
  profile: UserProfile;
  updatedAt: string;
};
export interface NextAuthUser {
  name: string;
  image: string;
  email: string;
}

export type ChangePassword = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  token: string;
};
