import * as React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { useListTodo, useDeleteTodo } from "@hooks";

function ListTodoPage() {
    const navigate = useNavigate();

    /**
     * !This Api will call on delete Max Stop
     */

    const { mutate: doDeleteTodo } = useDeleteTodo(
        (response) => {
            toast.success(response.message);
            refetch();
        },
        (error) => {
            window.scrollTo(0, 0);
        }
    );

    const handleAddTodo = () => {
        navigate(`/add`);
    };

    const handleDeleteTodo = (tdata) => {
        let id = tdata.currentTarget.getAttribute("id");
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="alert-box text-end">
                        <FontAwesomeIcon
                            className="alert-close "
                            icon={faClose}
                            onClick={() => {
                                onClose();
                            }}
                        />
                        <div className="alert-popup">
                            <h2>Are You Sure To Delete?</h2>
                            <div className="mt-2 text-center">
                                <Button
                                    className="btn btn-success "
                                    onClick={() => {
                                        doDeleteTodo({
                                            id: id,
                                        });
                                        onClose();
                                    }}
                                >
                                    Yes
                                </Button>
                                <Button
                                    className="btn btn-danger mx-2"
                                    onClick={onClose}
                                >
                                    No
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            },
        });
    };

    const { data: userData, isLoading, refetch } = useListTodo();

    if (isLoading) {
        return null;
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <h1 className="text-center">List Todo</h1>
                </Col>
            </Row>
            <Row className="text-end">
                <Col>
                    <div>
                        <Button type="button" onClick={handleAddTodo}>
                            Add Todo
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-2">
                        <thead>
                            <tr>
                                <th>ToDo ID</th>
                                <th>Category Name</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.category.name}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <Button
                                            className="btn btn-danger"
                                            type="button"
                                            id={item.id}
                                            onClick={handleDeleteTodo.bind(
                                                this
                                            )}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default ListTodoPage;
