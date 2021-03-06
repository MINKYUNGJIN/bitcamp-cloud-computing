// 주제 : DAO 분리

const mysql = require('mysql')
const express = require('express')
const app = express();
const memberdao = require('./memberdao')

var pool = mysql.createPool({
    connectionLimit : 10,
    host: '13.209.67.27',
    database: 'studydb',
    user: 'study',
    password: '1111'        
});

memberdao.setConnectionPool(pool);


// get 요청에 대해 핸들러를 등록하기
app.get('/member/list', (req, res) => {
    res.writeHead(200,{'Content-type': 'text/plain;charset=UTF-8'});
    
    var pageNo = 1;
    var pageSize = 3;
    
    if(req.query.pageNo){
        pageNo = parseInt(req.query.pageNo)
    }
    if(req.query.pageSize){
        pageSize = parseInt(req.query.pageSize)
    }

    memberdao.list(pageNo, pageSize, (err, results) => {
        if (err){
            res.end('DB 조회중 예외 발생!')
            return;
        }
        
        for (var row of results) {
            res.write(`${row.email}, ${row.mid}\n`);
        }
        res.end();
    });
});

app.get('/member/add', (req, res) => {
    res.writeHead(200,{'Content-type': 'text/plain;charset=UTF-8'});
    memberdao.add(req.query, (err, result) => {
        if (err){
            res.end('DB 등록중 예외 발생!')
            return;
        }
        
        res.write('등록 성공!');
        res.end();
   });
});

app.get('/member/update', (req, res) => {
    res.writeHead(200,{'Content-type': 'text/plain;charset=UTF-8'});
    
    memberdao.update(req.query, (err, result) => {
        if (err){
            res.end('DB 변경중 예외 발생!')
            return;
        }
        
        res.write('변경 성공!');
        res.end();
    });
});

app.get('/member/delete', (req, res) => {
    res.writeHead(200,{'Content-type': 'text/plain;charset=UTF-8'});
    memberdao.remove(req.query, (err, result) => {
        if (err){
            res.end('DB 삭제중 예외 발생!')
            return;
        }
        
        res.write('삭제 성공!');
        res.end();
    });
});

app.get('/hello', (req, res) => {
    res.writeHead(200,{'Content-type': 'text/plain;charset=UTF-8'});
    
    res.write(`${req.query.name}님 안녕하세요!`);
    res.end();
});


app.listen(8000, () => {
    console.log('서버 실행 중...');
});
