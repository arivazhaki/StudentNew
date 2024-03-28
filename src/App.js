import { React } from 'react';
import './App.scss';
import StudentTable from './components/StudentTable';

const App = (context) =>
	<div className="App">
		Ready to start.
		STUDENT DETAILS
		<StudentTable { ...context }/>
	</div>;

export default App;
