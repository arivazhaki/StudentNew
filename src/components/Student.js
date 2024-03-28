/* eslint-disable no-console */
import { React } from 'react';

import MarksheetManager from '../services/MarksheetManager';

const Student = (context) => {
	const { data } = context;

	const studentList = MarksheetManager(data);

	console.log(studentList);

	return studentList.map((student, i) =>
		<tr key={ i }>
			<td>{ student.rollNo }</td>
			<td>{ student.tamil }</td>
			<td>{ student.english }</td>
			<td>{ student.maths }</td>
			<td>{ student.science }</td>
			<td>{ student.social }</td>
			<td>{ student.totalMarks }</td>
			<td>{ student.result }</td>
			<td>{ student.rank }</td>
		</tr>);
};

export default Student;
