package com.examensarbete.pontus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class PontusApplication {

    public static void main(String[] args) {
        SpringApplication.run(PontusApplication.class, args);
    }

}
