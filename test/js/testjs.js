//

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