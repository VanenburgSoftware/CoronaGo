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

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import com.coronago.gotomeeting.api.model.*;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.module.SimpleModule;

public class JsonUtil {
    public static ObjectMapper mapper;

    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");

    static {
        mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
        mapper.setDateFormat(sdf);
        mapper.registerModule(getModule());
        mapper.setVisibility(PropertyAccessor.SETTER, JsonAutoDetect.Visibility.NONE);
        mapper.setVisibility(PropertyAccessor.GETTER, JsonAutoDetect.Visibility.NONE);
        mapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        mapper.configure(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL, true);
    }

    private static Module getModule() {
        SimpleModule module = new SimpleModule("BooleanAsString", new Version(1, 0, 0, null, null, null));
        module.addDeserializer(Boolean.class, new JsonDeserializer<Boolean>() {
            @Override
            public Boolean deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
                String value = jp.getValueAsString();
                return "true".equalsIgnoreCase(value);
            }
        });
        module.addDeserializer(MeetingStatus.class, new JsonDeserializer<MeetingStatus>() {
            @Override
            public MeetingStatus deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
                return getEnumFromString(MeetingStatus.class, jp.getValueAsString());
            }
        });
        module.addDeserializer(MeetingType.class, new JsonDeserializer<MeetingType>() {
            @Override
            public MeetingType deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
                return getEnumFromString(MeetingType.class, jp.getValueAsString());
            }
        });
        return module;
    }

    public static ObjectMapper getJsonMapper() {
        return mapper;
    }

    public static <T extends Enum<T>> T getEnumFromString(Class<T> c, String string) {
        try {
            return Enum.valueOf(c, string);
        }
        catch(NullPointerException ex) {
            return null;
        }
        catch(IllegalArgumentException ex) {
            return null;
        }
    }

    public static String Stringify(Object obj) {
        if (obj == null)
            return "";
        if (obj instanceof Date)
            return sdf.format((Date)obj);
        return obj.toString();
    }
}
