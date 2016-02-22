package com.springboot.server.controller;

import com.springboot.server.domain.Veterinarian;
import com.springboot.server.repository.VetRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/vet")
public class VetController {

    private static final Logger log = LoggerFactory.getLogger(VetController.class);
    @Autowired
    VetRepository vetRepository;

    @RequestMapping("/list")
    public List<Veterinarian> getAllVets() {
        log.info("Get all Vets: ");
        return vetRepository.findAll();
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST, consumes = "application/json")
    public Veterinarian createVet(@RequestBody Veterinarian newVet) {
        log.info("Create new Vet: ");
        return vetRepository.save(newVet);
    }
}