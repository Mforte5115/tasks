import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Thanksgiving"
    | "July4th"
    | "Easter";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Easter");

    const alphaHoliday: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "July4th",
        July4th: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const timeHoliday: Record<Holiday, Holiday> = {
        Easter: "July4th",
        July4th: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Easter"
    };
    const holidayEmojis: Record<Holiday, string> = {
        Easter: "🐇",
        July4th: "🎆",
        Halloween: "👻",
        Thanksgiving: "🦃",
        Christmas: "🎄"
    };

    return (
        <div>
            <div>
                <Button onClick={() => setHoliday(alphaHoliday[holiday])}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setHoliday(timeHoliday[holiday])}>
                    Advance by Year
                </Button>
            </div>
            <div>Holiday: {holidayEmojis[holiday]}</div>
        </div>
    );
}
