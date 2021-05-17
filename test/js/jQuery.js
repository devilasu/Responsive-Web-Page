//jQuery CDN :Contents Delivery Network 인터넷으로 외부 프로그램을 가져다 사용. 단, 인터넷 안되는 곳 불가.
//jQuery의 기본형식 $시작 문서가 준비되었을때 자동구현
//인터프리터의 단점 위에서부터 아래로 실행되는 순서를 신경쓰지 않아도 된다.(jQuery는 문서 위에 있어도 괜찮다.)
// $(document).ready(function(){});
var tmpTable = '';
$(document).ready(function(){
    // RestApi제공하는 곳: 공공데이터, 네이버, 구글, 인스타, 페북, 카카오 등등
    // RestApi서버에서 받은 빅데이터(코로나19 확진자위치와 발생일시)를 파싱
    // $.ajax({}); Asyncronous Javascript And Xml 비동기 자바스크립트와 Xml데이터
    // Xml대신에 json데이터를 사용합니다.
    //http통신: 비동기 vs 동기(기본)
    //동기: 웹프로그램은 기본- 옛날에는 동영상재생시, 100mb.avi를 모두 다운로드  후 재생
    //비동기: 위와 같은 상황에서는 다중작업이 불가능하므로 홈페이지가 멈춘 것처럼 보입니다. 이것을 방지하는 것이 비동기 방식.
    //$.ajax 함수로 비동기 데이터(xml->json) 전송을 사용합니다.
    $.ajax({
        type:"get",//get(검색), post(보안필요: 입력, 수정, 삭제)
        url: "https://coroname.me/getdata",
        dataType: "json",//RestApi서버에서 전송받은 데이터 형식을 명시, json, text
        success:function(result){
            // var jsonData = JSON.parse(result);  //텍스트를 json으로 파싱
            console.log(result);//result에는 위 url에서 dataType형식으로 받은 자료가 저장됨
        },
        error:function(result){
            alert("RestApi서버에 문제가 발생했습니다.")

        }//url Rest서버가 정전, 프로그램에러일때, 처리할 내용 명시.
    });

    //jsp(java)방식에서 파싱하는 방법
    //향상된 for반복문
    var i = 1;
    for(var jsonOne of jsonData){
        tmpTable += "<tr style='background-color:purple'>";
        tmpTable += "<td style='text-align:center'>"+i+"</td>";
        tmpTable += "<td>"+jsonOne.id+"</td>";
        tmpTable += "<td>"+jsonOne.name+"</td>";
        tmpTable += "<td>"+jsonOne.age+"</td>";
        tmpTable += "<td>"+jsonOne.eyeColor+"</td>";
        tmpTable += "</tr>";
        i++;
    }

    $("#board tbody").append(tmpTable);

    //jQuery에서 파싱하는 방법.
    // $("#board tbody").css("background-color","skyblue")
    tmpTable = '';
    $.each(jsonData, function(index, jsonOne){ //jsonOne라는 데이터는 1개의 레코드 값.
        //레코드: 필드 (id, age, eyecolor, name)들로 이뤄져 있다.
        // $.each(JSON데이터object, 콜백함수 function(index, jsonOne){})
        tmpTable += "<tr style='background-color:skyblue'>";
        tmpTable += "<td style='text-align:center'>"+(index+1)+"</td>";
        tmpTable += "<td>"+jsonOne.id+"</td>";
        tmpTable += "<td>"+jsonOne.name+"</td>";
        tmpTable += "<td>"+jsonOne.age+"</td>";
        tmpTable += "<td>"+jsonOne.eyeColor+"</td>";
        tmpTable += "</tr>";
    });
    $("#board tbody").append(tmpTable);

    //오리지날 JS에서 파싱하는 방법
    tmpTable = '';                  //임시 테이블에 입력된 값 초기화.
    // $("#board tbody").empty();   //테이블 초기화
      for(var i = 0; i< jsonData.length;i++)
      {
        //   jsonData 파싱
        // append는 가상 선택자의 after과 같다.
        //+=대신 .push도 사용가능(배열로 선언하여)
        tmpTable += "<tr style='background-color:yellow'>";
        tmpTable += "<td style='text-align:center'>"+(i+1)+"</td>";
        tmpTable += "<td>"+jsonData[i].id+"</td>";
        tmpTable += "<td>"+jsonData[i]["name"]+"</td>";
        tmpTable += "<td>"+jsonData[i].age+"</td>";
        tmpTable += "<td>"+jsonData[i].eyeColor+"</td>";
        tmpTable += "</tr>";
      }
      $("#board tbody").append(tmpTable);

      $("#checkValue").click(function(){
        alert($("#name").val());
        $("#one").css("backgroundColor","blue");
    });
    // html 문서를 다 읽은 후 내용 실행.

  });