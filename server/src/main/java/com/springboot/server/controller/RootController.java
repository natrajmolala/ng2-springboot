package com.springboot.server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

    Logger logger = LoggerFactory.getLogger(RootController.class.getCanonicalName());

    @RequestMapping(value = {"/", "/home", "/about", "/owner", "/vet/**"})
    public String auth() {
        logger.info("Inside auth.....");
        return "/index.html";
    }

}
   