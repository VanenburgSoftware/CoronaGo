import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landingpage',
	templateUrl: './landingpage.component.html',
	styleUrls: [ './landingpage.component.scss' ]
})
export class LandingPageComponent implements OnInit {
	searchText;
	hospitals = [ {
		hospital_name: 'Anna Jaques Hospital',
		image: '',
		place: 'Newburyport'
	}, {
		hospital_name: 'Columbus Community Hospital',
		image: '',
		place: 'Columbus'
	},
	{
		hospital_name: 'Columbus Community Hospital',
		image: '',
		place: 'Newburyport'
	},
	{
		hospital_name: 'City Hospital at White Rock',
		image: '',
		place: 'Newburyport'
	},
	{
		hospital_name: 'Carroll Hospital Center',
		image: '',
		place: 'Newburyport'
	},
	{
		hospital_name: 'CHI St. Joseph Health Regional',
		image: '',
		place: 'Newburyport'
	}, {
		hospital_name: 'Beaumont Hospital, Dearborn',
		image: '',
		place: 'Newburyport'
	},
	{
		hospital_name: 'Bon Secours St. Francis Hospital',
		image: '',
		place: 'Newburyport'
	},
	{
		hospital_name: 'Bay Area Medical Center',
		image: '',
		place: 'Newburyport'
	},
	{
		hospital_name: 'BRANDON REGIONAL HOSPITAL',
		image: '',
		place: 'Newburyport'
	}










	];
	constructor() { }

	ngOnInit() {
	}
}
