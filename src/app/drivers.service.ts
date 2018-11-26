import { Injectable } from '@angular/core';
import { DriverPosition } from './Types/driverPosition';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriverPerson } from './Types/driver';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient) { }
  private driversUrl = 'api/getDrivers';
  

  getExistingDriversPositions(lat?: number, lng?: number): Observable<DriverPerson[]> {
    return this.http.get<DriverPerson[]>(this.driversUrl);
  }
}
