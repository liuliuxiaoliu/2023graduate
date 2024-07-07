package com.example.gejuyuan.service;

import com.example.gejuyuan.entity.Company;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CompanyService {
    public List<Company> getCompanyTopList();
}
