package com.example.Air_transport.model;

public class Plane {
    private String name;
    private String description;
    private int year;
    private String imageUrl;

    public Plane(String name, String description, int year, String imageUrl) {
        this.name = name;
        this.description = description;
        this.year = year;
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getYear() {
        return year;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
