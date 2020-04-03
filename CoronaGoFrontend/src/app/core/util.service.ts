import { Injectable } from '@angular/core';
import { formatDate, formatNumber, formatCurrency, getCurrencySymbol } from '@angular/common';
import { AppConstants } from '@app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public formatDate(date: number, format?: string, locale?: string): string {
    format = format || AppConstants.dateFormat;
    locale = locale || AppConstants.defaultLocale;

    return date ? formatDate(date, format, locale) : '';
  }

  public formatDateTime(date: number, format?: string, locale?: string): string {
    format = format || AppConstants.dateTimeFormat;
    locale = locale || AppConstants.defaultLocale;

    return date ? formatDate(date, format, locale) : '';
  }

  public getUTCTime(date: number, format?: string, locale?: string): string {

    const timeZone = 'UTC';
    format = format || AppConstants.dateFormat;
    locale = locale || AppConstants.defaultLocale;

    return date ? formatDate(date, format, locale, timeZone) : '';
  }

  public getBoolean(value: number | string | boolean): boolean {
    return typeof value === 'boolean' ? value
      : ((typeof value === 'string' && value.toLowerCase() === 'yes') || (typeof value === 'number' && value === 1)) ? true
        : false;
  }
  public isValidUrl(userInput) {
    // tslint:disable-next-line:max-line-length
    userInput = userInput.trim();
    const regexQuery = '^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$';
    const url = new RegExp(regexQuery, 'i');
    return url.test(userInput);
  }

  public isValidEmail(email: string): boolean {
    const regexQuery = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = email.trim();
    return regexQuery.test(email);
  }

  public isValidNumber(num: any): boolean {
    const regexQuery = /^\d*$/;
    return regexQuery.test(num);
  }

  public formatNumber(value: number, digitsInfo: string, locale?: string): string {

    locale = locale || AppConstants.defaultLocale;
    return value ? formatNumber(value, locale, digitsInfo) : '';
  }

  public getCurrencySymbol(code, format?, locale?) {

    format = format || 'narrow';
    locale = locale || AppConstants.defaultLocale;

    return code ? getCurrencySymbol(code, format, locale) : '';
  }

  public formatCurrency(value: number, currencyCode: string, digitsInfo?: string, currency?: string, locale?: string): string {

    locale = locale || AppConstants.defaultLocale;
    currency = currency || getCurrencySymbol(currencyCode, null, locale);

    return value ? formatCurrency(value, locale, currency, currencyCode, digitsInfo) : '';
  }

  public getNameFromEmail(email: string): string {
    if (email) {
      return email.replace(/@[^@]+$/, '').replace(/[^a-zA-Z0-9]/g, ' ');
    }
    return '';
  }

  public splitFileAndData(data, fileFields) {
    const returnData: any = {
      data: {},
      files: {}
    };
    if (!fileFields || !fileFields.length) {
      returnData.data = data;
      return returnData;
    }
    const dataKeys = Object.keys(data);
    dataKeys.forEach(d => {
      if (fileFields.indexOf(d) > -1) {
        returnData.files[d] = data[d];
      } else {
        returnData.data[d] = data[d] ? data[d] : null;
      }
    });

    console.log(returnData);
    return returnData;
  }
  public checkCase(data: any, isCaseSensitive: boolean) {
    if (!data || !data.toUpperCase) { return data; }
    return isCaseSensitive ? data : data.toUpperCase();
  }
  /**
	 * checks whether the two values are equal
	 */
  public isEqualIgnoreCase(data1: any, data2: any, ignoreProperties: any, isCaseSensitive: boolean) {

    if (this.checkCase(data1, isCaseSensitive) === this.checkCase(data2, isCaseSensitive) || data1 === data2) { return true; }
    if ((typeof data1 !== 'object' || typeof data2 !== 'object')) {
      return this.checkCase(data1, isCaseSensitive) === this.checkCase(data2, isCaseSensitive);
    }
    const isValueEmpty1 = (data1 == null || data1 === '' || data1 === undefined || $.isEmptyObject(data1));
    const isValueEmpty2 = (data2 == null || data2 === '' || data2 === undefined || $.isEmptyObject(data2));
    if (isValueEmpty1 && isValueEmpty2) { return true; }

    if (isValueEmpty1 && !isValueEmpty2) { return false; }
    if (!isValueEmpty1 && isValueEmpty2) { return false; }

    ignoreProperties = ignoreProperties || [];
    let keys = Object.keys(data1 || {});
    const data2Keys = Object.keys(data2 || {});
    keys = keys.concat(Object.keys(data2 || {}));
    for (let index = 0; index < keys.length; index++) {

      const key = keys[index];
      const value1 = this.checkCase(data1[key], isCaseSensitive);
      const value2 = this.checkCase(data2[key], isCaseSensitive);
      if (ignoreProperties.indexOf(key) !== -1) { continue; }
      if (value1 === value2
        || ((value1 === null || value1 === '' || value1 === undefined)
          && (value2 === null || value2 === '' || value2 === undefined))) { continue; }

      const isValue1Array = Array.isArray(value1);
      const isValue2Array = Array.isArray(value2);
      if ((isValue1Array && !isValue2Array)
        || (!isValue1Array && isValue2Array)
        || (isValue1Array && isValue2Array
          && value1.length !== value2.length)) { return false; }
      let retVal = false;
      if (isValue1Array && isValue2Array) {
        for (let arrIndex = 0; arrIndex < value1.length; arrIndex++) {
          retVal = this.isEqualIgnoreCase(value1[arrIndex], value2[arrIndex], ignoreProperties, isCaseSensitive)
          if (!retVal) { return false; }
        }
      } else if (typeof value1 === 'object' && typeof value2 === 'object') {
        retVal = this.isEqualIgnoreCase(value1, value2, ignoreProperties, isCaseSensitive)
      } else if ((typeof value1 === 'string' && typeof value2 === 'string') || (typeof value1 === 'number' && typeof value2 === 'number')) {
        retVal = (value1 === value2);
      }
      if (!retVal) {
        return false;
      }
    }

    return true;
  };
}
