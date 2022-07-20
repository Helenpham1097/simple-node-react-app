import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
    const [students, setStudent] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/students')
            .then(({data}) => {
                setStudent(() => data)
            })
            .catch((err) => {
                alert(err)
            })
    }, []);

    const DataTable = () => {
        return students.map((res, i) => {
            return <StudentTableRow object={res} key={i}/>
        });
    };

    return (
        <>
            <div className="table-wrapper">
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>StudentID</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
                </Table>
            </div>
        </>
    )
}
export default StudentList;