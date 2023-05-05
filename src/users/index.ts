export type UserProfile = {
  name:         string;
  alias?:       string;
  picture?:      string;
  birthDate?:   string;
  city?:        string;
  country?:     string;
  phoneNumber?: string;
  schoolName?:  string;
  schoolType?:  'highSchool' | 'university';
}

export type UserDB = {
  id:           string;
  email:        string;
  password?:    string;
  createdAt:    string;
  role:         'user' | 'expert' | 'administrator';
  profile:       UserProfile;
}

export type User = Omit<UserDB, 'password'>

export interface AddUserPayload {
  email:         string;
  password?:     string;
  provider:      string;
  accountType:   'credentials' | 'oauth';
  profile:        UserProfile
}
export interface UpdateUserPayload {
  email?:    string;
  profile: UserProfile
}


export interface NextAuthUser {
  name: string;
  image: string;
  email: string;
}