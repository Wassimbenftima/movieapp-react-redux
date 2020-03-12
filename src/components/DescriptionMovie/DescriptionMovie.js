import React from "react";
import { connect } from "react-redux";
function DescriptionMovie(props) {
  const [movie] = props.trailer.filter(el => el.id == props.match.params.id);
  return (
    <div>
      <iframe
        height="350"
        width="610"
        title="trailer"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={movie.trailer}
      ></iframe>
      {console.log(props.trailer)}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    trailer: state.movieList
  };
};
export default connect(mapStateToProps)(DescriptionMovie);
