# 🎨 Next.js를 활용하여 현대 미술 사이트 만들기

![nextMain](https://github.com/YeoDaSeul4355/site2023-next01/assets/125419623/14e1366a-4387-403e-9e54-00429d33fa06)

> View Site : https://site2023-next-jjul.netlify.app/
<br><br>

## 👋 소개
Next.js를 기반으로 구축된 현대 미술 작품과 아티스트를 소개하는 플랫폼입니다. 이 사이트는 React의 강력한 컴포넌트 기반 아키텍처를 활용하여 모듈화된 디자인과 사용자 친화적인 인터페이스를 제공합니다.우리는 Restful API를 활용하여 다양한 현대 미술 작품과 아티스트 정보를 외부 API로부터 불러와 동적으로 표시합니다. YouTube API, Unsplash API, Movie API 등을 이용하여 예술 작품, 아티스트의 이미지, 영화와 관련된 정보들을 쉽게 찾아볼 수 있습니다.
<br><br>

## 🔍 Next.js를 쓰는 이유? 

Next.js는 React의 프레임워크로, React를 기반으로 한 SSR(Server-Side Rendering) 및 정적 사이트 생성 기능을 제공하는 오픈 소스 JavaScript 프레임워크입니다. 

* 서버 사이드 렌더링 (SSR): Next.js는 서버 사이드 렌더링을 지원합니다. 이는 사용자가 페이지를 요청할 때 서버에서 해당 페이지를 렌더링하여 HTML을 생성하는 기능을 의미합니다. SSR은 초기 로딩 속도를 향상시키고 SEO에 유리한 환경을 제공하여 페이지가 검색 엔진에 노출되기 쉽게 합니다.
* 코드 스플리팅 : Next.js는 자동으로 코드 스플리팅을 지원합니다. 이는 각 페이지가 필요로 하는 자바스크립트 코드만 로드되도록 하는 기능으로, 초기 로딩 시간을 단축시키고 페이지의 성능을 향상시킵니다.
* Hot Module Replacement (HMR) : Next.js는 개발 환경에서 HMR을 지원합니다. 이는 코드 수정 시 브라우저를 새로고침하지 않고도 수정 사항이 바로 적용되도록 하는 기능으로, 개발 작업을 훨씬 빠르고 편리하게 만듭니다.
* 편리한 라우팅 : Next.js는 파일 시스템 기반의 라우팅을 지원합니다. 페이지를 폴더와 파일로 구성하여 간단하고 직관적인 라우팅 구조를 만들 수 있습니다.
* 이미지 최적화 :  웹 페이지의 성능을 향상시키기 위해 이미지 최적화를 지원합니다. 이미지 최적화를 통해 웹 페이지의 로딩 속도를 개선하고 사용자 경험을 향상시킬 수 있습니다.
<br><br>

## 🔧 사용 스택 
* useEffect :  Hook은 React 컴포넌트에서 side effect(부수 효과)를 수행하기 위해 사용됩니다. 이 코드에서는 useEffect를 사용하여 페이지가 로드될 때 한 번만 실행되는 API 호출을 수행합니다.
* useState : useState Hook은 React 컴포넌트에서 상태(state)를 관리하기 위해 사용됩니다. 이 코드에서는 useState를 사용하여 youtubes라는 상태를 정의하고, API에서 가져온 데이터를 이 상태에 저장합니다.
* Fetch : fetch API는 네트워크 요청을 보내고 응답을 처리하기 위해 사용됩니다.
* Async/Await: : async와 await 키워드를 사용하여 비동기적인 API 호출을 처리합니다. async 키워드가 붙은 함수 내에서 await 키워드를 사용하면 비동기 작업이 완료될 때까지 대기하고 결과를 반환받을 수 있습니다.
* Props : 컴포넌트 간에 데이터를 전달하기 위해 props를 사용합니다.
* module.scss : SCSS를 모듈화하여 스타일을 관리하기 위한 방법 중 하나입니다. 이는 React 및 다른 프레임워크와 함께 사용되는 SCSS 모듈링 기술 중 하나로, SCSS 클래스 이름을 로컬 스코프로 제한하여 스타일 충돌을 방지하고 재사용 가능한 SCSS 코드를 작성하는데 도움이 됩니다.


## ✍️ 구현 내역

* router기능을 활용한 페이지
* 탭 메뉴로 구성된 시대별 유명 작품
* Youtube 검색, 태그 기능
* Unsplash 랜덤 이미지 슬라이드, 검색, 태그 기능
* Movie 이미지 슬라이드, 검색, 태그 기능
<br><br>

## 📸 상세페이지

![nextYoutube](https://github.com/YeoDaSeul4355/site2023-next01/assets/125419623/90a01cf4-28fe-4e64-af2c-61c3853a22df)<br><br>
![nextUnsplash](https://github.com/YeoDaSeul4355/site2023-next01/assets/125419623/70745361-a5c9-4b15-ad51-1c96391f462e)<br><br>
![nextMovie](https://github.com/YeoDaSeul4355/site2023-next01/assets/125419623/ddcb70fc-76fc-4d9d-a98e-d0811f85533b)

<br><br>
## ⚙️ 개발 환경 프로젝트 실행 방법

<b>Step 1: </b><br>
레포지토리 클론

```c
git clone https://github.com/YeoDaSeul4355/site2023-next01.git
```

<b>Step 2: </b><br>
종속성 설치

```c
npm install
```

<b>Step 4: </b><br>
프로젝트 시작

```c
npm run dev
```
