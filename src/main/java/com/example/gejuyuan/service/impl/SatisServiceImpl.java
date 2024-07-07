package com.example.gejuyuan.service.impl;
import com.example.gejuyuan.entity.Satisfaction;
import com.example.gejuyuan.mapper.SatisMapper;
import com.example.gejuyuan.service.SatisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SatisServiceImpl implements SatisService {
   @Autowired
    private SatisMapper satisMapper;
    @Override
    public List<Satisfaction> getSatisList() {

            return satisMapper.getSatisList();
    }

}
