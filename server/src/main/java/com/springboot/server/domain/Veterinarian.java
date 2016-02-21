package com.springboot.server.domain;

public class Veterinarian {

    private final String firstName;
    private final String lastName;

    public Veterinarian(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
