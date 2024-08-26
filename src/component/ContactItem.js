import React from "react";
import {Row, Col} from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img 
        width={50}
        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" alt=""/>
      </Col>
      <Col lg={11}>
        <div>
          Heejung Lee
        </div>
        <div>
          010123456789
        </div>
      </Col>
    </Row>
  )
}

export default ContactItem
