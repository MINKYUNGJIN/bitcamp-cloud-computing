// 주제 : 데이터베이스 프로그래밍 - select 실행 I

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

// query(sql, 실행 될 호출 함수);
// => SQL을 바로 실행하는 것이 아니라 실행을 예약한다.
// => DBMS와 연결되면 이렇게 예약한 SQL문을 실행할 것이다.
// => 문제는 연결 오류에 상관없이 무조건 예약한다는 것이다.
//    connect()에 등록한 함수에서 예외를 던지지 않으면
//    이 SQL문을 실행한다.
con.query('select * from pms2_member', function(err, results){
    if(err) throw err;
    
    // results 파라미터에 결과가 들어있다.
    for(var row of results){
        // row 객체에서 값을 꺼낼 때는 SQL에서 지정한 컬럼명 또는 별명을 사용한다.
        console.log(row.email, row.mid, row.pwd);
    }
});


// SQL 실행이 끝나면 종료하라고 예약한다.
con.end(function(err){ 
    if(err) throw err;
    
    console.log('연결을 끊었습니다.');
}); 

console.log('select 실행!');

