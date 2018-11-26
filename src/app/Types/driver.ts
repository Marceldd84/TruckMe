import { DriverPosition } from './driverPosition';

export interface DriverPerson {
    name: string;
    email?: string;
    tel?: string;
    drivers?: DriverPerson[];
    position?: DriverPosition;
}
