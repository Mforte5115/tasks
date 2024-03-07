import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [userName, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="edit-mode-check"
                    label="Edit mode"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </div>
            {editMode ? (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                    <Form.Group controlId="formName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={updateUserName}
                            />
                        </Col>
                    </Form.Group>
                </div>
            ) : (
                <p>
                    {userName} is {isStudent ? "" : "not "}a student.
                </p>
            )}
        </div>
    );
}
