export interface Character {
  id: string;
  name: string;
  ageDisplay: string;
  description: string;
  quote?: string;
  image: string;
  borderColorClass: string;
  nameColorClass: string;
  badge?: {
    text: string;
    colorClass: string;
  };
}