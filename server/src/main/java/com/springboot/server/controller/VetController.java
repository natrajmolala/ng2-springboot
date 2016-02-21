package com.springboot.server.controller;

import com.springboot.server.domain.Veterinarian;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/vet")
public class VetController {

    @RequestMapping("/list")
    public List<Veterinarian> getAllVets() {

        System.out.println("Inside Vet list ");
        List<Veterinarian> vets = new ArrayList<>();
        vets.add(new Veterinarian("John", "Rambo"));
        vets.add(new Veterinarian("Adam", "Smith"));
        vets.add(new Veterinarian("Ian", "Miller"));

        return vets;
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST, consumes = "application/json")
    public Veterinarian createVet(@RequestBody Veterinarian newVet) {
        System.out.println("Inside Vet create " + newVet);

        return newVet;
    }
}