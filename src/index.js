import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Nav, Navbar } from "rsuite";
// const root = ReactDOM.createRoot(document.getElementById('root'));

/**   
 * 리액트 공식문서에 따르면,
 * "StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다. 
 * Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다."
 * 
 * 라고 소개되어 있으며, 잠재적인 문제의 종류로는 다음과 같은 것들이 있다.
 
 - 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
 - 레거시 문자열 ref 사용에 대한 경고
 - 권장되지 않는 findDOMNode 사용에 대한 경고
 - 예상치 못한 부작용 검사
 - 레거시 context API 검사
*/


ReactDOM.render(<App />, document.getElementById("root"));


// root.render(



//   <React.StrictMode>
//       <Navbar>
//     <Navbar.Brand href="#">RSUITE</Navbar.Brand>
//     <Nav>
//       <Nav.Item >Home</Nav.Item>
//       <Nav.Item>News</Nav.Item>
//       <Nav.Item>Products</Nav.Item>
//       <Nav.Menu title="About">
//         <Nav.Item>Company</Nav.Item>
//         <Nav.Item>Team</Nav.Item>
//         <Nav.Menu title="Contact">
//           <Nav.Item>Via email</Nav.Item>
//           <Nav.Item>Via telephone</Nav.Item>
//         </Nav.Menu>
//       </Nav.Menu>
//     </Nav>
//     <Nav pullRight>
//       <Nav.Item>Settings</Nav.Item>
//     </Nav>
//   </Navbar>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);