package com.example.Air_transport.model;
import jakarta.persistence.*;

@Entity
@Table(name = "model_plane")
public class ModelPlane {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    public ModelPlane() {
    }

    @ManyToOne
    @JoinColumn(name = "manufacturer_id")
    private ManufacturerPlane manufacturer;

    @Column(name = "name")
    private String name;
    @Column(name = "actual")
    private Boolean actual;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ManufacturerPlane getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(ManufacturerPlane manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getActual() {
        return actual;
    }

    public void setActual(Boolean actual) {
        this.actual = actual;
    }
}
