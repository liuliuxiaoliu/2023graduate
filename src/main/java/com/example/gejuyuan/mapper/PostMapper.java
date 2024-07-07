package com.example.gejuyuan.mapper;

import com.example.gejuyuan.entity.Post;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {

    List<Post> getPostList();

}
