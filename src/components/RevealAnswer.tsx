import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!value);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {value && <div>42</div>}
        </div>
    );
}
