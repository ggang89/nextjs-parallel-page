## Parallel Routes
하나의 레이아웃 안에서 2개의 페이지를 보여줄 수 있다.

#### 새로운 페이지 생성( / + /board)
'/'(home)에서 '/board'를 하나 더 만들어주려면
app폴더 안에 board폴더를 만들고, board폴더 안에 page.tsx컴포넌트 생성
(layout의 children안에 page내용이 보인다)


#### 페이지 안에 페이지 만들기 (parallel routes 이용)
/board 페이지에서 parallel routes로 'boardList'페이지와 'comments'페이지를 만들려면 각각 @boardList, @comments 폴더 만들고(* 폴더명 앞에 @붙이기)
각각의 안에 필요한 컴포넌트를 만든다
(ex: page.tsx  / loading.tsx  / error.tsx / )


#### /board/settings
board안에서 한 번 더 들어가는 settings페이지 만들려면,
board 폴더 안에 settings폴더 만들어서 page.tsx생성하고   
parallel routes로 만든 폴더(@boardList, @comments)안에도 각각 settings폴더 만들어준다.

#### default.tsx
특정 parallel routes에 setting 폴더를 만들어주지 않으면 오류 발생
대신 default 페이지 만들면 다른 parallel routs가 로딩하는 페이지에 default 페이지가 로딩됨.
( nav 같은 링크로 이동시, default 페이지는 새로고침 해줘야 보인다. 아니면 이전 페이지가 그대로 보임)

#### [...catchAll] 폴더
default page와 역할은 비슷한데, 새로고침 상관없이 계속 같은 catchAll 페이지 보임 


### 컴포넌트와 페이지의 로딩화면이 다르다

컴포넌트들은 '<Suspense fallback=>'으로 지연문구 보여줄 수 있고   ,
page.tsx가 지연될 경우 loading.tsx하나 만들어서 그 안에 지연문구 보여줘야함