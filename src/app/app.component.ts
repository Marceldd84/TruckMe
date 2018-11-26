import { Component } from '@angular/core';
import { DriversService } from './drivers.service';
import { DriverPosition } from './Types/driverPosition';
import { DriverPerson } from './Types/driver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJsTruck';
  lat = 51.678418;
  lng = 7.809007;

  markers: DriverPosition[] = [];
  constructor(private driverService: DriversService) {
  }

  loadPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.driverService.getExistingDriversPositions().subscribe((persons: DriverPerson[]) => {
          for (let p of persons) {
            this.markers.push(p.position);
          }
        });

      }, (er) => {
        console.log(er);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loadPosition();
  }


  calculateDistance() {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    // tslint:disable-next-line:max-line-length
    let a = 0.5 - c((this.lat - this.markers[0].lat) * p) / 2 + c(this.markers[0].lat * p) * c((this.lat) * p) * (1 - c(((this.lng - this.markers[0].lng) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return dis;

  }
}


