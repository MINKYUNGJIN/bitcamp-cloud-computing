"use strict"

var human = 'X',
    computer = 'O',
    cells = $('.cell'),
    count = 0;


// a태그에 대한 리스너 등록
// 이벤트가 발생된 태그 객체 => e.target 
// 이벤트가 발생된 태그의 속성값 => getAttribute
// 오리지날 태그(e.target)를 제이쿼리 태그($(e.target))로 가공을 하게되면 attr이라는 태그를 사용가능 
$('.cell').click((e) => {
    count++;
    console.log($(e.target).attr('data-pos'));
    $(e.target).text(human);
    
    // 마지막 표시를 했으면 더이상 컴퓨터가 작업하지 않는다.
    if(++count == 5) return;
    
    // 타이머를 가동하여 1초 후에 컴퓨터가 표시하게 한다.
    setTimeout(() => {
        // floor 소수점을 자름
        //console.log(no, Math.floor(no));
        //console.log('computer');
        /*$('.cell').each((i, e) => {
            // console.log(i, e);
            // e가 오리지널 태그이기때문에 제이쿼리태그($(e))로 가공한 후 사용
            console.log($(e).text());
        });*/
        // $하고 값을 주게되면 매번 html문서를 다찾음.
        //console.log(no, $(`.cell:nth-child(${no + 1})`).text());
        while(true){
            var no = Math.floor(Math.random() * 9);
            if(!isCellChecked(no)){
                checkCell(no, 'computer');
                return;
            }
        }
        console.log(no, getCellText(no));
    }, 1000);
    
});

// id는 #
$('#new-game').click((e) => {
    console.log('new game!!!!');
});

function isCellChecked(no){
    return cells[no].innerHTML != "" ? true : false;
}

function checkCell(no, gamer){
    cells[no].innerHTML = 
        (gamer == 'computer') ? computer : human;
}

