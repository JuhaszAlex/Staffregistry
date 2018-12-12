import React from 'react';

class AddMember extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			job: '',
			age: '',
			nick: '',
			employee: false,
			errorMsg: false,
		}
	}

	change = event => {
		this.setState({
			[event.target.name]: event.target.value });
	};

	onEmployeeChange = (event) => {
		this.setState({employee: !this.state.employee})
	}

	onSubmit = () => {
		if(this.state.name.length >= 2) {
			const newMember = {
			name: this.state.name, job: this.state.job, age: this.state.age, nick: this.state.nick, employee: this.state.employee};
			this.props.addNewRow(newMember);
			this.props.toggleModal('Form');
		} else {
			this.setState({errorMsg: true}); 
			setTimeout(function(){this.setState({errorMsg: false});}.bind(this), 3000);
			
		}
		
	}

	render() {
		return (
			<article >	
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="add_new" className="ba b--transparent ph0 mh0">
			    {this.state.errorMsg ? <p className ="tc red">You have to specify a name.</p> : null}
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input 
			        	className="b pa2 input-reset ba hover-bg-light-gray hover-black w-100" 
			        	type="text" 
			        	name="name"  
			        	id="name"
			        	onChange={event => this.change(event)}
			        	/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="job">Job title</label>
			        <input 
			        	className="b pa2 input-reset ba hover-bg-light-gray hover-black w-100" 
			        	type="text" 
			        	name="job"  
			        	id="job"
			        	onChange={event => this.change(event)} 
			        	/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
			        <input 
			        	className="b pa2 input-reset ba hover-bg-light-gray hover-black w-100" 
			        	type="number" 
			        	name="age"  
			        	id="age"
			        	onChange={event => this.change(event)} 
			        	/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="nick">Nickname</label>
			        <input 
			        	className="b pa2 input-reset ba hover-bg-light-gray hover-black w-100" 
			        	type="text" 
			        	name="nick"  
			        	id="nick"
			        	onChange={event => this.change(event)} 
			        	/>
			      </div>
			      <div className="mt3">
			        <label className="b mr1 fw6 lh-copy f6">Employee</label>
			        <input
			        	type="checkbox" 
			        	onClick={this.onEmployeeChange} 
			        	/>
			      </div>
			    </fieldset>
		    <div className="">
		      	<nav style={{display: 'flex', justifyContent:'center'}} >
					<p onClick={() => this.onSubmit()} className='f3 link dim black underline pa3 pointer'>Ok</p>
					<p onClick={() => this.props.toggleModal('Form')} className='f3 link dim black underline pa3 pointer'>Cancel</p>
				</nav>
		    </div>
		  </div>
		</main>
		</article>		
		);
	}
}
export default AddMember;