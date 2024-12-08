package com.example.Air_transport.views.components;

import com.example.Air_transport.model.Plane;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.NativeLabel;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.Base64;

public class AddCard extends VerticalLayout {
    public AddCard() {
        VerticalLayout layout = new VerticalLayout();
        Image image = new Image("images/add.jpg", "add");
        image.setWidth("100%");
        image.setHeight("300px");
        add(image);
    }
}