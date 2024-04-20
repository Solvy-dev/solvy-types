import { CalendarDate } from "@internationalized/date";

export type User = {
  id: string;
  email: string;
  profile: UserProfile,
  type: 'student' | 'tutor' | 'parent'; // Analytics
  role: 'student' | 'tutor' | 'admin'; // Show content conditionally in the platform
}

export type UserDB = User & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UserProfile = {
  username?: string;
  firstName?: string;
  picture?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  city?: string;
};

export type UserProfileForm = Omit<UserProfile, 'birthDate'> & { birthDate?: CalendarDate };

export type UpdateUserProfile = {
  profile: UserProfile;
  updatedAt: string;
};