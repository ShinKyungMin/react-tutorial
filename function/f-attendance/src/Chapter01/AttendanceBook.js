import React, { useState } from 'react';

function AttendanceBook() {

    const [students, setstudents] = useState([
        {id : 1, name : 'Mike'},
        {id : 2, name : 'Jane'},
        {id : 3, name : 'Susan'},
        {id : 4, name : 'Steve'},
        {id : 5, name : 'Brad'},
        {id : 6, name : 'Leo'},
        {id : 7, name : 'John'},
        {id : 8, name : 'Sam'},
        {id : 9, name : 'Kate'},

    ])

        var { students } = this.state;
        const studentList = students.map((student) =>
        <li key = {student.id}>{student.name}</li>
        );

        return (
            <ul>
                {studentList}
            </ul>
        )
    }

export default AttendanceBook;