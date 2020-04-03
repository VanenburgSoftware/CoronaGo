import { UtilService } from '@core/util.service';

export class LlcListHandler {
    constructor(public util: UtilService) {}
    public extendedGridConfig(gridConfig: any): any {
        for (const idx in gridConfig.columns) {
        }
        return gridConfig;
    }

    public beforeRowMenuOptionShow(option: any, data: any, row: any): any {
        return option;
    }

    public onAfterGridInitComplete(dtTable: any, settings: any, json: any) {
	}

	public onAfterRowSelect(rows: any, idx: any) {
	}

	public onAfterRowClick(event: any, id: any) {
	}
	
	public onBeforeButtonAction(btn: any): any {
		return;
	}
	
	public onAfterButtonAction(btn: any, response: any): any {
		return;
	}
	
	public onAfterRowMenuAction(option: any, response: any): any {
	}
	
	public onBeforeComponentDestroy() {
	}
}