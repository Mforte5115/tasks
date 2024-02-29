import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieOne, setDieOne] = useState<number>(1);
    const [dieTwo, setDieTwo] = useState<number>(2);

    function rollDieOne(): void {
        setDieOne(d6());
    }
    function rollDieTwo(): void {
        setDieTwo(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={() => rollDieOne()}>Roll Left</Button>
                <Button onClick={() => rollDieTwo()}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">{dieOne}</span>
                <span data-testid="right-die">{dieTwo}</span>
            </div>
            {dieOne === 1 && dieTwo === 1 ? (
                <p>You Lose</p>
            ) : dieOne === dieTwo ? (
                <p>You Win</p>
            ) : null}
        </div>
    );
}
