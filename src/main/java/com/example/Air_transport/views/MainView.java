package com.example.Air_transport.views;

import com.example.Air_transport.views.components.AppLayoutNavbarPlacement;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

import java.sql.SQLException;

@Route("")
public class MainView extends VerticalLayout {
    public MainView() {
        AppLayoutNavbarPlacement Navbar = new AppLayoutNavbarPlacement();
        add(Navbar);
    }
}
