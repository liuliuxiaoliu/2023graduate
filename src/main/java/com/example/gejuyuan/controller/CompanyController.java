package com.example.gejuyuan.controller;

import com.example.gejuyuan.entity.Company;
import com.example.gejuyuan.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/company")
@CrossOrigin("*")
public class CompanyController {

    @Autowired
    private CompanyService companyService;


    @GetMapping("/getCompanyTopList")
    public List<Company> getPostList(){
        return companyService.getCompanyTopList();
    }
}
