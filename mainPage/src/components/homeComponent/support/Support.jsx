import React from "react";
import "./Support.css";
import vector11 from "../../../img/vector11.svg";
import vector22 from "../../../img/vector22.svg";
import vector33 from "../../../img/vector33.svg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const Support = () => {
  return (
    <div className="h-2/5 p-12">
      <h1 className="text-2xl font-semibold uppercase text-center">
        What we offer
      </h1>
      <p className="text-lg text-center mb-[100px] mt-3 opacity-90">
        Being a part of Harvest Bridge, this is what you get from us:
      </p>
      <div className="flex justify-center mediaQuery items-center mb-[100px]">
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector11} alt="" />
          <h3 className="text-xl mb-1 text-center font-semibold mt-5">
            24*7 customer support
          </h3>
          <p className="text-md text-center font-normal">
            We’re just one click away.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector22} alt="" />
          <h3 className="text-xl mb-1 text-center font-semibold mt-5">
            Trusted Sellers/Buyers
          </h3>
          <p className="text-md text-center font-normal">
            Ensured safety of your experience.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector33} alt="" />
          <h3 className="text-xl mb-1 text-center font-semibold mt-5">
            One-click Purchasing
          </h3>
          <p className="text-md text-center font-normal">
            Time saving Purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
