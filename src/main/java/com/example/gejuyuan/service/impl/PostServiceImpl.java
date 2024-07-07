package com.example.gejuyuan.service.impl;

import com.example.gejuyuan.entity.Post;
import com.example.gejuyuan.mapper.PostMapper;
import com.example.gejuyuan.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostMapper postMapper;

    @Override
    public Map getPostList()
    {
        List<Post> postList=postMapper.getPostList();
        List<String> names=new ArrayList<>();
        List<Integer> salarys=new ArrayList<>();
        for (Post post:postList){
            String name=post.getName();
            names.add(name);
            Integer salary=post.getSalary();
            salarys.add(salary);
        }

        // 返回给前端的数据结构map
        Map map = new HashMap();
        // 战队名称数据
        map.put("names", names);
        // 战队胜的次数
        map.put("salarys", salarys);

        return map;

    }
}
