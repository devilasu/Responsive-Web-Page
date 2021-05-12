//여러개의 element 선택
var names = $("#name");
var names = document.getElementById("name");    //1개만 선택
var inputName = document.getElementsByName("name")//1개이상 선택
//네이밍 방식: 카멜(낙타등)표기법 소문자 시작 단어시작시 대문자
var className = document.getElementsByClassName("two"); //1개 이상 선택
console.log(className);
document.write("<br>")
document.write(className[0]["innerHTML"]);
document.write("<br>")
document.write(className[1]["innerHTML"]);
document.write("<br>")
console.log(inputName);
document.write(inputName[0]["defaultValue"]);
function checkValue(){
    alert(inputName[0]["value"]);
    alert(names.val());
    $("#one").css("backgroundColor","red");//jQuery
    // document.getElementById("one").style.backgroundColor = "red";
}

document.write("<hr>");

//변수의 영역
//function스코프 var, 블록scope let, const
var i = 10;
var ii=0;
if(i>5){
    let ii = 100;   //let변수는 {블럭}영역 안쪽에서만 효력이 있다.
}else{
    let ii = 200;
}
function test(params){
    var ii = 200;   //변수 재정의, 재정의 된 변수는 함수내에서 소멸
}

test(1);
document.write(ii);
document.write("<hr>");

//반복문
var arrays = [10,20,30,40,50];
for(var i = 0 ;i<arrays.length;i++)
{
    document.write(arrays[i]);
    document.write("<br>");
}
document.write("<hr>");

for(var i = (arrays.length-1 );i>=0;i--)
{
    document.write(arrays[i]);
    document.write("<br>");
}
document.write("<hr>");
var i = 0;
while(i<arrays.length){
    document.write(arrays[i]);
    document.write("<br>");
    i++;
}
document.write("<hr>");
//switch case문
var key = 3;
switch(key){
    case 1:
        document.write(key + "를 선택했습니다.");
        break;
    case 2:
        document.write(key + "를 선택했습니다.");
        break;
    case 3:
        document.write(key + "를 선택했습니다.");
        break;
    default:
        document.write("선택된 key가 없습니다.");
        break;
}
document.write("<hr>");
//조건문
if(false){
    document.write("헬로 자바스크립트");
}else if(true){
    document.write("1");
}else if(true){
    document.write("2");
}

document.write("<hr>");

//인터넷 자료교환 대량 데이터형식:xml 태그 데이터 방식
//지금은 json(javaScript Object Notation)자바스크립트 객체 표식
var human = {
    name:{
        firstname:'김',
        lastname:"영제"
    },
    age:10,
    married:true
}
//json데이터는 Key:value로 이루어져 있다.
document.write(typeof(human));
document.write("<br>");
document.write(human["name"]);
document.write("<br>");
document.write(human["name"]["firstname"]);
document.write("<br>");
document.write(human["name"]["lastname"]);
document.write("<br>");
document.write(human["age"]);
document.write("<br>");
document.write(human["married"]);//값을 파싱할때 키로 뽑아냅니다.
document.write("<hr>");

//사용자데이터형: object(array)
//참고: 기본형 데이터: number, string, boolean
var arrays = [10,20,30,40];
document.write(typeof(arrays));
document.write("<br>");
document.write(arrays[2]);
document.write("<br>");
document.write(arrays.slice(1,4));
document.write("<br>");
document.write(arrays.pop());
document.write("<br>");
document.write(arrays);
document.write("<br>");
document.write(arrays.push(1000));
document.write("<br>");
document.write(arrays);
document.write("<br>");
document.write(arrays.join("!!"));
document.write("<br>");
document.write(arrays);
document.write("<br>");
document.write(arrays.sort(function(a,b){return b-a;}));
document.write("<hr>");
//날짜내장함수 사용
var date = new Date;//new 키워드(예약어)로 함수형변수 생성
document.write(date);
document.write("<br>");
document.write(date.getMonth()+1 + '월'); //0부터 시작 1월0, 2월1
document.write("<br>");
document.write(date.getDay() + "요일"); //일0,월1,화2,수3
document.write("<br>");
document.write(date.getDate() + '일');
document.write("<br>");
document.write(date.getHours() + '시');
document.write("<hr>");
//인터페이스는 함수명만 있고, 구현내용은 없는 데이터자료형
//내장함수란? 아래 사용자가 만든 plus함수가 아닌, 웹브라우저 내장함수
//웹브라우저 내장 함수: 자바스크립트는 웹브라우저에 내장된 언어
var txt = "kimyoungjea is javascript";
var num = 10;
document.write(txt.length);
document.write("<br>");
document.write(txt.indexOf("is"));//찾은 문자열 인덱스 리턴
document.write("<br>");
document.write(txt.slice(0,7));//(시작, 번째 글자까지)문자열 슬라이스
document.write("<br>");
document.write(txt.replace("is","는"));//(찾을문자, 바꿀문자)
document.write("<br>");
document.write(txt.toUpperCase());//대문자
document.write("<br>");
document.write(txt.toLowerCase());//소문자
//데이터를 파싱(Parsing) 한다고 합니다.
document.write("<br>");
document.write(num.toFixed(6));//소수6자리
document.write("<br>");
document.write(num.toString()+num.toString());//문자열로 바꿈
document.write("<br>");
document.write(Math.PI);//파이
document.write("<br>");
document.write(Math.max(10,20,30, 50));//최대값
document.write("<br>");
document.write(Math.random()*10);//1이하의 랜덤
document.write("<hr>");

//함수 변수사용
var plus = function(x,y)//무명함수, anonymous함수, 콜백함수
{
    return x+y;
}
function plus(x,y){ //함수명이 존재
    return x+y
}

document.write("Plus라는 변수는 데이터타입이 " + typeof(plus));
document.write("<br>");
document.write(plus(4,6));
document.write("<hr>");

//연산자: 논리 &&, ||, !
var x,y;
x= true; y= false;
document.write(x&&y);
document.write("<br>");
document.write(x||y);
document.write("<br>");
document.write(!x);
document.write("<br>");
document.write(!y);
document.write("<hr>");

var x, y, z;
x = 5;
y = 2;
z = '5';
//연산자: 비교연산
document.write(x>y);
document.write("<br>");
document.write(x>=y);
document.write("<br>");
document.write(x<y);
document.write("<br>");
document.write(x<=y);
document.write("<br>");
document.write(x==z);   //숫자 5와 문자 5가 같다고 판단.
document.write("<br>");
document.write(x===z);  //변수형까지 비교.
document.write("<hr>");


//연산자: 사칙연산

var x, y;
x = 5;
y = 2;
document.write(x+y);
document.write("<br>");
document.write(x-y);
document.write("<br>");
document.write(x*y);    //곱하기
document.write("<br>");
document.write(x**y);   //제곱하기
document.write("<br>");
document.write(x/y);    //나누기 실수값
document.write("<br>");
document.write(x%y);    //나머지
document.write("<hr>"); //horizontal

//.으로 직접접근
//변수=variable 요소(number, string, object) 사용에 대해서       
//데이터를 사용하는 방법: 변수가 사용 
//기본형: number(정수, 실수), string(문자열), boolean(참true, 거짓false)
//사용자정의형: object(array배열), function(함수)
//특징 JS는 입력된 값에 따라서 변수 형이 결정이 됩니다.
var var1 = 100;
document.write("변수타입: " + typeof(var1) + "<br>");

document.write(var1+var1 + "<br>");

var1 = "100";
document.write("변수타입: " + typeof(var1) + "<br>");

document.write(var1+var1 + '<br>');

var1 = "문자열을 입력";
document.write("변수타입: " + typeof(var1) + "<br>");

var1 = [12,13,23,42];
document.write("변수타입: " + typeof(var1) + "<br>");

var1 = function(){}
document.write("변수타입: " + typeof(var1) + "<br>");

var name = "kimoungjea";
document.write(name[1] + "<br>" + typeof(name) + "<br>");
//배열은 위치정보 = 인덱스값을 가지고 값을 제어

//여기부터는 프로그램이기때문에 디버그용어 사용(에러처리)
// 자바언어 부터 개발되었고, 자바스크립트와는 관계없음.
// 자바스크립트는 인터프리터(1줄식 위에서 아래로 해석)언어 = 파이썬
// 자바는 컴파일언어(클래스단위로 해석)
// 한줄주석사용, 개체(태그)선택방법, 디버그방법 20년 전부터 사용
document.getElementById("one").innerHTML = "헬로 <h1>javascript</h1>";
document.getElementById("one").innerText = "헬로 <h1>javascript</h1>";
var debug = document.getElementById("one");
// window.alert(debug);//디버그하는 방법1
console.log(debug);//디버그하는 방법2 json 데이터확인(빅데이터)
//예전 자바스크립트를 배우는 이유는 IOT때문에 배웁니다.
//IoT 임베디드프로그램에서는 jQuery를 사용못하는 경우가 있음.
//위 경우 (Old JS)자바스크립트를 사용하게 됩니다.