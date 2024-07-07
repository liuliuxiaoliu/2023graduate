package com.example.gejuyuan.mapper;
import com.example.gejuyuan.entity.Direction;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
@Mapper

public interface DirectionMapper {
    List<Direction> getDirectionList();
}
