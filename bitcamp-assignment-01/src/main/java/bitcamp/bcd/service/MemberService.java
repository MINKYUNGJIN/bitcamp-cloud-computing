package bitcamp.bcd.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.bcd.dao.MemberDao;
import bitcamp.bcd.domain.Member;

@Service
public class MemberService {
    
    @Autowired MemberDao memberDao;

    public List<Member> list(int page, int size) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startIndex", (page - 1) * size);
        params.put("pageSize", size);
        
        return memberDao.selectList(params);
    }

    public Member get(String name) {
        return memberDao.selectOne(name);
    }

    public int update(Member member) {
        int count = memberDao.update(member);
        
        return count;
    }

    public int delete(String name) {
        return memberDao.delete(name);
    }

    public void add(Member member) {
        memberDao.insert(member);
    }
    
    public int getTotalPage(int size) {
        int count = memberDao.countAll();
        int totalPage = count / size;
        if (count % size > 0)
            totalPage++;
        return totalPage;
    }
}

