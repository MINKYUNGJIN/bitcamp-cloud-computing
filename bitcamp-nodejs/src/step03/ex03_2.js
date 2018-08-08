// 주제 : 요청 정보 다루기 - URL 분석하기

const http = require('http')

// URL 분석에 사용할 모듈 로딩
const url = require('url');

const server = http.createServer((req, res) => {
    console.log('요청 받았음!')
    
    // 클라이언트가 요청한 URL 보기
    // => http://localhost:8000/aaa/bbb/ccc?name=hong&age=20
    console.log(req.url); // => /aaa/bbb/ccc?name=hong&age=20
    
    res.writeHead(200,{
        'Content-type': 'text/plain;charset=UTF-8'
    });
    
    // 클라이언트가 요청한 URL 보기
    // => http://localhost:8000/aaa/bbb/ccc?name=hong&age=20
    res.write(req.url + '\n');


    // URL 분석기를 이용하여 URL을 분석해 보자!
    var urlInfo = url.parse(req.url);
    
    res.write(`href=${urlInfo.href}\n`);
    res.write(`pathname=${urlInfo.pathname}\n`);
    res.write(`search=${urlInfo.search}\n`);
    res.write(`query=${urlInfo.query}\n`);
    res.end(); 
});

server.listen(8000, () => {
    console.log('서버가 시작됨!')
});

