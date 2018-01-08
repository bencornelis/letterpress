import React, { Component } from 'react';
import LigatureInput from './LigatureInput';
import TextInput from './TextInput';
import Statistics from './Statistics';
import * as helpers from './helpers';
import * as R from 'ramda';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      ligatures: new Set(),
      charCount: 0,
    }

    this.setText = this.setText.bind(this);
    this.setLigatures = this.setLigatures.bind(this);
  }

  setText(text) {
    this.setState(prevState => {
      const charCount = helpers.computeCharCount(text, prevState.ligatures);
      return {
        text,
        charCount,
      }
    });
  }

  setLigatures(ligaturesString) {
    const isNonEmpty = lig => !R.isEmpty(lig)
    const ligatureArray = R.filter(isNonEmpty)(ligaturesString.split(/\s*,\s*/));
    const ligatures = new Set(ligatureArray);

    this.setState(prevState => {
      const charCount = helpers.computeCharCount(prevState.text, ligatures);
      return {
        ligatures,
        charCount,
      }
    });
  }

  render() {
    const { text, ligatures, charCount } = this.state;

    return (
      <div>
        <div className='left-column'>
          <TextInput handleInput={this.setText} />
          character count: {charCount}
          <LigatureInput handleInput={this.setLigatures} />
        </div>
        <div className='right-column'>
          <Statistics
            text={text}
            ligatures={ligatures}
          />
        </div>
      </div>
    );
  }
}

export default App;
