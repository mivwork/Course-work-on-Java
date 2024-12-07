package com.example.Air_transport.views.componentsView;
import com.example.Air_transport.views.components.AppLayoutNavbarPlacement;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route(value = "main", layout = AppLayoutNavbarPlacement.class)
public class Main extends VerticalLayout {
    public Main() {
        setClassName("background-image");
    }
}