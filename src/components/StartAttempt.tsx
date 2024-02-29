import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [status, setInProgress] = useState<boolean>(false);

    function changeProgress(): void {
        if (status === false) {
            setInProgress(true);
            setAttempt(attempt - 1);
        } else {
            setInProgress(false);
        }
    }
    return (
        <div>
            {" "}
            <div>
                <Button
                    onClick={() => changeProgress()}
                    disabled={status || attempt === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => changeProgress()} disabled={!status}>
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempt(attempt + 1)}
                    disabled={status}
                >
                    Mulligan
                </Button>
            </div>
            <div>{attempt}</div>
        </div>
    );
}
