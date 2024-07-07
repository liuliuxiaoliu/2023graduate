package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Satisfaction;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SatisMapper {
    List<Satisfaction> getSatisList();
}
