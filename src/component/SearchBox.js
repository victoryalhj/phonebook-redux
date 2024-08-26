import React from 'react'
import {Row, Col, Form, Button} from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
       <Form.Control type="text" placeholder="Name" />
      </Col>
      <Col lg={2}>
        <Button>Search</Button>
      </Col>
    </Row>
  )
}

export default SearchBox
