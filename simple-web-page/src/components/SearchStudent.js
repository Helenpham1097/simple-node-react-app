import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import StudentTableRow from "./StudentTableRow";
import Table from "react-bootstrap/Table";

const SearchStudent = () => {
    const name = useParams();

    const [foundStudents, setStudents] = useState([]);
    const keyWord = Object.values(name);

    useEffect(() => {
        axios.get("http://localhost:4000/get/" + keyWord)
            .then(({data}) => {
                setStudents(() => data)
            })
            .catch((err) =>{
                alert(err);
            })
    },[]);

    const DataTable = () => {
        return foundStudents.map((res, i) => {
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

export default SearchStudent;