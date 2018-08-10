package bitcamp.bcd.dao;

import java.util.List;
import java.util.Map;

import bitcamp.bcd.domain.BusinessMember;

public interface BusinessMemberDao {

    List<BusinessMember> selectList(Map<String,Object> params);
    BusinessMember selectOne(String name);
    int update(BusinessMember member);
    int delete(String name);
    int insert(BusinessMember member);
    
}