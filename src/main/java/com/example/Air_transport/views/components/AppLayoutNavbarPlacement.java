package com.example.Air_transport.views.components;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.Scroller;
import com.vaadin.flow.component.sidenav.SideNav;
import com.vaadin.flow.component.sidenav.SideNavItem;
import com.vaadin.flow.router.Route;

@Route("app-layout-navbar-placement")
public class AppLayoutNavbarPlacement extends AppLayout {

    public AppLayoutNavbarPlacement() {
        DrawerToggle toggle = new DrawerToggle();
        toggle.getStyle();

        H1 title = new H1("CourseWork");
        title.getStyle().set("font-size", "var(--lumo-font-size-l)").set("margin", "0");
        title.setClassName("navbar-title");

        SideNavItem usr = new SideNavItem("Иван", "/users", VaadinIcon.USER.create());
        usr.getStyle().set("position", "absolute");
        usr.getStyle().set("right", "0");

        SideNav nav = getSideNav();
        Scroller scroller = new Scroller(nav);
        scroller.setClassName("custom-scroller");

        addToDrawer(scroller);
        addToNavbar(toggle, title, usr);
    }

    private SideNav getSideNav() {
        SideNav nav = new SideNav();
        nav.addItem(
                createSideNavItem("Главная", "/main", VaadinIcon.AIRPLANE.create()),
                createSideNavItem("Самолеты", "/planes", VaadinIcon.AIRPLANE.create()),
                createSideNavItem("Обслуживание", "/service", VaadinIcon.TOOLS.create()),
                createSideNavItem("Планирование", "/planning", VaadinIcon.CLIPBOARD.create()),
                createSideNavItem("Аэропорты", "/airports", VaadinIcon.GLOBE.create()),
                createSideNavItem("Документы", "/documents", VaadinIcon.FILE.create())
        );
        return nav;
    }

    private SideNavItem createSideNavItem(String label, String route, Icon vaadinIcon) {
        SideNavItem item = new SideNavItem(label, route, vaadinIcon);
        item.setClassName("custom-sidenav-item");
        return item;
    }
}
