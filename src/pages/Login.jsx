import React from 'react'
import { Form, Input, Label, Button, Row, Col } from 'reactstrap'

const Login = () => {
    const getToken = localStorage.getItem('token');

    const directToRegister = () => {
        window.location.href = '/register';
    };

    return (
        <>
            <Row className='my-5'>
                <Col className='d-flex justify-content-center align-items-center fs-5' style={{ fontWeight: 'bold' }}>Login Page</Col>
            </Row>
            <Row>
                <div className='d-flex justify-content-center align-items-center'>
                    <Form className='border w-50'>
                        <Row className='pt-5 px-5 pb-3 mx-auto'>
                            <Col md={3}>
                                <Label>Email</Label>
                            </Col>
                            <Col md={9}>
                                <Input type='email' placeholder='Enter email' />
                            </Col>
                        </Row>
                        <Row className='px-5 pb-3 mx-auto'>
                            <Col md={3}>
                                <Label>Password</Label>
                            </Col>
                            <Col md={9}>
                                <Input type='password' placeholder='Password' />
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='mb-5'>Login</Button>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Label>No Account Yet? Create <span onClick={directToRegister} className='hvrPointer' style={{ cursor: 'pointer' }}>here!</span></Label>
                        </div>
                    </Form>
                </div>
            </Row>
        </>
    )
}

export default Login