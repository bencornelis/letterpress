import React from 'react';
import Textarea from './Textarea';

const DEFAULT_VALUE = 'ff, fi, fl, ffl, ffi';

function LigatureInput(props) {
  const { handleInput } = props;

  return (
    <div className='ligature-input'>
      <h4>Enter ligatures (comma-separated) here:</h4>
      <Textarea
        defaultValue={DEFAULT_VALUE}
        rows='5'
        handleInput={handleInput}
      />
    </div>
  );
}

export default LigatureInput;