import React, {useState} from "react";
import { ProjectList } from "../../../data/ProjectData";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";

function ProjectCard() {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (index) => setShow(index);

  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img onClick={() => {list.images.length ? handleShow(index) : window.location=list.demo_url}} src={list.img} alt={list.title} />
            <Modal show={show === index} onHide={handleClose} dialogClassName="modal-90w container">
              <Modal.Header closeButton>
                <Modal.Title>{list.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <img alt="" className="mt-2 mb-2" src={list.cover_image} width="64" height="64"/>
                  </Col>
                </Row>
                <Row className={"col-lg-6 offset-lg-3"}>
                    {list.images.map(function (image, index1) {
                      return <Col key={index1} md={4} className={"mt-2"}>
                        <img alt="" className="responsive-img" src={image.src}/>
                      </Col>;
                      })
                    }
                  <Row className={"mt-4"}>
                    {list.long_description.map(function (description, index1) {
                        return <p key={index1}>{description.desc}</p>;
                      })
                    }
                  </Row>
                </Row>
              </Modal.Body>
              <Modal.Footer className={"d-flex justify-content-center"}>
                <Button variant="primary" onClick={() => setShow(true)} centered>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              {list.github_url &&
                  <a
                    className="btn btn2 SecondarBtn"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                Github
              </a>}
              {list.demo_url &&
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info ➜
              </a>}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
