import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from './Header';

export default function Layout(props) {
    return (
        <Container>
            <Header/>
            <main>
                {props.children}
            </main>
        </Container>
    )
}
