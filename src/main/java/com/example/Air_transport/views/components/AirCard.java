package com.example.Air_transport.views.components;

import com.example.Air_transport.model.Plane;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class AirCard extends VerticalLayout {
    public AirCard(Plane plane) {
        VerticalLayout layout = new VerticalLayout();
        Image image = new Image(plane.getImageUrl(), "123");
        add(image);
        image.setWidth("100%");
        image.setHeight("100%");

        Text nameLabel = new Text(plane.getName());

        Text descriptionLabel = new Text(plane.getDescription());

        Text priceLabel = new Text(String.format("Year: ", plane.getYear()));

        layout.add(image, nameLabel, descriptionLabel, priceLabel);
        add(layout);

        setSpacing(false);
        setPadding(false);
        setWidthFull();
    }
}
