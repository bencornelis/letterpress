import React from 'react';

function Table(props) {
  const { title, rows } = props;
  return (
    <div>
      <h4>{title}</h4>
      <table>
        <tbody>
          {rows.map((row, i) => {
            const { character, count } = row;
            return (
              <tr key={i}>
                <td>{character}</td>
                <td>{count}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;