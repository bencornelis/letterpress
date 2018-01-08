import React from 'react';
import Textarea from './Textarea';

const DEFAULT_VALUE = 'This is some test letterpress text.';

function TextInput(props) {
  const { handleInput } = props;

  return (
    <div>
      <h4>Enter text here:</h4>
      <Textarea
        defaultValue={DEFAULT_VALUE}
        rows='25'
        handleInput={handleInput}
      />
    </div>
  );
}

export default TextInput;