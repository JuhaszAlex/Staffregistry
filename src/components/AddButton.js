import React from 'react';

const AddButton = ({ toggleModal }) => {
			return (
			<nav style={{display: 'flex', justifyContent:'flex-start'}} >
				<p onClick={() => toggleModal('Form')} className='f3 link dim black underline pa3 pointer'>Add</p>
				<p onClick={() => toggleModal('Line')} className='f3 link dim black underline pa3 pointer'>Line Chart</p>
			</nav>
			);
}

export default AddButton;