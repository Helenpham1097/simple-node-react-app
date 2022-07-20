import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";


const StudentTableRow = (props) => {
    const {_id, name, email, studentID} = props.object;

    const deleteStudent = () => {
        axios
            .delete(
                "http://localhost:4000/delete/" + name)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));

    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{studentID}</td>
                <td>
                    <Link className="edit-link"
                          to={"/update/" + name}>
                        Edit
                    </Link>
                    <Button onClick={deleteStudent}
                            size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default StudentTableRow;