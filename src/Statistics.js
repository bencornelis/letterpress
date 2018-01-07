import React from 'react';
import Table from './Table';
import * as helpers from './helpers';

function Statistics(props) {
  const { text, ligatures } = props;
  const rows = helpers.computeCharCountArray(text, ligatures)

  const rowsSortedByCount     = helpers.sortByCount(rows);
  const rowsSortedByCharacter = helpers.sortByCharacter(rows, ligatures);

  return (
    <div>
      <div className='left-column'>
        <Table title='By Frequency' rows={rowsSortedByCount} />
      </div>
      <div className='right-column'>
        <Table title='By Character' rows={rowsSortedByCharacter} />
      </div>
    </div>
  )
}

export default Statistics;
