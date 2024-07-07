package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Industry;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IndustryMapper {
    List<Industry> getIndustryList();
}
