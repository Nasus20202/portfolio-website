export type SocialLink = {
  name: string;
  url: string;
  iconSlug: string;
  displayText?: string;
};

export type PersonalInfo = {
  name: string;
  alias: string;
  role: string;
  company: string;
  email: string;
  bio: string;
  socials: SocialLink[];
};

export type SkillCategory = {
  id: string;
  name: string;
  icons: string[];
  details?: string;
};

export type TimelineEventType = 'commit' | 'branch' | 'merge';
export type Lane = string;

export type TimelineEvent = {
  id: string;
  type: TimelineEventType;
  lane: Lane;
  from?: Lane;
  to?: Lane;
  title: string;
  date: string;
  description?: string;
  commitHash?: string;
};
