// Groovy - 컴파일과 실행II
package bitcamp.step01

println "합계 = " + plus(100, 200)

// groovy 문법으로 정의한 함수는 그대로
// 자바 메서드로 생성된다.
//

// 타입을 지정하지 않으면 기본이 object
def plus(a, b) {
    a+b // return 문장을 쓰지 않으면 자동으로 마지막 결과가 리턴된다.
}

