package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Salary;
import com.example.gejuyuan.mapper.SalaryMapper;
import com.example.gejuyuan.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SalaryServiceImpl implements SalaryService {
    @Autowired
    private SalaryMapper salaryMapper;

    @Override
    public Map getSalary(){

        //从数据库查出数据
        List<Salary> salaryList=salaryMapper.getSalary();
        //地名
        List<String> areaData=new ArrayList<>();
        //期望薪资
        List<Integer> expectData=new ArrayList<>();
        //实际薪资
        List<Integer> realData=new ArrayList<>();

        for(Salary salary:salaryList)
        {
            //地名
            String area=salary.getArea();
            areaData.add(area);
            //期望薪资
            Integer expectSalary= salary.getExpectSalary();
            expectData.add(expectSalary);
            //实际薪资
            Integer realSalary=salary.getRealSalary();
            realData.add(realSalary);
        }
        //返回给前端map
        Map map=new HashMap();
        //地名
        map.put("areaData",areaData);
        //平均期望薪资
        map.put("expectData",expectData);
        //平均实际薪资
        map.put("realData",realData);
        return map;
    }
}
