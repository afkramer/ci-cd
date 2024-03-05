package de.vw.fak73.testcicd.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@CrossOrigin("*")
public class TestController {
    @GetMapping
    public String test() {
        return "Changed another time at 15:53";
    }
}
