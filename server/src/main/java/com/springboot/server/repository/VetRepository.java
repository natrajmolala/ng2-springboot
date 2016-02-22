package com.springboot.server.repository;

import com.springboot.server.domain.Veterinarian;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VetRepository extends JpaRepository<Veterinarian, Long> {

    List<Veterinarian> findByLastName(String lastName);

}
