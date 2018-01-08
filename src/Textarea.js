import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.onInput = this.onInput.bind(this);
  }

  componentDidMount() {
    this.onInput();
  }

  onInput() {
    const { handleInput } = this.props;
    const newInput = this.textarea.value;
    handleInput(newInput);
  }

  render() {
    const { defaultValue, rows } = this.props;

    return (
      <textarea
        defaultValue={defaultValue}
        ref={el => { this.textarea = el; }}
        rows={rows}
        onInput={this.onInput}
      />
    );
  }
}

export default Textarea;