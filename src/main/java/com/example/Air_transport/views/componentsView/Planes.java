package com.example.Air_transport.views.componentsView;
import com.example.Air_transport.model.Plane;
import com.example.Air_transport.views.components.AirCard;
import com.example.Air_transport.views.components.AppLayoutNavbarPlacement;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route(value = "planes", layout = AppLayoutNavbarPlacement.class)
public class Planes extends VerticalLayout {
    public Planes(){
        for (int i = 0; i < 10; i++){
            HorizontalLayout hl = new HorizontalLayout();
            for (int j = 0;  j < 3; j++){
                hl.add(new AirCard(new Plane("Airbus A320", "Хороший самолет", 2018, "images/1234.jpg")));
                add(hl);
                i++;
            }
        }
    }
}
