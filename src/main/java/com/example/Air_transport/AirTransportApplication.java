package com.example.Air_transport;

import com.vaadin.flow.component.dependency.CssImport;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@CssImport("./styles/styles.css")
public class AirTransportApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirTransportApplication.class, args);
	}

}
