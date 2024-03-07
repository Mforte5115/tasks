import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [currentColor, setCurrent] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrent(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={`color-check-${color}`}
                    label={color}
                    value={color}
                    checked={currentColor === color}
                    inline
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: currentColor
                    }}
                >
                    {currentColor}
                </span>
            </div>
        </div>
    );
}
