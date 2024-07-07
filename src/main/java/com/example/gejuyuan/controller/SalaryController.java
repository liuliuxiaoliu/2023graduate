package com.example.gejuyuan.controller;

import com.example.gejuyuan.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("salary")
@CrossOrigin("*")
public class SalaryController {
    @Autowired
    private SalaryService salaryService;

    @GetMapping("/getSalary")
    public Map getSalary(){
        return salaryService.getSalary();
    }
}
