import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-vs-multiselect',
    templateUrl: './vs-multiselect.component.html',
    styleUrls: ['./vs-multiselect.component.scss']
})
export class VsMultiselectComponent implements OnInit {
    private optionValues: any[] = [];
    private selectedValue: string[] = [];
    public columnNumbers: number[];
    private disableOptions: boolean = false;
    private isOptionsfetched: boolean = false;
    private isSelectedFetched: boolean = false;
    private columnsAndValueMap = new Map();
    private optionsCheckedMap = new Map();

    //@Input() options: string[];
    @Input() id: string = 'id';
    @Input() label: string = 'label';
    @Input() columns: number;

    @Input()
    get options() {
        return this.options;
    }

    @Input()
    get selected() {
        return this.selectedValue;
    }

    @Input()
    get disabled() {
        return this.disabled;
    }

    @Output() selectedChange = new EventEmitter();

    set options(optionsList: any[]) {
        if(!optionsList) {
            return;
        }
        this.isOptionsfetched = true;

        this.optionValues = optionsList;

        if(this.isOptionsfetched && this.isSelectedFetched) {
            this.setColumnsArrayMap();
            this.setOptionsCheckedMap();
        }
    }

    set selected(selectedOptions: string[]) {
        this.selectedValue = selectedOptions;
        let emitEvent = this.isSelectedFetched;
        this.isSelectedFetched = true;

        if(this.isOptionsfetched && this.isSelectedFetched) {
            this.setColumnsArrayMap();
            this.setOptionsCheckedMap();
        }

        emitEvent && this.selectedChange.emit(this.selectedValue);
    }

    set disabled(isDisabled: boolean) {
        this.disableOptions = isDisabled;
    }

    constructor() {}

    ngOnInit() {}

    private checkboxAction(option, ev) {
        let tmpArray = this.selected;

        if(ev.target.checked) {
            this.optionsCheckedMap.set(option, true);
            tmpArray.push(option[this.id]);
            this.selected = tmpArray;
        } else {
            let index = this.selected.indexOf(option[this.id]);
            this.optionsCheckedMap.set(option, false);

            if(index !== -1) {
                tmpArray.splice(index, 1);
                this.selected = tmpArray;
            }
        }
    }

    private setColumnsArrayMap() {
        let splitNum = Math.ceil(this.optionValues.length / this.columns);

        this.columnNumbers = Array(this.columns).fill(0).map((x, i)=>i);

        for (let num of this.columnNumbers) {
            let start = num*splitNum;
            this.columnsAndValueMap.set(num, this.optionValues.slice(start, start+splitNum));
        }
    }

    private setOptionsCheckedMap() {
        for (let option of this.optionValues) {
            this.optionsCheckedMap.set(option, (this.selectedValue.indexOf(option[this.id]) !== -1));
            //this.optionsCheckedMap.set(option, this.selectedValue.includes(option[this.id]));
        }
    }

}
