package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Industry;
import com.example.gejuyuan.mapper.IndustryMapper;
import com.example.gejuyuan.service.IndustryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class IndustryServiceImpl implements IndustryService {
    @Autowired
    private IndustryMapper industryMapper;
    @Override
    public List<Industry> getIndustryList() {

        return industryMapper.getIndustryList();
    }
}
