package com.example.gejuyuan.controller;

import com.example.gejuyuan.entity.Industry;
import com.example.gejuyuan.service.IndustryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/industry")
@CrossOrigin("*")
public class IndustryController {
    @Autowired
    private IndustryService industryService;
    @GetMapping("/getIndustryList")
    public List<Industry> getIndustryList(){
        return industryService.getIndustryList();
    }
}
