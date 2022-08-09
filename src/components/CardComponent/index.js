import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

export default function CardComponent({ title, text, path }) {
  return (
    <div
      className='pt-5 pb-5 '
      style={{
        backgroundColor: "rgba(1,2,3,0.5)",
      }}
    >
      <Row inline style={{ justifyContent: "center" }}>
        <Col sm='8'>
          <Card
            body
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            <CardTitle tag='h5'>{title}</CardTitle>
            <CardText>{text}</CardText>
            <div className='mt-3 mb-3 d-flex justify-content-center '>
              <Button href={path}>Saiba Mais</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
