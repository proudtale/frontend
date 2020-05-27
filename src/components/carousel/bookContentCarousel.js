import React, { Component, Fragment } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import BookContentCard from "../book/bookContentCard";
import "@brainhubeu/react-carousel/lib/style.css";

class BookConentCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onChange = (value) => {
    this.setState({ value });
  };
  render() {
    const { books } = this.props;
    return (
      <Fragment>
        <h1 className="category">{this.props.category}</h1>
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          //  arrows
          infinite
          slidesPerPage={6}
        >
          {books.map((book) => {
            return <BookContentCard book={book} />;
          })}
        </Carousel>
        <Dots value={this.state.value} onChange={this.onChange} number={6} />
      </Fragment>
    );
  }
}
export default BookConentCarousel;
