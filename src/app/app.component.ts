import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJsTruck';
  lat = 51.678418;
  lng = 7.809007;

  markers: marker[] = [
    {
      lat: 25.694055,
      lng: -80.321886,
      label: 'A',
      content: 'asdasd'
    },
    {
      lat: 25.693233,
      lng: -80.319740,
      label: 'J',
      content: 'Jordy el piti pua'
    },
    {
      lat: 25.692856,
      lng: -80.317766,
      label: 'C',
      content: 'xsdad'
    }
  ];

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
this.calculateDistance();

      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
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

interface marker {
  lat: number;
  lng: number;
  label?: string;
  content?: string;
}
