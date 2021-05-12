        //여기부터는 프로그램이기때문에 디버그용어 사용(에러처리)
        // 자바언어 부터 개발되었고, 자바스크립트와는 관계없음.
        // 자바스크립트는 인터프리터(1줄식 위에서 아래로 해석)언어 = 파이썬
        // 자바는 컴파일언어(클래스단위로 해석)
        // 한줄주석사용, 개체(태그)선택방법, 디버그방법 20년 전부터 사용
        document.getElementById('one').innerHTML = "헬로 <h1>javascript</h1>";
        document.getElementById('one').innerText = "헬로 <h1>javascript</h1>";
        var debug = document.getElementById('one');
        // window.alert(debug);//디버그하는 방법1
        console.log(debug);//디버그하는 방법2 json 데이터확인(빅데이터)
        //예전 자바스크립트를 배우는 이유는 IOT때문에 배웁니다.
        //IoT 임베디드프로그램에서는 jQuery를 사용못하는 경우가 있음.
        //위 경우 (Old JS)자바스크립트를 사용하게 됩니다.