export interface Root {
  page: Page;
}

export interface Page {
  home: Home;
  about: About;
  policy: Policy;
}

export interface Home {
  navigation: Navigation;
  hero: Hero;
  skills: Skills2;
  projects: Projects2;
  testimonials: Testimonials2;
  contacts: Contacts;
  title: string;
  description: string;
}

export interface Navigation {
  home: Home2;
  skills: Skills;
  projects: Projects;
  testimonials: Testimonials;
  "contact me": ContactMe;
}

export interface Home2 {
  title: string;
  href: string;
}

export interface Skills {
  title: string;
  href: string;
}

export interface Projects {
  title: string;
  href: string;
}

export interface Testimonials {
  title: string;
  href: string;
}

export interface ContactMe {
  title: string;
  href: string;
}

export interface Hero {
  title: string;
  description: string;
  button: string;
}

export interface Skills2 {
  service: string;
  costs: string;
  general_marketing: string;
  marketing_department: string;
  content_creation: string;
  content_editing: string;
  social_media_marketing: string;
  influencer_marketing: string;
  pay_per_click: string;
  seo: string;
  marketing_strategy: string;
  online_advertising: string;
  reputation_management: string;
  email_marketing: string;
  month: string;
  hour: string;
  "experience-title": string;
  "experience-description": string;
  "innovative-title": string;
  "innovative-description": string;
  "imaginative-title": string;
  "imaginative-description": string;
}

export interface Projects2 {
  our: string;
  pro: string;
  jects: string;
  description: string;
  "loft-oblaka": string;
  "reelso-mania": string;
  "life-pay": string;
  "holy-posh": string;
}

export interface Testimonials2 {
  title: string;
  "01": string;
  "02": string;
  "03": string;
}

export interface Contacts {
  title: string;
  name: string;
  email: string;
  message: string;
  "lets talk": string;
}

export interface About {
  title: string;
  description: string;
}

export interface Policy {
  privacy: string;
  conditions: string;
  cookies: string;
}
