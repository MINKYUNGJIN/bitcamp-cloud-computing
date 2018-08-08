// 요청 핸들러를 관리 + 호출

const http = require('http')
const url = require('url')

// 함수를 바로 실행하지않고 객체를 통해 만드는 이유?
// 함수를 호출할 때마다 자신만이 데이터를 다룰수 있는 
// 개별적인 객체들이 생성되기 때문에 자신만의 서버 객체를 갖고있게됨.
// 함수를 리턴하여 port마다 분리해서 관리할 수 있음.
module.exports = function(){

    return{
        requestHandlerMap: {},
        
        add(url, handler){
            this.requestHandlerMap[url] = handler;
        },
        
        getHandler(url){
            return this.requestHandlerMap[url];
        },
        
        listen(port, callback){
            var mapper = this;
            const server = http.createServer((req, res) => {
                var urlInfo = url.parse(req.url, true)
                
                if(urlInfo.pathname === '/favicon.ico'){
                    res.end();
                    return;
                }
                
                res.writeHead(200,{
                    'Content-type': 'text/plain;charset=UTF-8'
                });
                
                // 바로 this.getHandler라고 하면 윈도우 객체를 부르는 것이기 때문에
                // listen 안에서 this를 변수로 넣고 그 변수로 this를 사용.
                var handler = mapper.getHandler(urlInfo.pathname);
                
                if(handler){
                    try{
                        handler(urlInfo, req, res);
                    }catch(err){
                        res.end('실행 중 오류 발생!');
                    }
                }else{
                    res.end('해당 URL을 지원하지 않습니다!');
                    return;
                }
            });
            
            server.listen(port, callback);
        }
    };
};

