package com.example.Air_transport.repository;

import com.example.Air_transport.model.ModelPlane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ModelPlaneRepository extends JpaRepository<ModelPlane, Long> {
    @Query("SELECT DISTINCT m.name FROM ModelPlane m")
    List<String> findDistinctNames();

    @Query("SELECT DISTINCT m.name FROM ModelPlane m WHERE m.manufacturer.name = :manufacturerName")
    List<String> findModelNamesByManufacturer(String manufacturerName);
}
