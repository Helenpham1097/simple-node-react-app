import React, {useState, useEffect} from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {


    const handleOnSubmit = (studentObject) => {
      axios.put('http://localhost:3000/students/edit/' + props.ma, studentObject)
    }

    return (
        <React.Fragment>
            <StudentForm handleOnSubmit={handleOnSubmit} enableReinitialize> Update Student </StudentForm>
        </React.Fragment>
    )
}

export default EditStudent;