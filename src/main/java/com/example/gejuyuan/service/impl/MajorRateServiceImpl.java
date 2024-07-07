package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Mrate;
import com.example.gejuyuan.mapper.MajorRateMapper;
import com.example.gejuyuan.service.MajorRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MajorRateServiceImpl implements MajorRateService {
    @Autowired
    private MajorRateMapper majorRateMapper;
    @Override
    public List<Mrate> getMrateData(){
        List<Mrate> mrateList = majorRateMapper.getMrateList();
        return mrateList;
    }

}
