import React, {useState, useEffect} from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import {useParams} from "react-router-dom";

const EditStudent = (props) => {

    const {name} = useParams();

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        studentID: "",
    });
    useEffect(() => {
        axios
            .get(
                "http://localhost:4000/get/"
                + name
            )
            .then((res) => {
                const {name, email, studentID} = res.data[0];
                setFormValues({name: name, email: email, studentID: studentID});
                alert(res.data[0])
            })
            .catch((err) => console.log(err));
    }, []);

    const handleOnSubmit = (studentObject) => {
        axios.put('http://localhost:4000/update/' + name, studentObject)
            .then((res) => {
                if (res.status === 200) {
                    props.history.push("/student-list");
                    alert("Student successfully updated");
                }
            })
            .catch(err => alert("Something went wrong"));
    }

    return (
        <React.Fragment>
            <StudentForm initialValues={formValues} handleOnSubmit={handleOnSubmit}> Update Student </StudentForm>
        </React.Fragment>
    )
}
export default EditStudent;