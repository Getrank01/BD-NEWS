import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPinterestP,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousels from "../Brand/Carousels";

const RightSideNav = () => (
  <div>
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle className="fs-2"></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="fs-2"></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
    </div>
    <div className="mt-4">
      <ListGroup>
        <ListGroup.Item className="">
          <FaFacebook></FaFacebook> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram></FaInstagram> Instagram
        </ListGroup.Item>
        <ListGroup.Item>
          <FaPinterestP></FaPinterestP> Pinterest
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter></FaTwitter> Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTiktok></FaTiktok> Tik Tok
        </ListGroup.Item>
      </ListGroup>
    </div>
    <div className="mt-4">
      <Carousels></Carousels>
    </div>
  </div>
);

export default RightSideNav;
