import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStaticSecurityService {

  constructor() { }

  evaluateSecurityRights(layoutData: any, workFlowMatrixJson: any, disableAll: any) {
    if (!layoutData || layoutData.length === 0 || !workFlowMatrixJson) {
      return layoutData;
    }

    let mergedWorkflowJson = workFlowMatrixJson;
    if (Array.isArray(workFlowMatrixJson)) {
      mergedWorkflowJson = this.mergeAllJson(workFlowMatrixJson);
    }

    // tslint:disable-next-line:max-line-length
    return this.evaluateLayoutSecurity(layoutData, mergedWorkflowJson, disableAll, Array.isArray(workFlowMatrixJson) && workFlowMatrixJson.length > 1);

  }

  mergeAllJson(workflowJson) {
    if (!workflowJson) {
      return;
    }

    const mergedJson: any = {};
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < workflowJson.length; index++) {

      mergedJson.show = this.unionJson(mergedJson.show, workflowJson[index].show);
      mergedJson.hide = this.intersectJson(mergedJson.hide, workflowJson[index].hide);
      mergedJson.disableonlyfields = this.intersectJson(mergedJson.disableonlyfields, workflowJson[index].disableonlyfields);
      mergedJson.enableonlyfields = this.unionJson(mergedJson.enableonlyfields, workflowJson[index].enableonlyfields);
    }

    if (workflowJson.length <= 1) { return mergedJson; }

    const enabledFields = mergedJson.enableonlyfields || [];
    const disabledFields = mergedJson.disableonlyfields || [];
    const hiddenFields = mergedJson.hide || [];

    for (let i = 0, l = enabledFields.length; i < l; i++) {
      const enableField = enabledFields[i];
      if (enableField === '*') {
        disabledFields.length = 0;
        hiddenFields.length = 0;
        break;
      }
      const disabledIndex = disabledFields.indexOf(enableField);
      if (disabledIndex !== -1) {
        disabledFields.splice(disabledIndex, 1);
      }
      const hiddenIndex = hiddenFields.indexOf(enableField);
      if (hiddenIndex !== -1) {
        hiddenFields.splice(hiddenIndex, 1);
      }
    }


    for (let i = 0, l = disabledFields.length; i < l; i++) {
      const disableField = disabledFields[i];
      if (disableField === '*') {
        hiddenFields.length = 0;
        break;
      }
      const hiddenIndex = hiddenFields.indexOf(disableField);
      if (hiddenIndex !== -1) {
        hiddenFields.splice(hiddenIndex, 1);
      }
    }

    return mergedJson;

  }


  unionJson(json1, json2) {
    if (!json1) {
      return json2;
    }
    if (!json2) {
      return json1;
    }
    const mergedArray = [];
    for (let i = 0, l = json1.length; i < l; i++) {
      mergedArray.push(json1[i]);
    }
    for (let i = 0, l = json2.length; i < l; i++) {
      if (mergedArray.indexOf(json2[i]) !== -1) {
        continue;
      }
      mergedArray.push(json2[i]);
    }
    return mergedArray;
  }

  intersectJson(json1, json2, priorityFields?) {
    if (!json1) { return json2 || []; }
    if (!json2) { return json1 || []; }

    if (json1.indexOf('*') !== -1) { return (json2.length > 0) ? json2 : json1; }
    if (json2.indexOf('*') !== -1) { return (json1.length > 0) ? json1 : json2; }

    const mergedArray = [];
    for (let i = 0, l = json2.length; i < l; i++) {
      if (json1.indexOf(json2[i]) === -1) {
        continue;
      }
      mergedArray.push(json2[i]);
    }
    return mergedArray;
  }

  evaluateLayoutSecurity(layoutData, data, disableAll, isMultiple) {

    if (!data || !layoutData) {
      return layoutData;
    }

    // tslint:disable-next-line:prefer-const
    let fieldPermission;
    // before calculating the layout details, the fields are evaluated
    // against the current user permission and stage
    for (let index = 0; index < layoutData.length; index++) {

      // if the fields passes the security evaluation, then continues the
      // loop
      // otherwise performs the security action, whether the field should
      // be hidden or disabled
      const field = layoutData[index];

      // if the element's security code is not available or the security
      // is configured to *
      // then simply consider thet the fields is accessible to all users

      if (!field.security_code) {

        // this.evaluateLayoutSecurity(field.items, data, disableAll, isMultiple);
        if (field.type === 'tab') {
          if (field.tabs && field.tabs.length > 0) {
            for (const tab in field.tabs) {
              if (field.tabs.hasOwnProperty(tab)) {
                this.evaluateLayoutSecurity(field.tabs[tab].items, data, disableAll, isMultiple);
              }
            }
          }
        } else {
          this.evaluateLayoutSecurity(field.items, data, disableAll, isMultiple);
        }
        field.disableRights = disableAll;
        // if the field contains items and all the child items are
        // empty, then remove the parent container
        if (field.items && field.items.length === 0) {
          layoutData.splice(index, 1);
          index--;
        }

        continue;
      } else if (field.type === 'tab') {
        if (field.tabs && field.tabs.length > 0) {
          for (const tab in field.tabs) {
            if (field.tabs.hasOwnProperty(tab)) {
              this.evaluateLayoutSecurity(field.tabs[tab].items, data, disableAll, isMultiple);
            }
          }
        }
      }

      fieldPermission = this.getPermission(data, field.security_code, isMultiple);
      // if the permission is not available then simple remove the field
      // from the display
      if (fieldPermission === 'h') {

        layoutData.splice(index, 1);
        index--;
        continue;
      }

      if (field.addons) {
        let addOnFieldPermission;
        if (field.addons.security_code) {
          addOnFieldPermission = this.getPermission(data, field.addons.security_code, isMultiple);
          if (addOnFieldPermission === 'h') {
            delete field.addons;
          } else if (addOnFieldPermission === 'r') {
            field.addons.disableRights = true;
          }
        }

        if (field.addons.pre && field.addons.pre.security_code) {
          addOnFieldPermission = this.getPermission(data, field.addons.pre.security_code, isMultiple);
          if (addOnFieldPermission === 'h') {
            delete field.addons.pre;
          } else if (addOnFieldPermission === 'r') {
            field.addons.pre.disableRights = true;
          }
        }

        if (field.addons.post && field.addons.post.security_code) {
          addOnFieldPermission = this.getPermission(data, field.addons.post.security_code, isMultiple);
          if (addOnFieldPermission === 'h') {
            delete field.addons.post;
          } else if (addOnFieldPermission === 'r') {
            field.addons.post.disableRights = true;
          }
        }
      }

      if (fieldPermission === 'r' || disableAll) {
        field.disableRights = true;
      }
      if (field.items) {
        this.evaluateLayoutSecurity(field.items, data, field.disableRights, isMultiple);
      }
      // if the field contains items and all the child items are empty,
      // then remove the parent container
      if (field.items && field.items.length === 0) {
        layoutData.splice(index, 1);
        index--;
      }
    }


    return layoutData;
  }

  isFullAccess(fieldPermissionList) {
    return (fieldPermissionList === '*' || fieldPermissionList.indexOf('*') !== -1);
  }

  // tslint:disable-next-line:variable-name
  getPermission(data, security_code, isMultiple) {

    let fieldPermission = 'w';
    let fullAccess;
    if (data.hide) {

      const hideOnly = data.hide;
      fieldPermission = (hideOnly === '*' || hideOnly.indexOf(security_code) !== -1 || hideOnly.indexOf('*') !== -1) ? 'h' : 'w';
    }

    if ((isMultiple || fieldPermission !== 'h') && data.disableonlyfields) {

      const disableOnly = data.disableonlyfields;
      fullAccess = this.isFullAccess(disableOnly);
      if (!(isMultiple && fullAccess && fieldPermission === 'h')) {
        // tslint:disable-next-line:max-line-length
        fieldPermission = (fullAccess || disableOnly.indexOf(security_code) !== -1) ? 'r' : (isMultiple && fieldPermission !== 'w' ? fieldPermission : 'w');
      }
    }

    if ((isMultiple || fieldPermission !== 'h') && data.show) {

      const showOnly = data.show;
      fullAccess = this.isFullAccess(showOnly);
      if (!(isMultiple && fullAccess && fieldPermission === 'h')) {
        // tslint:disable-next-line:max-line-length
        fieldPermission = (fullAccess || showOnly.indexOf(security_code) !== -1) ? 'w' : (isMultiple && fieldPermission !== 'w' ? fieldPermission : 'h');
      }
    }

    if ((isMultiple || (fieldPermission !== 'h' && fieldPermission !== 'r')) && data.enableonlyfields) {

      const enableOnly = data.enableonlyfields;
      fullAccess = this.isFullAccess(enableOnly);
      if (!(isMultiple && fullAccess && (fieldPermission === 'r' || fieldPermission === 'h'))) {
        // tslint:disable-next-line:max-line-length
        fieldPermission = (fullAccess || enableOnly.indexOf(security_code) !== -1) ? 'w' : (isMultiple && fieldPermission !== 'w' ? fieldPermission : 'r');
      }
    }
    return fieldPermission;
  }



}
