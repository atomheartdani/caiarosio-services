import { Nation } from './geography.model';

export interface TripHeader {
  id: number;
  date: string;
  title: string;
}

export interface Trip extends TripHeader {
  groupId: number;
  nation: Nation;
  region: string;
  zone: string;
  difficulty: string;
  estimatedTime: string;
  elevationGain: string;
  maxHeight: number;
  gear: string;
  description: string;
}
