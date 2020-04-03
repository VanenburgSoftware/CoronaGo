/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';

// declare module 'googlemaps';
declare let google: any;

@Component({
	selector: 'app-coronatracker',
	templateUrl: './coronatracker.component.html',
	styleUrls: ['./coronatracker.component.scss']
})
export class CoronaTrackerComponent implements OnInit {

	@ViewChild('map') mapElement: any;
	map: google.maps.Map;
	heatmap: any;

	constructor() { }

	initMap() {
		this.map = new google.maps.Map(this.mapElement.nativeElement, {
			zoom: 10,
			center: { lat: 38.852244, lng: -77.297308 },
			mapTypeId: 'terrain'
		});

		this.heatmap = new google.maps.visualization.HeatmapLayer({
			data: this.getPoints(),
			map: this.map,
			radius: 20
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
			{ location: new google.maps.LatLng(38.888888, -77.333333), weight: 10 },
			{ location: new google.maps.LatLng(38.777777, -77.444444), weight: 10 },
			{ location: new google.maps.LatLng(38.666666, -77.555555), weight: 10 },
			{ location: new google.maps.LatLng(38.555555, -77.666666), weight: 10 },
			{ location: new google.maps.LatLng(38.444444, -77.777777), weight: 10 },

			{ location: new google.maps.LatLng(38.913825, -77.330500), weight: 30 },
			{ location: new google.maps.LatLng(38.778526, -77.152659), weight: 30 },

			{ location: new google.maps.LatLng(38.842732, -77.258402), weight: 30 },

			{ location: new google.maps.LatLng(38.852357, -77.198664), weight: 30 },
			{ location: new google.maps.LatLng(38.829895, -77.349039), weight: 30 },
			{ location: new google.maps.LatLng(38.921839, -77.180124), weight: 30 },
			{ location: new google.maps.LatLng(38.743828, -77.288267), weight: 30 },
			{ location: new google.maps.LatLng(38.874573, -77.460988), weight: 30 },
			{ location: new google.maps.LatLng(38.916182, -77.418219), weight: 30 },
			{ location: new google.maps.LatLng(38.820125, -77.311296), weight: 30 },

			
			
			
			

			

		];
	}

	// api key AIzaSyAp3XmfexRLLJBBvV4kHimsfYzHzbT0z7w
	ngOnInit() {
		this.initMap();
	}
}
