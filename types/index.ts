export type CampaignStatus = 'draft' | 'pending_review' | 'published' | 'threshold_reached' | 'rights_verification' | 'official' | 'funding_active' | 'successful' | 'failed' | 'cancelled';

export type Campaign = {
  id: string;
  title: string;
  subtitle: string;
  kind: string;
  supporters: number;
  current: number;
  goal: number;
  status: CampaignStatus;
};

export type UserProfile = {
  id: string;
  username: string;
  email: string;
  birthDate?: string;
  acceptedTermsVersion?: string;
};
