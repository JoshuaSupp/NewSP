import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './ProjectCard.css'


function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Title style={{textAlign:'center',fontSize:'25px',textDecoration:'underline'}}>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          View
        </Button>
        <button  className="commentbtn" onClick={() => {
              window.location.href ="/addcomment";
            }} >Add Comment</button>
          <button  className="commentbtn" onClick={() => {
              window.location.href ="/viewcomment";
            }} >View Comment</button>
        {"\n"}
        {"\n"}


        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;