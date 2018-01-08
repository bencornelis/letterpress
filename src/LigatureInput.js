import React, { Component } from 'react';

class LigatureInput extends Component {
  constructor(props) {
    super(props);

    this.updateLigatures = this.updateLigatures.bind(this);
  }

  componentDidMount() {
    this.updateLigatures();
  }

  updateLigatures() {
    const { setLigatures } = this.props;
    const newLigaturesString = this.textarea.value;
    setLigatures(newLigaturesString);
  }

  render() {
    const { ligatures } = this.props;
    const ligatureString = [...ligatures].join(', ');

    return (
      <div className='ligature-input'>
        <h4>Enter ligatures (comma-separated) here:</h4>
        <textarea
          defaultValue={ligatureString}
          ref={el => { this.textarea = el; }}
          rows='5'
          onInput={this.updateLigatures}
        />
      </div>
    )
  }
}

export default LigatureInput;