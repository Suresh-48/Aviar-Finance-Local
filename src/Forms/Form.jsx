import React from "react";
import { Spinner } from "react-bootstrap";

class Iframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <div className="container rsvp-wrapper">
        {this.state.loading ? (
          <Spinner className="loading text-center" name="three-bounce" color="white" fadeIn="none" />
        ) : null}
        <iframe
          src="https://aviarfs.my1003app.com"
          width="100%"
          height="700"
          onLoad={this.hideSpinner}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    );
  }
}
export default Iframe;
