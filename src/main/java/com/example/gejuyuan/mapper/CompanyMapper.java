package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Company;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyMapper {
    List<Company> getCompanyTopList();
}
