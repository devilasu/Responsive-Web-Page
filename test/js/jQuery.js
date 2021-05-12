//jQuery CDN :Contents Delivery Network 인터넷으로 외부 프로그램을 가져다 사용. 단, 인터넷 안되는 곳 불가.
//jQuery의 기본형식 $시작 문서가 준비되었을때 자동구현
//인터프리터의 단점 위에서부터 아래로 실행되는 순서를 신경쓰지 않아도 된다.(jQuery는 문서 위에 있어도 괜찮다.)
// $(document).ready(function(){});
$(document).ready(function(){
    $("#checkValue").click(function(){
        alert($("#name").val());
        $("#one").css("backgroundColor","blue");
    })
    // html 문서를 다 읽은 후 내용 실행.
});