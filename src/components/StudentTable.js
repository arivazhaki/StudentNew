import { React } from 'react';

import StudentData from '../data/StudentData';
import Student from './Student';

const StudentTable = (context) => {
	const { config } = context;

	return <div>
		<table border="2">
			<thead>
				<tr>
					{ config.labels.map((label, i) =>
						<th key={ i }>{ label }</th>) }
				</tr>
			</thead>
			<tbody>
				<Student { ...{ ...context, data: StudentData } }/>
			</tbody>
		</table>
	</div>;
};

export default StudentTable;
