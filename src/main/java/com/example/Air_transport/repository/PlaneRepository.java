package com.example.Air_transport.repository;

import com.example.Air_transport.model.ModelPlane;
import com.example.Air_transport.model.Plane;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaneRepository extends JpaRepository<Plane, Long> {
}
