import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsecurityService {

  constructor() { }

  /**
 * evaluate the security rights for the given layout data
 */
  public evaluateSecurityRights = (layoutData: any, workFlowMatrixJson: any) => {
    if (!layoutData || layoutData.length == 0 || !workFlowMatrixJson)
      return layoutData;
    let mergedWorkflowJson = workFlowMatrixJson;
    if (Array.isArray(workFlowMatrixJson))
      mergedWorkflowJson = this.mergeAllJson(workFlowMatrixJson);
    this.populateSecurityRights(layoutData.buttons.primary, mergedWorkflowJson, layoutData.disabledActions, Array.isArray(workFlowMatrixJson) && workFlowMatrixJson.length > 1);
    this.populateSecurityRights(layoutData.buttons.secondary, mergedWorkflowJson, layoutData.disabledActions, Array.isArray(workFlowMatrixJson) && workFlowMatrixJson.length > 1);

    return layoutData;
  };

  private mergeAllJson = (workflowJson: any) => {

    if (!workflowJson)
      return;
    let mergedJson: any = {};
    for (let index = 0; index < workflowJson.length; index++) {

      mergedJson.showactions = this.unionJson(mergedJson.showactions, workflowJson[index].showactions);
      mergedJson.enableonlyactions = this.unionJson(mergedJson.enableonlyactions, workflowJson[index].enableonlyactions);
      mergedJson.hideactions = this.intersectJson(mergedJson.hideactions, workflowJson[index].hideactions);
      mergedJson.disableonlyactions = this.intersectJson(mergedJson.disableonlyactions, workflowJson[index].disableonlyactions);
    }

    if (workflowJson.length <= 1) return mergedJson;

    let enabledActions = mergedJson.enableonlyactions || [];
    let disabledActions = mergedJson.disableonlyactions || [];
    let hiddenActions = mergedJson.hideactions || [];
    for (let i = 0, l = enabledActions.length; i < l; i++) {
      let enableAction = enabledActions[i];
      if (enableAction == "*") {
        disabledActions.length = 0;
        hiddenActions.length = 0;
        break;
      }
      let disabledIndex = disabledActions.indexOf(enableAction);
      if (disabledIndex != -1) {
        disabledActions.splice(disabledIndex, 1);
      }
      let hiddenIndex = hiddenActions.indexOf(enableAction);
      if (hiddenIndex != -1) {
        hiddenActions.splice(hiddenIndex, 1);
      }
    }

    for (let i = 0, l = disabledActions.length; i < l; i++) {
      let disableAction = disabledActions[i];
      if (disableAction == "*") {
        hiddenActions.length = 0;
        break;
      }
      let hiddenIndex = hiddenActions.indexOf(disableAction);
      if (hiddenIndex != -1) {
        hiddenActions.splice(hiddenIndex, 1);
      }
    }
    return mergedJson;
  };

  private unionJson = (json1: any, json2: any) => {
    if (!json1)
      return json2;
    if (!json2)
      return json1;
    let mergedArray = [];
    for (let i = 0, l = json1.length; i < l; i++) {
      mergedArray.push(json1[i]);
    }
    for (let i = 0, l = json2.length; i < l; i++) {
      if (mergedArray.indexOf(json2[i]) != -1)
        continue;
      mergedArray.push(json2[i]);
    }
    return mergedArray;
  }

  private intersectJson = (json1: any, json2: any, priorityFields?: any) => {
    if (!json1) return json2 || [];
    if (!json2) return json1 || [];

    if (json1.indexOf("*") != -1) return (json2.length > 0) ? json2 : json1;
    if (json2.indexOf("*") != -1) return (json1.length > 0) ? json1 : json2;

    let mergedArray = [];
    for (let i = 0, l = json2.length; i < l; i++) {
      if (json1.indexOf(json2[i]) == -1)
        continue;
      mergedArray.push(json2[i]);
    }
    return mergedArray;
  };

  private populateSecurityRights = (layoutData: any, data: any, disableAll: boolean, isMultiple: boolean) => {

    if (!layoutData)
      return layoutData;
    if (Array.isArray(layoutData)) {
      for (let index = 0; index < layoutData.length; index++) {
        let field = layoutData[index];
        if (Array.isArray(field)) {
          this.populateSecurityRights(field, data, disableAll, isMultiple);
        } else {
          this.evaluateLayoutSecurity(layoutData, data, disableAll, isMultiple);
        }
      };
    }
  }

  private isFullAccess = (fieldPermissionList: any) => {
    return (fieldPermissionList == "*" || fieldPermissionList.indexOf("*") != -1);
  }

  private evaluateLayoutSecurity = (layoutData: any, data: any, disableAll: boolean, isMultiple: boolean) => {
    if (!data || !layoutData || layoutData == undefined)
      return layoutData;

    var field, fieldPermission, lData = layoutData;
    for (var index = 0; index < lData.length; index++) {
      var field = lData[index];

      /** if the element's security code is not available or the security
      * is configured to *
      * then simply consider thet the fields is accessible to all users
      * */
      if (!field.security_code) {
        this.populateSecurityRights(field.dropdown, data, disableAll, isMultiple);
        field.permission = !disableAll;
        continue;
      }

      fieldPermission = 'w';
      if (data.hideactions) {

        var hideOnly = data.hideactions;
        fieldPermission = (hideOnly == "*" || hideOnly.indexOf(field.security_code) != -1 || hideOnly.indexOf("*") != -1) ? 'h' : 'w';
      }

      if ((isMultiple || fieldPermission != 'h') && data.disableonlyactions) {

        var disableOnly = data.disableonlyactions, fullAccess = this.isFullAccess(disableOnly);
        if (!(isMultiple && fullAccess && fieldPermission == 'h')) {
          fieldPermission = (fullAccess || disableOnly.indexOf(field.security_code) != -1) ? 'r' : (isMultiple && fieldPermission != 'w' ? fieldPermission : 'w');
        }
      }

      if ((isMultiple || fieldPermission != 'h') && data.showactions) {

        var showOnly = data.showactions, fullAccess = this.isFullAccess(showOnly);
        if (!(isMultiple && fullAccess && fieldPermission == 'h')) {
          fieldPermission = (fullAccess || showOnly.indexOf(field.security_code) != -1) ? 'w' : (isMultiple && fieldPermission != 'w' ? fieldPermission : 'h');
        }
      }

      if ((isMultiple || (fieldPermission != 'h' && fieldPermission != 'r')) && data.enableonlyactions) {

        var enableOnly = data.enableonlyactions, fullAccess = this.isFullAccess(enableOnly);
        if (!(isMultiple && fullAccess && (fieldPermission == 'h' || fieldPermission == 'r'))) {
          fieldPermission = (fullAccess || enableOnly.indexOf(field.security_code) != -1) ? 'w' : (isMultiple && fieldPermission != 'w' ? fieldPermission : 'r');
        }
      }

      // if the permission is not available then simple remove the field
      // from the display
      if (fieldPermission == 'h') {

        lData.splice(index, 1);
        index--;
        continue;
      }

      if (fieldPermission == 'r' || disableAll)
        field.permission = false;
      if (field.dropdown)
        this.populateSecurityRights(field.dropdown, data, field.disableRights, isMultiple);
    }

    return layoutData;
  };
}
