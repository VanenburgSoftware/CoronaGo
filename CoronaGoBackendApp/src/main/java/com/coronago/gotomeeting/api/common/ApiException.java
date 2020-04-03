/*
 * © 2017 LogMeIn, Inc. All Rights Reserved.
 * All rights reserved.
 * 
 * This software is distributed under the terms and conditions of the
 * LogMeIn SDK License Agreement. Please see file LICENSE for details.
 * 
 * Auto-generated file.
 */


package com.coronago.gotomeeting.api.common;

public class ApiException extends Exception {
    int code = 0;
    String message = null;

    public ApiException(int code, Exception e) {
        super(e);
        this.code = code;
    }

    public ApiException(String message) {
        this(0, message);
    }

    public ApiException(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public ApiException(Exception e) {
        super(e);
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
