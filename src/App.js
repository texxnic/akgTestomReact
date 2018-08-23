import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import TestomList from './TestomList.js';

class App extends Component {
	render() {
		return (
			<div className="testomForm container-lessfluid">
				<div className="col-md-7">
					<Form />
				</div>
				<div className="testomsWrap">
				<h1 className="calc__ghost">Отзывы</h1>
					<TestomList />
				</div>
			</div>

			);
	}
}

export default App;
