import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-custom-element',
	templateUrl: './custom-element.component.html',
	styleUrls: ['./custom-element.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CustomElementComponent),
			multi: true
		}
	]
})
export class CustomElementComponent implements ControlValueAccessor, OnInit {
	@Input() currentForm: any;
	@Input() component: any;
	
	private _model: any;
	private onChange: (m: any) => void;
	private onTouched: (m: any) => void;
	
	constructor() { }
	
	get model() {
		return this._model;
	}
	
	writeValue(value: any): void {
		this._model = value;
	}
	
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	
	set(value: any) {
		this._model = value;
		this.onChange(this._model);
	}
	
	ngOnInit() {
	
	}
}