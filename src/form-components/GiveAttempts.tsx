import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemaining] = useState<number>(3);
    const [requestingAttempt, setRequesting] = useState<number>(0);

    function gainAttempt() {
        setRemaining(remainingAttempts + requestingAttempt);
    }

    function useAttempt() {
        setRemaining(remainingAttempts - 1);
    }

    function requesting(event: React.ChangeEvent<HTMLInputElement>) {
        setRequesting(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Remaining Attempts: {remainingAttempts}</div>
            <Form.Group controlId="formRequest" as={Row}>
                <Form.Label column sm={2}>
                    Requesting:
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={requestingAttempt}
                        onChange={requesting}
                    />
                </Col>
            </Form.Group>
            <div>
                <Button onClick={gainAttempt}>gain</Button>
                <Button onClick={useAttempt} disabled={remainingAttempts === 0}>
                    use
                </Button>
            </div>
        </div>
    );
}
