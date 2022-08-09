import React from "react";
import { CardImg, Card } from "reactstrap";

export default function SimpleVector({ vector }) {
  return (
    <div
      className='d-flex justify-content-center pt-5 pb-5 mb-5 mt-5'
      style={{
        backgroundColor: "rgba(1,2,3,0.5)",
      }}
    >
      <Card className='w-75'>
        <CardImg alt='Vector Image' src={vector} />
      </Card>
    </div>
  );
}
