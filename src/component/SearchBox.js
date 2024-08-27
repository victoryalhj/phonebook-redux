import React,{useState} from 'react'
import {Row, Col, Form, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
  <Form onSubmit={searchByName}>
    <Row>
      <Col lg={10}>
      <div className="searchBox">
       <Form.Control 
        type="text"
        placeholder="Name"
        onChange={(event) => setKeyword(event.target.value)} />
      </div>
      </Col>
      <Col lg={2}>
        <div className="searchButton">
        <Button type='submit'>Search</Button>
        </div>
      </Col>
    </Row>
  </Form>
  );
};

export default SearchBox