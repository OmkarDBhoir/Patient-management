package com.pm.patientservice.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;

public class DateUtils {

    private static final Logger log = LoggerFactory.getLogger(DateUtils.class);

    private static final String[] COMMON_DATE_FORMATS = {"yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM",};
    private static final String DEFAULT_FROMAT = "dd-MM-yyyy";

    public static Date convertStringToDate(String dateString) {
        Date date = null;
        try {
            for(String pattern: DateUtils.COMMON_DATE_FORMATS) {
                date = convertStringToDate(dateString, pattern);
                if(date != null) break;
            }
        } catch (Exception e) {
            log.error("Error converting string to date", e);
        }

        return date;
    }

    public static Date convertStringToDate(String dateString, String pattern) {
        Date date = null;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(pattern);
            date = sdf.parse(dateString);
            return date;
        } catch (Exception e) {
            log.error("Error converting string to date:", e);
        }
        return date;
    }

    public static LocalDateTime getCurrentLocalDateTime() {
        return LocalDateTime.now();
    }

    public static String getStringFromDate(Date date) {
        return getStringFromDate(date, DateUtils.DEFAULT_FROMAT);
    }

    public static String getStringFromDate(Date date, String format) {
        String dateStr = null;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(format);
            dateStr = sdf.format(date);
        } catch (Exception e) {
            log.error("Error converting date to string", e);
        }
        return dateStr;
    }

    public static Date getCurrentDate() {
        return new Date();
    }
}
