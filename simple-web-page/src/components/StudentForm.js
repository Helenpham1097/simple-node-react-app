import React, {forwardRef, useState} from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage, useFormik} from "formik";
import {FormGroup, FormControl, Button, FormLabel} from "react-bootstrap";

const StudentForm = (props) => {

    // const [student, setStudent] = useState({name: "", email: "", studentID: ""})
    //
    // const {name, email, studentID} = student;
    // const [err, setErr] = useState("");
    //
    // const handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     if(err === ''){
    //         props.handleOnSubmit(student);
    //     }
    //
    // }
    //
    // const handleInputChange = (event) => {
    //     const {name, value} = event.target;
    //     switch (name) {
    //         case 'name':
    //             if (value !== '') {
    //                 setStudent((prevState) => ({
    //                     ...prevState,
    //                     name: value
    //                 }))
    //             } else {
    //                 setErr(() => ({
    //                     err: "something wrong"
    //                 }))
    //             }
    //             break;
    //         case 'email':
    //             if (value !== '') {
    //                 setStudent((prevState) => ({
    //                     ...prevState,
    //                     email: value
    //                 }))
    //             }
    //             break;
    //         case 'studentID':
    //             if (value !== '') {
    //                 setStudent((prevState) => ({
    //                     ...prevState,
    //                     studentID: value
    //                 }))
    //             }
    //             break;
    //         default:
    //             setStudent(prevState => prevState)
    //     }
    // }
    //
    // return (
    //     <div className="student-form">
    //         {err && <p className='err-msg'>{err}</p>}
    //         <Form onSubmit={handleOnSubmit}>
    //
    //             <FormGroup controlId="name">
    //                 <FormLabel>Student Name</FormLabel>
    //                 <FormControl
    //                     className="input-control"
    //                     type="text"
    //                     name="name"
    //                     value={name}
    //                     placeholder="name"
    //                     onChange={handleInputChange}/>
    //             </FormGroup>
    //
    //             <FormGroup controlId="email">
    //                 <FormLabel>Email</FormLabel>
    //                 <FormControl
    //                     className="input-control"
    //                     type="text"
    //                     name="email"
    //                     value={email}
    //                     placeholder="email"
    //                     onChange={handleInputChange}/>
    //             </FormGroup>
    //
    //             <FormGroup controlId="studentID">
    //                 <FormLabel>StudentID</FormLabel>
    //                 <FormControl
    //                     className="input-control"
    //                     type="text"
    //                     name="studentID"
    //                     value={studentID}
    //                     placeholder="ID"
    //                     onChange={handleInputChange}/>
    //             </FormGroup>
    //
    //             <Button variant="primary" type="submit" className="submit-btn">
    //                 {props.children}
    //             </Button>
    //
    //         </Form>
    //     </div>
    // )


    // const [name, setName] = useState(() => '');
    // const [email, setEmail] = useState(() => '');
    // const [studentID, setStudentID] = useState(() => '');
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            studentID: ""
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            props.handleOnSubmit(values);
        },


    });
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .email("You have enter an invalid email")
            .required("Required"),
        studentID: Yup.number()
            .negative("Invalid student ID")
            .required("Required")
    });

    return (
        <>
            <div className='form-wrapper'>
                <Formik validationSchema={validationSchema}>
                    {({
                          touched,
                          errors,
                      }) => (
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <FormLabel>Student Name</FormLabel>
                                <FormControl
                                    name="name"
                                    type="text"
                                    placeholder="name"
                                    className="form-control"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    isValid={touched.name && !errors.name}
                                >
                                </FormControl>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    name="email"
                                    type="text"
                                    placeholder="email"
                                    className="form-control"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    isValid={touched.email && !errors.email}
                                >
                                </FormControl>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Student ID</FormLabel>
                                <FormControl
                                    name="studentID"
                                    type="text"
                                    placeholder="ID"
                                    className="form-control"
                                    value={formik.values.studentID}
                                    onChange={formik.handleChange}
                                    isValid={touched.studentID && !errors.studentID}
                                >
                                </FormControl>
                            </FormGroup>

                            <Button variant="danger" size="lg" block="block" type="submit">
                                {props.children}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}


export default StudentForm;

