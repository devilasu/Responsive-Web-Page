#### 작업예정: jQuery JSON데이터 파싱
- 외부data.js 파일에서 json데이터를 저장한 후 html에서 불러와서 파싱.
- 외부 사이트에서 제공하는(RestAPI서버) json데이터를 html에서 불러와서 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(데이터를 분해해서 화면에 뿌려주는 작업)
- RestAPI서버주소(빅데이터): https://coroname.me/getdata

#### 20210513 (목) 작업내역
- pixabay에서 받은 이미지 3개 
- logo: https://pixabay.com/ko/illustrations/%EB%82%98%EB%AC%B4-%EB%AF%B8%EC%9D%98-%EB%A1%9C%EA%B7%B8-%EB%AF%B8%EA%B5%AD-990861/
- slide: https://pixabay.com/ko/photos/%EB%8F%99%EB%AC%BC-%EC%82%AC%EC%A7%84-%EC%A2%8B%EC%9D%80-%EC%9E%90%EC%97%B0-%EA%B3%A0%EC%96%91%EC%9D%B4-3215197/
- noImage: https://pixabay.com/ko/vectors/%EC%A7%80%EA%B5%AC-%EC%97%86%EC%9D%8C-%EA%B1%B0%EC%A7%93-%EC%8B%A4%ED%8C%A8%ED%95%9C-1528493/
- 작업폴더를 나누는 이유: 시청(관공서), 대학, 기업의 웹프로그램(사이트)를 제작 할 때, 1년간 무상 유지보수 이후 2천, 리뉴얼 4청 비용이 측정
- home폴더 기존작업물, 리뉴얼 home에 덮어씌우는 것이 아니고,
- 리뉴얼 할 때, home2022폴더에 작업을 하게 된다.
- jQuery코어 다운받기: minVersion(속도up), devVersion
- jQuery 미처리 작업은 다음주
- 오늘부터는 모바일 메인페이지 1개 제작 후 과제물로 제출 -> 실제 스프링에서 프로그램 입히는 소스로 사용
- 애니데스크(독일산): 팀뷰어(독일산) 사용하는 대신에 애니데스크 사용.
- html5.html, css.html, js.html 여기까지
- jQuery 기본구조만 실습했습니다.

- <button onclick="checkValue()">입력값 확인</button> 는 줄 색이 바뀌는 jQuery에서 느림
#### 20210512 (수) 작업내역
- jQuery 사용법: jQuery cdn 검색
- document.getElements~를 통해 ID, Name,ClassName등을 통하여 하나의 배열로 선택가능하다.
- 이를 이용하여 같은 name, 같은 class를 묶어서 공동 작업이 가능하다.
- iframe으로 홈페이지를 띄울때 live server에서는 실행되었으나 github로 푸쉬 이후 홈페이지에서는 뜨지 않는 현상.
- 가상 선택자를 통한 추가에서 Space는 중복되지 않는다.
- user.name, user.email 확인법: git config --list, user.name, user.email 확인.
- 프로젝트를 1명 제작하는 경우는 없기 때문에, 2명일때 소스 수정한 사람 확인용 정보입니다.
#### 20210511 (화) 작업내역
- 내가 사용한 방식: section과 article을 <div>로 씌워주고 aside에 <div>로 씌워준 뒤 전체에 <div>를 씌워준 후 div의 설정값을 조정.
- padding는 내부여백, margin은 외부여백
- div가 id 면 div#  div가 class면 div.
- <iframe> 에서 반응형을 만들 때, width, height를 그냥 설정하면 vw나 vh를 사용하지 못하지만 style을 사용하여 설정하면 단위를 vw를 사용하여 반응형으로 만들 수 있다.
- **<iframe>에서 홈체이지 좌우가 짤려있다.
- 유튜브영상 넣는법: 우클릭->소스코드 복사 붙여넣기
- 로렘입숨 한글 http://guny.kr/stuff/klorem
- 로렘입숨 영어 http://loremipsum.io/generator
- 줄바꿈이 이루어지는 영역태그를 블럭영역 <p>
- 줄바꿈이 이루어지지 않는 영역은 인라인블럭영역 <span>
- p태그는 문단의약자(Paragraph)
- Emmet문법 h${헬로 html}*6, ({}는 생략가능)
- url결로(path): /루트, /test/html5.html
- 에러-promission: 자격증명이 들어가 있으면, 자격증명관리자에서 제거한 후, git credential-manager uninstall --force 를 타이핑하면 된다.
- HTML5의 레이아웃 구조 제작합니다.
- 서버(응답하는프로그램=response) = 아파치, 톰캣서버
- 클라이언트(요청하는프로그램=request) = 웹브라우저
- HTML은 마크업이 태그로 구성됩니다.<의미있는문자>....</의미있는문자>
- cmd 작업할폴더주소 에서 git clone <github주소>를 타이핑할 시 github에 업데이트 되어 있는 자료를 다운로드 할 수 있다. (.git 포함)
- hppt://127.0.0.1:<Port>(80)[8080|9000|5500|6500]
- PC의 네트워크 내부주소(공통): 127.0.0.1 == localhost
- yahoo.com(도메인) == 74.6.143.25(IP주소)
- 도메인 80은 생략가능 (기본 포트)
- IP주소버전: IPv4, IPv6
- HTML도 버전: HTML5, HTML4.01(old)

- git문제점
- 무한로딩: vs code를 껐다가 킨다.
- 에러-영어 promission: 자격증명관리자에서 제거, cmd 관리자권한실행 git credential-manger uninstall --force
- 에러-user.name, user.email: 터미널에서 git config --local user.name 이름, git config --logcal user.email 이메일
- 에러-읽기전용: 터미널을 확인. 껐다가 새 터미널
- 깃의 사용 순서: 저장(파일저장)->스테이징(커밋 전 임시저장)->커밋(푸쉬 전에 임시저장)->푸쉬(실제로 올라감)

#### 20210510 (월) 작업내역 
- git pull문제였던 것: vs code에서 폴더를 설정하고 clone를 실행하여 만들어진 devilasu.github.io폴더 안에 github아이디인 devilasu.github.io폴더가 다시 만들어지고 그 안에 자료가 복사되었다. 따라서 터미널에서 설정된 경로와 실제 자료가 있는 경로가 불일치하여 문제가 발생했다.
-해결책: 모두 제거 후에 다시 경로를 설정한 후 clone 실행.
- git pull의 경우에는 .git 폴더가 있어야 사용가능하다. 이미 작업세팅이 되어 있는 곳에서 다운로드할 때 사용할 것 같다.
- git clone <주소>는 github에 있는 자료를 그대로 복사한다.(최초에 실행이며 .git폴더도 만들어진다.)
- 별개: git에는 branch, remote저장소개념이 있다. remote개념에서 clone라는 개념이 나온다.
- breanch (분기)의 경우에는 작업이 어느 지점에서 갈라져서 작업이 될 경우에 쓰이는 듯 하다. git checkout으로 이동 가능
- remote는
- Git에서 'User Name' 'User Mail'추가하라고 떠요
- 해결책
- git config --local user.name 이름
- git config --logcal user.email 이메일
- 업로드절차: 1. 커밋(commit)  2. 푸시(push)
- 다운로드절차: 1. 풀(pull) : 교실에서 작업한 결과를 집에서 이어서 작업할 상황
- 레퍼지토리(저장소) 초기화: git init
- 개발PC(html)와 Git 저장소를 연결시킵니다.
- 포트의 역할이 트렌드로 많이 사용됩니다.
- 포트(port): 포트번호로 서비스를 만드는 것이 트렌드
- 이전에는 80포트에 모든 서비스를 묶어놓았습니다.
- 모든서비스를 개별로 분리하는 트렌드가 있습니다.마이크로서비스라고 한다. == RestAPI로 구현이 됩니다.
- 도메인 (예, https://naver.com:1451241/네이버 인증서비스 개발)
- 외부 인원(네이버직원아닌)이 포트기준으로 제작한 서비스를 가져다 사용
- html : Hyper Text MarkUp Language 태그를 사용하는 언어
- md : MarkDown Language 태그를 사용하지 않는 언어

