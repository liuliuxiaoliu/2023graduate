package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Srank;
import com.example.gejuyuan.mapper.SchoolRankMapper;
import com.example.gejuyuan.service.SchoolRankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SchoolRankServiceImpl implements SchoolRankService {
    @Autowired
    private SchoolRankMapper shoolRankMapper;
    @Override
    public List<Srank> getSrankData(){
        List<Srank> srankList = shoolRankMapper.getSrankList();
        return srankList;
    }

}
