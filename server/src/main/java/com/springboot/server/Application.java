package com.springboot.server;

import com.springboot.server.domain.Veterinarian;
import com.springboot.server.repository.VetRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner seedData(VetRepository repository) {
        return (args) -> {
            // seed some Veterinarians
            repository.save(new Veterinarian("Jack", "Bauer", "Nutrition"));
            repository.save(new Veterinarian("Chloe", "O'Brian", "Radiology"));
            repository.save(new Veterinarian("Kim", "Bauer", "Surgery"));
            repository.save(new Veterinarian("David", "Palmer", "Toxicology"));
            repository.save(new Veterinarian("Michelle", "Dessler", "Surgery"));

            // fetch all Veterinarian
            log.info("-------------------------------");
            log.info("Veterinarians found with findAll(): " + repository.findAll().size());
            log.info("-------------------------------");
            log.info("");
        };
    }
}