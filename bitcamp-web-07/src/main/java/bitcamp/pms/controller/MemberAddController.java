package bitcamp.pms.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.pms.dao.MemberDao;
import bitcamp.pms.domain.Member;

public class MemberAddController implements PageController {
    
    MemberDao memberDao;
    
    public MemberAddController(MemberDao memberDao) {
        this.memberDao = memberDao;
    }
    
    public String service(
            HttpServletRequest request, 
            HttpServletResponse response) throws Exception {
        //GET요청일때
        if(request.getMethod().equals("GET")) {
            return "/member/form.jsp";
        }
        
        Member member = new Member();
        member.setId(request.getParameter("id"));
        member.setEmail(request.getParameter("email"));
        member.setPassword(request.getParameter("password"));
        
        memberDao.insert(member);
        //POST요청일때
        return "redirect:list";
        
   }
    
}