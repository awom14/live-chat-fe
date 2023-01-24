import React from 'react'
import { Form, Input, Label, Button, Row, Col } from 'reactstrap'

const Register = () => {
    const directToLogin = () => {
        window.location.href = '/login';
    };

    return (
        <>
            <Row className='my-5'>
                <Col className='d-flex justify-content-center align-items-center fs-5' style={{ fontWeight: 'bold' }}>Register Page</Col>
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
                        <Row className='px-5 pb-3 mx-auto'>
                            <Col md={3}>
                                <Label>Re-enter Password</Label>
                            </Col>
                            <Col md={9}>
                                <Input type='password' placeholder='Re-enter Password' />
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='mb-5'>Submit</Button>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Label>Already have an Account? Click <span onClick={directToLogin} className='hvrPointer' style={{ cursor: 'pointer' }}>here!</span></Label>
                        </div>
                    </Form>
                </div>
            </Row>
        </>
    )
}

export default Register