import { Nation } from './geography.model';

export enum Difficulty {
  T = 'T',
  E = 'E',
  EE = 'EE',
  EEA = 'EEA',
  EAI = 'EAI',
  F = 'Alpinismo F',
  F_P = 'Alpinismo F+',
  PD_M = 'Alpinismo PD-',
  PD = 'Alpinismo PD',
  PD_P = 'Alpinismo PD+',
  AD_M = 'Alpinismo AD-',
  AD = 'Alpinismo AD',
  AD_P = 'Alpinismo AD+',
}

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
  difficulty: Difficulty;
  estimatedTime: string;
  elevationGain: string;
  maxHeight: number;
  gear: string;
  description: string;
}
