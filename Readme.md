#### 20210511 (화) 작업내역
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
- 에러-영어 promission: 자격증명관리자에서 제거, cmd에서 git credential-manger uninstall --force
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

