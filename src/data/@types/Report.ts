import { Pets } from './Pets';

export interface Report {
    id: number;
    user_email: string;
    value: string;
    pet: Pets;
}