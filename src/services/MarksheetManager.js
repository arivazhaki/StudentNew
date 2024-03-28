/* eslint-disable no-return-assign */
/* eslint-disable no-magic-numbers */

const getTotal = (marks) =>
	marks.tamil + marks.english
	+ marks.maths + marks.maths + marks.science + marks.social;

const getResult = (elememt) =>
	(Math.min(
		elememt.english,
		elememt.maths,
		elememt.tamil,
		elememt.science,
		elememt.social
	) < 30
		? 'Fail'
		: 'Pass');

const getRankDetails = (studentData) => {
	let rank = 0;
	const sortedarray = studentData.sort((a, b) => b.totalMarks - a.totalMarks);
	const rankData = sortedarray.map((student) =>
		({
			...student,
			rank: student.result === 'Pass' ? rank += 1 : '-',
		}));

	return rankData;
};

const getTotalMarks = (students) => {
	const totalMarks = getTotal(students);
	const studentresultDetails = getResult(students);

	return {
		...students,
		totalMarks: totalMarks,
		result: studentresultDetails,
	};
};

const MarksheetManager = (students) => {
	const marksheets = students.map(getTotalMarks);
	const rankList = getRankDetails(marksheets);

	return rankList;
};

export default MarksheetManager;
