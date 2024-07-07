package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Company;
import com.example.gejuyuan.mapper.CompanyMapper;
import com.example.gejuyuan.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyMapper companyMapper;

    @Override
    public List<Company> getCompanyTopList(){
        List<Company> companyList=companyMapper.getCompanyTopList();
        return companyList;
    }


}
