package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Mrate;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MajorRateMapper {
    List<Mrate> getMrateList();
}
