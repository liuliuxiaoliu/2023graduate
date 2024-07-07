package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Direction;
import com.example.gejuyuan.mapper.DirectionMapper;
import com.example.gejuyuan.service.DirectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DirectionServiceImpl implements DirectionService {
    @Autowired
    private DirectionMapper directionMapper;

    @Override
    public Map getDirection() {
        List<Direction> directions = directionMapper.getDirectionList();
        List<String> typeData = new ArrayList<>();
        List<Integer> countData = new ArrayList<>();
        List<Integer> rateData = new ArrayList<>();
        for (Direction direction : directions) {
            String type = direction.getType();
            typeData.add(type);
            Integer count = direction.getCount();
            countData.add(count);
        }
        Integer num = 0;
        for (Integer count : countData) {
            num += count;
        }
        for (Integer count : countData) {
            double rates = ((count * 1.0) / (num * 1.0)) * 100;
            Integer rate = (int) rates;
            rateData.add(rate);
        }
        Map map = new HashMap();
        map.put("typeData", typeData);
        map.put("countData", countData);
        map.put("rateData", rateData);
        return map;
    }
}
