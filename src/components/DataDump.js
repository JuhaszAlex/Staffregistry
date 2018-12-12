import React from 'react';

const DataDump = ({ onNewData }) => {
	return (
		<article className="b--transparent mv4 w-100 w-50-m w-25-l mw6 center">
		<fieldset id="data_dump" className="ba b--transparent ph0 mh0">
			<legend className="f4 fw6 tl ph0 mh0">Data dump:</legend>
			<div className="br3 ba b--black-10  mw6 shadow-2 center">
			{onNewData ? 
			<p className="">{JSON.stringify(onNewData, null, 2)}</p>
			: null}
			</div>
		</fieldset>
		</article>
	);
};

export default DataDump;