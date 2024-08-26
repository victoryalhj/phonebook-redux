import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap'; 
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";



// 1.왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처리스트,search창
// 2.리스트에 유저이름, 전화번호추가 가능
// 3.리스트에 아이템이 몇개인지 확인가능
// 4.사용자가 유저를 이름검색으로 찾을수 있음


function App() {
  return (
    <div className="App">
      <h1 className="title">Phone Book</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm />
          </Col>
          <Col>
          <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
