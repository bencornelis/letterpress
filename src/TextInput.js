import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    this.updateText();
  }

  updateText() {
    const { setText } = this.props;
    const newText = this.textarea.value;
    setText(newText);
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <h4>Enter text here:</h4>
        <textarea
          defaultValue={text}
          ref={el => { this.textarea = el; }}
          rows='25'
          onInput={this.updateText}
        />
      </div>
    )
  }
}

export default TextInput;