// 주제 : 데이터베이스 프로그래밍 - delete 실행 I

const mysql = require('mysql');

var con = mysql.createConnection({
    host: '13.209.67.27',
    database: 'studydb',
    user: 'study',
    password: '1111'        
});

con.connect(function(err){
    if(err) throw err; 
    
    console.log('연결 성공입니다!');
    
});

//var mid = "user01";
var mid = "user002' or 1=1 or ''='";

// in-parameter 사용하기
// => 인 파라미터 방식에서는 사용자가 입력한 값으로 SQL을 만드는 것이 아니기 때문에 
//    SQL 조작이 불가능하다.

con.query(
    `delete from pms2_member
    where mid=?`, 
    [mid], // ?(인 파라미터) 갯수 만큼 배열에 값을 담아 놓으면 된다.
    function(err, result){
        if(err) throw err;
        
    console.log('삭제 성공!');
    
});


// SQL 실행이 끝나면 종료하라고 예약한다.
con.end(function(err){ 
    if(err) throw err;
    
    console.log('연결을 끊었습니다.');
}); 

console.log('delete 실행!');

