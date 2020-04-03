import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import errorData from '@assets/devcenter/gen-errors.json';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  public gridConfig: any;
  public warnings: any = errorData;
  public warning = this.warnings[0] ? this.warnings[0].id : '';
  private dtInstance: any;

  public form = new FormGroup({
    warning: new FormControl(this.warnings[0])
  });

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.loadGridConfig();
  }

  private loadGridConfig() {
    const self = this;
    this.gridConfig = {
      ordering: true,
      customOrdering: false,
      data: (this.warnings && this.warnings[0]) ? this.warnings[0].items : [],
      disableSelection: true,
      columns: [
        {
          data: 'id',
          name: 'id',
          title: 'S.No',
          orderable: false
        },
        {
          data: 'sheetLink',
          name: 'sheetLink',
          title: 'Sheet Link',
          orderable: false,
          render: (data: any, type: any, row: any, meta: any) => {
            return '<a href=' + data + ' target="blank"> ' + row.sheetName + ' </a>';
          }
        },
        {
          data: 'tab',
          name: 'tab',
          title: 'Tab Name',
          orderable: false
        },
        {
          data: 'rowIdx',
          name: 'cell',
          title: 'Cell',
          orderable: false,
          render: (data: any, type: any, row: any, meta: any) => {
            const colIdx = row.column;
            const colStr = self.getColCharIdx(colIdx - 1);

            return colStr + row.rowIdx;
          }
        },
        {
          data: 'type',
          name: 'type',
          title: 'Type',
          orderable: false,
          conditionalColorField: 'type',
          conditionalColor: {
            // tslint:disable-next-line: object-literal-key-quotes
            'Error': 'error-type-error',
            'Warning': 'error-type-warning'
          }
        },
        {
          data: 'problem',
          name: 'problem',
          title: 'description',
          orderable: false
        },
        {
          data: 'solution',
          name: 'solution',
          title: 'Possible solutions',
          orderable: false
        }
      ],
      onInitComplete: function(dtInstance: any, settings: any, json: any){
        self.dtInstance = dtInstance;
      }
    };
  }

  public onGenerationChange(event: any) {
    const selectedIdx = this.warning;

    this.dtInstance.clear();
    this.dtInstance.rows.add(this.warnings[selectedIdx].items).draw();
  }

  private getColCharIdx(colIdx: any) {
    let charCode: number;
    if (colIdx <= 25) {
      charCode = parseInt(colIdx) + parseInt('65');
      return String.fromCharCode(charCode);
    } else {
      const firstCharCode = Math.floor(colIdx / 26) - 1;
      const firstChar = this.getColCharIdx(firstCharCode);

      const lastCharCode = colIdx % 26;
      const lastChar = this.getColCharIdx(lastCharCode);

      return firstChar + lastChar;
    }
  }
}
