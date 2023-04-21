const answer = ` http 모듈을 로드한 후 모듈에서 제공하는 createServer() 메소드를 사용하여 
HTTP 서버 객체를 생성합니다. HTTP 응답의 헤더를 설정합니다. 
이 코드에서는 상태 코드 200(OK)과 컨텐츠 타입을 텍스트(text/plain)로 설정합니다.
HTTP 응답의 본문(body)을 설정하고, 클라이언트에게 응답을 보냅니다. 
이 코드에서는 "Hello World"라는 텍스트를 보냅니다.
버를 특정 포트(3000)에서 대기하도록 설정합니다. listen() 메소드가 호출되면, 
서버는 클라이언트의 요청을 수신할 준비가 된 상태가 됩니다.
클라이언트가 서버의 IP 주소와 포트 번호를 이용하여 접속하면, 
이 서버에서 정의된 request 이벤트 핸들러가 호출되며, 요청을 처리합니다.
요약하자면 로컬 머신에서 3000번 포트를 listen하며, 
클라이언트가 HTTP GET 요청을 보내면 "Hello World"라는 텍스트를 응답으로 받게 됩니다.
`;
console.log(answer);


const http = require('http');
const fs = require('fs').promises;
http.createServer(async (request, response) => {
    const data = await fs.readFile('./04.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
}).listen(3000);