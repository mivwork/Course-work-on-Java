package com.example.Air_transport.views.componentsView;
import com.example.Air_transport.model.ManufacturerPlane;
import com.example.Air_transport.model.ModelPlane;
import com.example.Air_transport.model.Plane;
import com.example.Air_transport.repository.ManufacturerPlaneRepository;
import com.example.Air_transport.repository.ModelPlaneRepository;
import com.example.Air_transport.repository.PlaneRepository;
import com.example.Air_transport.views.components.AddCard;
import com.example.Air_transport.views.components.AirCard;
import com.example.Air_transport.views.components.AppLayoutNavbarPlacement;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Route(value = "planes", layout = AppLayoutNavbarPlacement.class)
public class Planes extends VerticalLayout {

    private final PlaneRepository planeRepository;
    private final ModelPlaneRepository modelPlaneRepository;
    private final ManufacturerPlaneRepository manufacturerPlaneRepository;

    private ComboBox manufacturerFilter;
    private ComboBox modelFilter;

    @Autowired
    public Planes(PlaneRepository planeRepository, ModelPlaneRepository modelPlaneRepository, ManufacturerPlaneRepository manufacturerPlaneRepository){
        this.planeRepository = planeRepository;
        this.modelPlaneRepository = modelPlaneRepository;
        this.manufacturerPlaneRepository = manufacturerPlaneRepository;

        manufacturerFilter = new ComboBox<>("Производитель");
        modelFilter = new ComboBox<>("Модель");

        manufacturerFilter.setItems(manufacturerPlaneRepository.findDistinctNames());
        modelFilter.setItems(modelPlaneRepository.findDistinctNames());

        manufacturerFilter.addValueChangeListener(e -> updateModels());
        modelFilter.setVisible(false);

        HorizontalLayout f = new HorizontalLayout();
        f.add(manufacturerFilter, modelFilter);
        f.setClassName("filter-bar");
        add(f);

        initialize();
    }

    private void initialize() {
        setClassName("centered-content");
        List<Plane> planes = planeRepository.findAll();
        HorizontalLayout hl = new HorizontalLayout();
        int count = 0;
        for (int i = 0; i < planes.size(); i++){
            if (count < 3) {

                AirCard ac = new AirCard(planes.get(i));
                ac.setClassName("card");

                hl.add(ac);
                add(hl);
                count++;
//                if (i + 1 == planes.size())
//                    hl.add(new AddCard());
            } else {
                count = 0;

                AirCard ac = new AirCard(planes.get(i));
                ac.setClassName("card");

                hl = new HorizontalLayout();
                hl.add(ac);
                add(hl);
                count++;
            }
        }
    }

    private void updateModels() {
        String selectedManufacturer = manufacturerFilter.getValue().toString();
        if (selectedManufacturer != null) {
            modelFilter.setItems(modelPlaneRepository.findModelNamesByManufacturer(selectedManufacturer));
            modelFilter.setVisible(true);
        } else {
            modelFilter.setItems(List.of());
            modelFilter.setVisible(false);
        }

        // Получаем отфильтрованные самолеты
//        List<Plane> filteredPlanes = planeRepository.findAll().stream()
//                .filter(plane -> manufacturerFilter.getValue() == null || plane.getManufacturer_id().getName().equals(manufacturerFilter.getValue()))
//                .filter(plane -> modelFilter.getValue() == null || plane.getModel_id().getName().equals(modelFilter.getValue()))
//                .collect(Collectors.toList());

        modelFilter.clear();
    }

}
