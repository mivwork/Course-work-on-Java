package com.example.Air_transport.views.components;

import com.example.Air_transport.model.Plane;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.NativeLabel;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.Base64;

public class AirCard extends VerticalLayout {
    public AirCard(Plane plane) {
        VerticalLayout layout = new VerticalLayout();
        Image image = null;
        try {
            // Преобразуем данные изображения в InputStream
            InputStream inputStream = new ByteArrayInputStream(plane.getImage_Data());
            ByteArrayOutputStream buffer = new ByteArrayOutputStream();

            int nRead;
            byte[] data = new byte[16384];
            while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
                buffer.write(data, 0, nRead);
            }
            byte[] imageBytes = buffer.toByteArray();

            // Кодируем массив байтов в Base64
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);

            // Создаем строку с данными изображения в формате Base64
            String imageDataUrl = "data:image/jpeg;base64," + base64Image;

            // Создаем компонент Image и устанавливаем ему URL изображения
            image = new Image(imageDataUrl, "Plane Image");

        } catch (Exception e) {
            e.printStackTrace();
        }

        image.setWidth("350px");
        image.setHeight("270px");
        image.setClassName("no-drag");

        NativeLabel manufacturer_model = new NativeLabel(plane.getManufacturer_id().getName() + ": " + plane.getModel_id().getName());
        //NativeLabel model = new NativeLabel(plane.getModel_id().getName());

        manufacturer_model.addClassName("centered-bold-label");
        //model.addClassName("centered-bold-label");

        layout.add(image);
        layout.add(manufacturer_model);
        //layout.add(model);
        add(layout);

        setSpacing(false);
        setPadding(false);
        setWidthFull();
    }
}
