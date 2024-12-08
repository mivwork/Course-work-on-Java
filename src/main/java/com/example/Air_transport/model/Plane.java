package com.example.Air_transport.model;
import jakarta.persistence.*;

@Entity
@Table(name = "plane")
public class Plane {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "manufacturer_id")
    private ManufacturerPlane manufacturer_id;

    @ManyToOne
    @JoinColumn(name = "model_id")
    private ModelPlane model_id;

    @Column(name = "image_data")
    private byte[] image_Data;

    @Column(name = "image_name")
    private String image_Name;

    public Plane() {
    }

    public Long getId() {
        return id;
    }

    public ManufacturerPlane getManufacturer_id() {
        return manufacturer_id;
    }

    public ModelPlane getModel_id() {
        return model_id;
    }

    public byte[] getImage_Data() {
        return image_Data;
    }

    public String getImage_Name() {
        return image_Name;
    }
}

