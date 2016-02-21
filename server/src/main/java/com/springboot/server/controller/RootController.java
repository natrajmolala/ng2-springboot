package com.springboot.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

    @RequestMapping(value = {"/home", "/about", "/owner", "/vet"})
    public String auth() {
        return "/index.html";
    }

}
   