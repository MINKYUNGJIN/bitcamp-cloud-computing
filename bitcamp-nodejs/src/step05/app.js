// 과제 - 회원관리, 팀관리, 게시판, 강좌관리 웹 애플리케이션 만들기

const express = require('express')
const app = express();

// POST 요청 데이터 처리
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// 정적 HTML 파일 처리
app.use(express.static('public'))

// 통합 템플릿 엔진 관리자 모듈 로딩
// => 템플릿 엔진이 아니라 템플릿 엔진을 중간에서 관리해 주는 역할을 수행한다.
const consolidate = require('consolidate');

// Express에 템플릿 엔진을 등록한다.
// => consolidate에 대해 handlebars를 지정하면
//    이 템플릿 관리자는 Node 모듈에서 handlebars를 찾아 리턴한다.
// => Express에 여러개의 엔진을 등록할 수 있다. 
// => 다음은 ".html" 템플릿 파일을 처리할 엔진을 등록한다.

app.engine('html', consolidate.handlebars)

// 등록된 템플릿 엔진 중에 사용할 엔진을 지정한다.
app.set('view engine', 'html')

// 템플릿 파일이 있는 디렉토리 경로를 지정한다.
// => 디렉토리가 한 개일 때는 문자열로 지정한다.
// => 디렉토리가 여러 개일 때는 배열에 담아 저장한다.
const path = require('path') 
app.set('views', path.join(__dirname, 'templates'))

app.use('/member', require('./member'))

app.get('/hello', (req, res) => {
    res.writeHead(200,{'Content-type': 'text/plain;charset=UTF-8'});
    res.write('Hello!');
    res.end();
});

app.listen(8000, () => {
    console.log('서버 실행 중!')
})

