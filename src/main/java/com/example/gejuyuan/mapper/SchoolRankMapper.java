package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Srank;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SchoolRankMapper {
    List<Srank> getSrankList();
}
