package com.example.gejuyuan.controller;

import com.example.gejuyuan.entity.Srank;
import com.example.gejuyuan.service.SchoolRankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Srank")
@CrossOrigin("*")
public class SchoolRankController {
    @Autowired
    private SchoolRankService shoolRateService;

    @GetMapping("/getSrankList")
    public List<Srank> getSrankData(){
        return shoolRateService.getSrankData();
    }
}
