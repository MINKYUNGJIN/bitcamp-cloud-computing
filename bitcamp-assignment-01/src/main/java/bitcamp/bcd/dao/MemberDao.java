package bitcamp.bcd.dao;

import java.util.List;
import java.util.Map;

import bitcamp.bcd.domain.Member;

public interface MemberDao {

    List<Member> selectList(Map<String,Object> params);
    Member selectOne(String name);
    int update(Member member);
    int delete(String name);
    int insert(Member member);
    int countAll();
    
}

