// 모듈 정의 V
// - 응용: private 변수를 갖는 객체 만들기

module.exports = function(){
    var result = 0;

    // 클로저 메모리를 공유
    return {
        plus(value) {result += value},
        minus(value) {result -= value},
        multiple(value){result *= value},
        divide(value){result /= value},
        getResult(){return result}
    };
};
