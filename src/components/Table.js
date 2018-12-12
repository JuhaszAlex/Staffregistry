import React from 'react';
import './Table.css';

class Table extends React.Component {

render() {
const { removeRow } = this.props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Nickname</th>
          <th>Employee</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.data.map((row, i) => (
            <tr key={i}>
              <td>
                {row.name} <br/>
                {row.job}
              </td>
              <td>{row.age}</td>
              <td>{row.nick}</td>
              <td>
                <input type="checkbox" disabled defaultChecked={row.employee} />
              </td>
              <td onClick={() => removeRow(i, 'Deleted: ' + row.name)} className="link dim blue db pointer">
                Delete
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
  }
}
export default Table;