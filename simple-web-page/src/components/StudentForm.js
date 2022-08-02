import React, {forwardRef, useState} from 'react';
import * as Yup from 'yup';
import {Formik, Form, useFormik} from "formik";
import {FormGroup, FormControl, Button, FormLabel} from "react-bootstrap";


const StudentForm = (props) => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: props.initialValues ? props.initialValues.name : '',
            email: props.initialValues ? props.initialValues.email : '',
            studentID: props.initialValues ? props.initialValues.studentID : ''
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

