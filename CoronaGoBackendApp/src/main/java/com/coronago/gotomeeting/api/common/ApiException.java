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
