package com.example.gejuyuan.controller;

import com.example.gejuyuan.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("work1")
@CrossOrigin("*")
public class WorkController {
    @Autowired
    private WorkService workService;

    @GetMapping("/getWork1")
    public Map getWork1(){
        return workService.getWork1();
    }
}
