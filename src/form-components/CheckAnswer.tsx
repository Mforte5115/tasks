import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Answer:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={answer}
                        onChange={updateAnswer}
                        type="text"
                    />
                </Col>
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
