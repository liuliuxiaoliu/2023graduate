package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Work1;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface WorkMapper {
    List<Work1> getWork1();
}
