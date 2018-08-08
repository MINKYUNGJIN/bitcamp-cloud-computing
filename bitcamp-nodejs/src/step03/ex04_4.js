// 주제 : SQL 요청 처리하기 - 회원 삭제하기
// [실행 URL]
// => http://localhost:8000/member/delete?id=user100
// [출력 결과]
// => 삭제 성공입니다!

const http = require('http')
const url = require('url');
const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host: '13.209.67.27',
    database: 'studydb',
    user: 'study',
    password: '1111'        
});

const server = http.createServer((req, res) => {
    var urlInfo = url.parse(req.url, true)
    
    if(urlInfo.pathname === '/favicon.ico'){
        res.end();
        return;
    }
    
    res.writeHead(200,{
        'Content-type': 'text/plain;charset=UTF-8'
    });
    
    if(urlInfo.pathname !== '/member/delete'){
        res.end('해당 URL을 지원하지 않습니다!');
        return;
    }
    
    var id = urlInfo.query.id;
    
    pool.query('delete from pms2_member where mid= ?', 
        [id],
        function(err, results) {
            if (err){
                res.end('DB 삭제중 예외 발생!')
                return;
            }
            
            res.write('삭제 성공!');
            res.end();
   });
});

server.listen(8000, () => {
    console.log('서버가 시작됨!')
});

