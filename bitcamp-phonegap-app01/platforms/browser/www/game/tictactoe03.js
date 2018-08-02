"use strict"

// a태그에 대한 리스너 등록
// 이벤트가 발생된 태그 객체 => e.target 
// 이벤트가 발생된 태그의 속성값 => getAttribute
// 오리지날 태그(e.target)를 제이쿼리 태그($(e.target))로 가공을 하게되면 attr이라는 태그를 사용가능 
$('.cell').click((e) => {
    console.log($(e.target).attr('data-pos'));
});

// id는 #
$('#new-game').click((e) => {
    console.log('new game!!!!');
});