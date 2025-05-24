package com.pm.patientservice.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {

    private static final String[] COMMON_DATE_FORMATS = {"yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM",};

    public static Date convertStringToDate(String dateString) {
        Date date = null;
        try {
            for(String pattern: DateUtils.COMMON_DATE_FORMATS) {
                date = convertStringToDate(dateString, pattern);
                if(date != null) break;
            }
        } catch (Exception e) {
            e.printStackTrace();
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
            e.printStackTrace();
        }
        return date;
    }
}
