package com.example.gejuyuan.controller;

import com.example.gejuyuan.service.DirectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/direction")
public class DirectionController {
    @Autowired
    private DirectionService directionService;

    @GetMapping("/getDirectionList")
    public Map getDirectionList() {
        return directionService.getDirection();
    }
}
