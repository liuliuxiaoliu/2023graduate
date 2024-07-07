package com.example.gejuyuan.controller;


import com.example.gejuyuan.entity.Mrate;
import com.example.gejuyuan.service.MajorRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Mrate")
@CrossOrigin("*")
public class MajorRateController {
    @Autowired
    private MajorRateService majorRateService;

    @GetMapping("/getMrateList")
    public List<Mrate> getMrateData(){
        return majorRateService.getMrateData();
    }
}
