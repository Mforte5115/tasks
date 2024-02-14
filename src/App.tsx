import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import computerCoding from "./Image/laptop-coding.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Michael A Forte
            </header>
            <h1> This is my header </h1>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>Pizza is a good food</li>
                            <li>So is sushi</li>
                            <li>And so is sushi mmmmmm</li>
                        </ul>
                    </Col>
                    <Col>
                        <img
                            src={computerCoding}
                            width={250}
                            height={250}
                            alt="A picture of a laptop"
                        />
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Hello World</p>
            <Container>
                <Row>
                    <Col>
                        <div className="Red-rectangle"></div>
                    </Col>
                    <Col>
                        <div className="Red-rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
