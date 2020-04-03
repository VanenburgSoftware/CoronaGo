/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { HeatMapService } from './heatMapService';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppConstants } from '@app/app-constants';

// declare module 'googlemaps';
declare let google: any;

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatMapComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  heatmap: any;

  constructor(
    private heatmapService: HeatMapService,
    public http: HttpClient
  ) { }

  getWeightedLatLong(latlong, zipcodes, weight) {
    const wLatlong = [];
    latlong.results.map((ll, i) => {
      wLatlong.push({
        location: new google.maps.LatLng(ll.geometry.location.lat, ll.geometry.location.lng),
        weight: weight[i]
      }
      );
    });

    return wLatlong;
  }

  getLatLong(zips): Observable<any> {
    const apiKey = AppConstants.MAPS_API_KEY;

    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zips}&key=${apiKey}`)
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 3,
      center: { lat: 39.264750, lng: -5.259083 },
      mapTypeId: 'satellite'
    });

    this.heatmapService.getHeatMap(null).subscribe(zipcodes => {

      const zips = [];
      const weights = [];
      zipcodes.map(z => {
        zips.push(z.zipCode);
        weights.push(z.count);
      });

      this.getLatLong(zips).subscribe(pts => {
        const weightedLatLong = this.getWeightedLatLong(pts, zipcodes, weights);
        this.heatmap = new google.maps.visualization.HeatmapLayer({
          data: weightedLatLong,
          map: this.map,
          radius: 7
        });
      });
    });

  }

  toggleHeatmap() {
    this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
  }
  changeGradient() {
    const gradient = [
      'rgba(0, 255, 255, 1)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ];
    this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
  }
  changeRadius() {
    this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
  }
  changeOpacity() {
    this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 0.2);
  }

  getPoints() {


    return [
      { location: new google.maps.LatLng(37.782, -122.447), weight: 10 },
      { location: new google.maps.LatLng(33.569443, -117.202499), weight: 10 },
      { location: new google.maps.LatLng(34.000000, -117.483330), weight: 10 },
      { location: new google.maps.LatLng(38.005001, -121.805832), weight: 10 },
      { location: new google.maps.LatLng(35.970554, -79.997498), weight: 10 },

      { location: new google.maps.LatLng(38.564363, -122.910713), weight: 10 },
      { location: new google.maps.LatLng(36.778259, -119.417931), weight: 10 },
      { location: new google.maps.LatLng(36.543819, -122.049263), weight: 10 },
      { location: new google.maps.LatLng(32.772404, -117.029327), weight: 10 },
      { location: new google.maps.LatLng(34.138000, -118.125000), weight: 10 },
      { location: new google.maps.LatLng(35.970554, -79.997498), weight: 10 },
      { location: new google.maps.LatLng(35.970554, -79.997498), weight: 10 },

      { location: new google.maps.LatLng(340.730610, -73.935242), weight: 10 },
      { location: new google.maps.LatLng(40.712772, -74.006058), weight: 10 },
      { location: new google.maps.LatLng(42.405678, -82.928223), weight: 10 },
      { location: new google.maps.LatLng(40.861706, -73.880341), weight: 10 },
      { location: new google.maps.LatLng(40.753181, -73.982254), weight: 10 },
      { location: new google.maps.LatLng(42.648613, -73.761391), weight: 10 },
      { location: new google.maps.LatLng(40.758617, -73.986221), weight: 10 },
      { location: new google.maps.LatLng(36.102371, -115.174553), weight: 10 },
      { location: new google.maps.LatLng(40.710255, -74.005058), weight: 10 },
      { location: new google.maps.LatLng(43.000000, -75.000000), weight: 10 },

      { location: new google.maps.LatLng(41.332741, -74.356667), weight: 10 },
      { location: new google.maps.LatLng(-34.099998, -56.216667), weight: 10 },
      { location: new google.maps.LatLng(27.994402, -81.760254), weight: 10 },
      { location: new google.maps.LatLng(24.691402, -81.189682), weight: 10 },

      { location: new google.maps.LatLng(39.833851, -74.871826), weight: 30 },

      { location: new google.maps.LatLng(47.751076, -120.740135), weight: 30 },
      { location: new google.maps.LatLng(39.698399, -104.965202), weight: 30 },
      { location: new google.maps.LatLng(40.759434, -111.888222), weight: 30 },
      { location: new google.maps.LatLng(38.889484, -77.035278), weight: 30 },
      { location: new google.maps.LatLng(41.794552, -87.614731), weight: 30 },

      { location: new google.maps.LatLng(38.888888, -77.333333), weight: 100 },
      { location: new google.maps.LatLng(38.777777, -77.444444), weight: 100 },
      { location: new google.maps.LatLng(38.666666, -77.555555), weight: 100 },
      { location: new google.maps.LatLng(38.555555, -77.666666), weight: 100 },
      { location: new google.maps.LatLng(38.444444, -77.777777), weight: 100 },

      { location: new google.maps.LatLng(38.913825, -77.330500), weight: 300 },
      { location: new google.maps.LatLng(38.778526, -77.152659), weight: 300 },

      { location: new google.maps.LatLng(38.842732, -77.258402), weight: 300 },

      { location: new google.maps.LatLng(38.852357, -77.198664), weight: 300 },
      { location: new google.maps.LatLng(38.829895, -77.349039), weight: 300 },
      { location: new google.maps.LatLng(38.921839, -77.180124), weight: 300 },
      { location: new google.maps.LatLng(38.743828, -77.288267), weight: 300 },
      { location: new google.maps.LatLng(38.874573, -77.460988), weight: 300 },
      { location: new google.maps.LatLng(38.916182, -77.418219), weight: 300 },
      { location: new google.maps.LatLng(38.820125, -77.311296), weight: 300 }

    ];
  }

  // api key AIzaSyAp3XmfexRLLJBBvV4kHimsfYzHzbT0z7w
  ngOnInit() {
    this.initMap();
  }

}
