import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteMovie, editMovie } from "../JS/actions/actions";
import Rating from "../components/Rating/Rating";
import ModalComp from "../components/ModalComp/ModalComp";

class MovieCard extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.movieList.poster} />
          <Card.Body>
            <Card.Title>{this.props.movieList.title}</Card.Title>
            <Rating count={this.props.movieList.rating} />
            <Card.Text></Card.Text>
            <Link to={`/Description/${this.props.movieList.id}`}>
              {" "}
              <Button className="btn-description" variant="success">
                Description Movie
              </Button>
            </Link>
            <Button variant="danger" onClick={this.toggle}>
              Edit
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.deleteMovie(this.props.movieList.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
        {this.state.isOpen && (
          <ModalComp
            isOpen={this.state.isOpen}
            toggle={this.toggle}
            movie={this.props.movieList}
            handleClick={this.props.editMovie}
          />
        )}
      </div>
    );
  }
}

export default connect(null, { deleteMovie, editMovie })(MovieCard);
