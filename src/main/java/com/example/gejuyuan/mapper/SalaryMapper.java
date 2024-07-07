package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Salary;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SalaryMapper {

    List<Salary> getSalary();

}
