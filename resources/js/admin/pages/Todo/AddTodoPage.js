import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCategoryList, useAddTodo } from "@hooks";
import validationSchema from "./AddTodoValidation";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

function AddTodoPage() {
    const navigate = useNavigate();
    let categoryOptions = [];
    /**
     * !This block will call category dropdown api
     */
    const { isSuccess: CategoryisSuccess, data: categoryList } =
        useCategoryList();

    if (CategoryisSuccess !== false) {
        categoryOptions = categoryList.data.map((item, i) => {
            return { value: item.id, label: item.name };
        });
    }

    const defaultValue = (option, value) => {
        return option ? option.find((option) => option.value === value) : "";
    };

    const handleCancelClick = () => {
        navigate(`/`);
    };

    /**
     * !This Api will call on click submit button
     */
    const { mutate: doAddTodo } = useAddTodo(
        (response) => {
            toast.success(response.message);
            navigate("/");
        },
        (error) => {
            window.scrollTo(0, 0);
        }
    );

    const formik = useFormik({
        initialValues: {
            category_id: "",
            title: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            doAddTodo(values);
        },
    });
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Add Todo</h1>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label className="field-label field-label-top">
                                Select Category
                            </Form.Label>
                            <Select
                                isClearable={true}
                                name="category_id"
                                options={
                                    CategoryisSuccess
                                        ? categoryOptions
                                        : categoryOptions
                                }
                                placeholder="Select"
                                onChange={(selectedOption) => {
                                    formik.setFieldValue(
                                        "category_id",
                                        selectedOption.value
                                    );
                                }}
                                defaultValue={formik.values.id}
                                value={defaultValue(
                                    categoryOptions,
                                    formik.values.id
                                )}
                                onBlur={formik.handleBlur}
                                className={
                                    "form-field " +
                                    (formik.touched.id && formik.errors.id
                                        ? "form-select-error"
                                        : formik.touched.id && !formik.errors.id
                                        ? "form-select-success"
                                        : "")
                                }
                            />
                            <div className="form-field-error-text">
                                {formik.touched.category_id &&
                                formik.errors.category_id ? (
                                    <div className="text-danger">
                                        {formik.errors.category_id}
                                    </div>
                                ) : null}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="field-label field-label-top">
                                Title
                            </Form.Label>
                            <Form.Control
                                className={
                                    " " +
                                    (formik.touched.title && formik.errors.title
                                        ? "form-field-error"
                                        : formik.touched.title &&
                                          !formik.errors.title
                                        ? "form-field-success"
                                        : "")
                                }
                                type="text"
                                name="title"
                                placeholder="Please Enter the Title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                            />
                            <div className="form-field-error-text">
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="text-danger">
                                        {formik.errors.title}
                                    </div>
                                ) : null}
                            </div>
                        </Form.Group>
                        <br></br>
                        <div className="text-center">
                            <Button type="submit">Submit</Button>
                            <Button
                                className="btn btn-danger mx-2"
                                type="button"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddTodoPage;
