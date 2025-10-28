## React 특징

### 1. 컴포넌트를 기반으로 UI를 표현한다

> 컴포넌트 : 화면을 구성하는 요소, UI를 구성하는 요소를 말함

> Header, Main, Footer 각각에 컴포넌트 단위로 모듈화할 수 있다.

### 2. 화면 업데이트 구현이 쉽다 -> 선언형 프로그래밍

> 업데이트 : 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것

> 각각의 컴포넌트에 State를 저장할 수 있다.    
> 따라서, State 변수의 값에 따라 UI 렌더링 업데이트를 수행할 수 있다.
(렌더링 : UI 요소를 화면에 그려내는 것)

### 3. 화면 업데이트가 빠르게 처리된다

#### 브라우저의 렌더링 과정 (Critical Rendering Path)

> HTML → DOM → Render Tree → Layout → Painting

> CSS → CSSOM → Render Tree → Layout → Painting

- DOM (=Document Object Model) : 요소들의 위치, 배치, 모양에 관한 모든 정보를 담는 모델
- Render Tree : 웹 페이지의 청사진
- Layout : 요소의 배치를 잡는 작업 -> Reflow
- Painting : 실제로 화면에 그려내는 과정 -> Repainting

> 이 때, JavaScript가 DOM을 수정하면 화면 업데이트가 발생 -> Reflow, Repainting이 일어남 -> 반복 횟수가 많을수록 시간이 많이 소요!!

> React는 이러한 과정을 Virtual DOM을 통해 자동으로 해줌.
>
> 업데이트 발생 시 실제 DOM을 수행하기 전에 가상의 복제판 DOM에 먼저 반영한다.
>
> Virtual DOM에 업데이트가 모두 반영되면 이들을 Actual DOM에 한번에 반영한다.