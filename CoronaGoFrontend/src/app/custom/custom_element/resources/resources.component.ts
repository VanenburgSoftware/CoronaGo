import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: [ './resources.component.scss' ]
})
export class ResourcesComponent implements OnInit {
	resources = [ {
		'name': "Cdc",
		link: 'https://www.cdc.gov/coronavirus/2019-ncov/index.html'
	}, {
		'name': "Who",
		link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019'
	}, {
		'name': "Google",
		link: 'https://www.google.com/amp/s/www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus%3famp=true'
	} ]
	constructor() { }

	ngOnInit() {
	}
}
