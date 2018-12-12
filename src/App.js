import React, { Component } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import AddMember from './components/AddMember';
import Table from './components/Table';
import DataDump from './components/DataDump';
import persons from './components/persons.json';
import Modal from 'react-modal';
import LineChart from './components/LineChart';



class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    details: persons,
    isActive: false,
    isLineActive: false,
    fields: {}
  }
}

componentWillMount() {
  Modal.setAppElement('body');
}

toggleModal = (route) => {
  if(route === 'Form') {
    this.setState({isActive: !this.state.isActive})
  } else if (route === 'Line') {
    this.setState({isLineActive: !this.state.isLineActive})
  }
}

addNewRow = (data) => {
  this.setState({fields: data});
  this.state.details.push(data);
  this.setState({details: this.state.details});
}


removeRow = (i, name) => {
  this.setState({fields: name});
  this.state.details.splice( i, 1 );  
  this.setState( {details: this.state.details} );
}

createCoordinates() {
    const rawdata = this.state.details.map(function(el) {
      return parseInt(el.age);
    });
    console.log(rawdata);
    
    const onlyNumbers =  rawdata.filter( value => 
      !Number.isNaN(value) 
    );
    console.log(onlyNumbers);
    
    const z = []
      for(let i = 1; i <= onlyNumbers.length; i++) {
        z.push(i)
    }

    const data = []
      for(let i = 0; i < onlyNumbers.length; i++) {
      const x = z[i]
      const y = onlyNumbers[i]
      data.push({x, y})
    }
    console.log(data);
    return data;
}



  render() {
    return (
      <div className="App">
      	<div className="row">
        	<div className="col-sm-12">
        		<AddButton toggleModal={this.toggleModal}/>
        		<Table data={this.state.details} removeRow={this.removeRow}/>
            <Modal {...this.props} isOpen={this.state.isActive} onRequestClose={() => this.toggleModal('Form')}
            className="br3 bg-white b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
              <AddMember toggleModal={this.toggleModal} addNewRow={this.addNewRow} />
            </Modal>
            <Modal {...this.props} isOpen={this.state.isLineActive} onRequestClose={() => this.toggleModal('Line')}
              className="br3 bg-white b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
              {this.state.details.length >= 2 ?
              <LineChart className="center" data={this.createCoordinates()} />
              : <h3 className="tc red pt2 pb2"> There must be at least 2 members in the table with age defined.</h3>
              }
            </Modal>
            <DataDump onNewData={this.state.fields} />
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
