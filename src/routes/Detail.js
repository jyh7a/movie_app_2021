import React, { Component } from "react";
import "./Detail.css";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    // console.log("location", location);
    // console.log("history", history);
  }

  render() {
    if (!this.props.location.state) return null;

    window.scrollTo(0, 0);

    const {
      location: {
        state: { title, year, summary, poster, genres },
      },
    } = this.props;

    return (
      <div className="detail">
        <div className="detail__container">
          <img className="detail__poster" src={poster} alt={title} />

          <div className="detail__data">
            <h1 className="detail__title">{title}</h1>
            <div className="detail__year">{year}</div>
            <ul className="detail__genres">
              {genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })}
            </ul>
            <div className="detail__summary">{summary}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
