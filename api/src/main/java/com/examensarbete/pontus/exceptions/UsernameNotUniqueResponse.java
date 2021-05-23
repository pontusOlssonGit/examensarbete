package com.examensarbete.pontus.exceptions;

public class UsernameNotUniqueResponse {

    private String username;

    public UsernameNotUniqueResponse(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
