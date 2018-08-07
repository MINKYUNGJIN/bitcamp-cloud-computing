// 주제 : 데이터베이스 프로그래밍 - update 실행 I

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

var mid = 'user002';

con.query(
    `update pms2_member set email='user002@test.com'
    where mid='${mid}'`, 
    function(err, result){
        if(err) throw err;
        
    console.log('변경 성공!');
    
});


// SQL 실행이 끝나면 종료하라고 예약한다.
con.end(function(err){ 
    if(err) throw err;
    
    console.log('연결을 끊었습니다.');
}); 

console.log('update 실행!');

