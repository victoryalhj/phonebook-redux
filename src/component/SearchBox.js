import React from 'react'
import {Row, Col, Form, Button} from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
      <div className="searchBox">
       <Form.Control type="text" placeholder="Name" />
      </div>
      </Col>
      <Col lg={2}>
        <div className="searchButton">
        <Button>Search</Button>
        </div>
      </Col>
    </Row>
  )
}

export default SearchBox