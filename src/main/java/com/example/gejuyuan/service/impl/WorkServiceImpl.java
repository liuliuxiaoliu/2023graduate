package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Work1;
import com.example.gejuyuan.mapper.WorkMapper;
import com.example.gejuyuan.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WorkServiceImpl implements WorkService {
    @Autowired
    private WorkMapper workMapper;

    @Override
    public Map getWork1(){

        //从数据库查出数据
        List<Work1> workList=workMapper.getWork1();
        //地名
        List<String> areaData=new ArrayList<>();
        //就业人数
        List<Integer> worknumData=new ArrayList<>();
        //未就业人数
        List<Double> noworkData=new ArrayList<>();
        //就业率
        List<Integer> workrateData=new ArrayList<>();

        for(Work1 work:workList)
        {
            //地名
            String area=work.getArea();
            areaData.add(area);
            //就业人数
            Integer worknum= work.getWorknum();
            worknumData.add(worknum);
            //未就业人数
            Double nowork=work.getNowork();
            noworkData.add(nowork);
            //就业率
            Integer workrate=work.getWorkrate();
            workrateData.add(workrate);
        }
        //返回给前端map
        Map map=new HashMap();
        //地名
        map.put("areaData",areaData);
        //就业人数
        map.put("worknumData",worknumData);
        //未就业人数
        map.put("noworkData",noworkData);
        //就业率
        map.put("workrateData",workrateData);

        return map;
    }
}
