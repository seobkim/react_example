### React Folder directory 경로 임포트 시 경로 내의 index파일을 임포트할때 명시한 컴포넌트로 사용 가능

<img src="https://user-images.githubusercontent.com/61955818/195580677-5b6db79d-0293-4b3b-bbad-c6e24be8da76.png" width="50%" height="50%"/>


리액트 공식문서에 따르면,
"StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다. 
Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다."
 
라고 소개되어 있으며, 잠재적인 문제의 종류로는 다음과 같은 것들이 있다.
 

- 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
- 레거시 문자열 ref 사용에 대한 경고
- 권장되지 않는 findDOMNode 사용에 대한 경고
- 예상치 못한 부작용 검사
- 레거시 context API 검사

개발모드로 사용시 2번 렌더링
<img src="https://user-images.githubusercontent.com/61955818/197166038-0cda768c-a584-477d-b882-f056bc183a5f.png" width="50%" height="50%"/>



<img src="https://user-images.githubusercontent.com/61955818/197167185-714907f9-1af8-4e06-a49c-b4c1a5283794.png" width="50%" height="50%"/>
props를 이용하여 컴포넌트로 값을 전달할때 일반 함수처럼 매개변수의 순서로 전달 X , 매개변수 순서로 값을 전달하려면 {} 중괄호 꼭 사용
