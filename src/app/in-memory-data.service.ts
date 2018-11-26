import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const drivers = [
      {
        name: 'Julian',
        email: 'ads',
        position:
        {
          lat: 25.694055,
          lng: -80.321886,
          label: 'A',
          content: 'asdasd'
        }

      },
      {
        name: 'Jose',
        email: 'ads',
        position:
        {
          lat: 25.693233,
          lng: -80.319740,
          label: 'J',
          content: 'Jordy el piti pua'
        }

      },
      {
        lat: 25.692856,
        lng: -80.317766,
        label: 'C',
        content: 'xsdad'
      }
    ];
    return {'getDrivers': drivers };
  }
}
