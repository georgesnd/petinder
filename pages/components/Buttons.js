import React from "react";

export default class Buttons extends React.Component {
  render() {
    const { onCustomClick, ...props } = this.props;
    return <a {...props} onClick={this.handleClick} />;
  }

  handleClick = (event) => {
    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
    }
  };
}
