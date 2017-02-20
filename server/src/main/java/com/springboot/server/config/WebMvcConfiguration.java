package com.springboot.server.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.io.File;

@Configuration
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {

    private static final Logger LOGGER = LoggerFactory.getLogger(WebMvcConfiguration.class.getCanonicalName());

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // TODO: add this to dev profile
        String currentPath = new File(".").getAbsolutePath();
        currentPath = "file:///" + currentPath;

        LOGGER.info("currentPath: " + currentPath);

        // This one adds a link to the distribution folder
        registry.addResourceHandler("/**")
                .addResourceLocations(currentPath + "/client/dist/");

        // This one adds a link to the sources folder for debugging in the browser. This must be configured in conjuction
        // with the following configuration in tsconfig.json file:
        // "sourceMap": true  -> generate source maps so that we can link js with ts files for debugging
        // "sourceRoot": "/app-src" -> same as configured below (this way we get a clean separation between js files and ts files on the client)
        registry.addResourceHandler("/app-src/**")
                .addResourceLocations(currentPath + "/client/src/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/app-src/index.html");
    }
}
