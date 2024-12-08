package com.example.Air_transport.repository;

import com.example.Air_transport.model.ManufacturerPlane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ManufacturerPlaneRepository extends JpaRepository<ManufacturerPlane, Long> {
    @Query("SELECT DISTINCT m.name FROM ManufacturerPlane m")
    List<String> findDistinctNames();
}