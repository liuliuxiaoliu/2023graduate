package com.example.gejuyuan.controller;

import com.example.gejuyuan.entity.Satisfaction;
import com.example.gejuyuan.service.SatisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/satis")
@CrossOrigin("*")
public class SatisfactionController {
    @Autowired
    private SatisService satisService;
    @GetMapping("/getSatisList")
    public List<Satisfaction> getSatisList(){
            return satisService.getSatisList();
    }

}
