import React, {createRef, useRef, useState} from "react";
import StudentForm from "./StudentForm";
import {useFormikContext} from 'formik';
import axios from "axios";

const CreateStudent = () => {

    const handleOnSubmit = (student) => {
        axios.post('http://localhost:4000/create', student)
            .then(res => {
                if (res.status === 200) {
                    window.alert('Successfully add new student');
                } else {
                    window.alert("Cannot add student. Please try again")
                }
            })
            .catch(err => alert(err));
    }
    return (
        <>
            <React.Fragment>
                <StudentForm handleOnSubmit={handleOnSubmit} enableReinitialize> Create Student </StudentForm>
            </React.Fragment>
        </>
    )
}

export default CreateStudent;