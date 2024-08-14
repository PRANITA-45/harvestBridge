import React from "react";
import "./Services.css";
import services4 from "../../../img/services4.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import footerBg from "../../../img/logo_new.png";

const Services = () => {
  return (
    <div className="h-1/2 bg-evergreen bg-grey mt-3 p-9">
      <div className="flex justify-center flex-col p-9">
        <h1 className="text-4xl mt-2 font-bold m-auto">Our Services</h1>
        <p className="mt-3 text-lg font-semibold m-auto ">
          Following are the services that Harvest Bridge market provides for
          Farmers:
        </p>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="footerBg" />
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
        {/* <img src={services4} className="serviceImg" alt="" /> */}
      </div>
    </div>
  );
};

export default Services;
