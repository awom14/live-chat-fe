import React, { useEffect, useState } from 'react';
import { Form, Input, Label, Button, Row, Col, FormFeedback } from 'reactstrap';
import axios from 'axios';

const Register = () => {
	const directToLogin = () => {
		window.location.href = '/';
	};

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const [isValid, setIsValid] = useState(false);

	const data = { username, email, password, rePassword };

	useEffect(() => {
		if (password !== rePassword) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
		console.log(isValid);
	}, [rePassword])

	const handleSubmit = async (event) => {
		event.preventDefault();

		console.log(data);
		try {
			const result = await axios.post('http://localhost:1337/register', data);
			console.log(result);
		} catch (err) {
			console.log(err.message);
		}
	};

	const getUsers = async () => {
		const headers = {
			'Authorization': 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyN2VlMzM4LTYwZmMtNDhkMC04ZDQ0LTM1ZDBlNTEyNzU1ZCIsInVzZXJuYW1lIjoibW93YSIsImVtYWlsIjoibW93YUBnbWFpbC5jb20iLCJpYXQiOjE2NzU2NTUxMjEsImV4cCI6MTY3NTY1ODcyMX0.ps3NArkYY4KRbQwaFebAkf9v5cZiOEGLqlqepZmkgrI'}

		try {
			const res = await axios.get('http://localhost:1337/getUsers', {headers})
			console.log(res.data.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
		<Row className='my-5'>
			<Col className='d-flex justify-content-center align-items-center fs-5' style={{ fontWeight: 'bold' }}>Register Page</Col>
		</Row>
		<Row>
			<div className='d-flex justify-content-center align-items-center'>
				<Form onSubmit={handleSubmit} className='border w-50'>
					<Row className='pt-5 px-5 pb-3 mx-auto'>
						<Col md={3}>
							<Label>Username</Label>
						</Col>
						<Col md={9}>
							<Input type='text' value={username} onChange={(event) => setUsername(event.target.value)} required placeholder='Enter Username' />
						</Col>
					</Row>
					<Row className='px-5 pb-3 mx-auto'>
						<Col md={3}>
							<Label>Email</Label>
						</Col>
						<Col md={9}>
							<Input type='email' value={email} onChange={(event) => setEmail(event.target.value)} required placeholder='Enter email' />
						</Col>
					</Row>
					<Row className='px-5 pb-3 mx-auto'>
						<Col md={3}>
							<Label>Password</Label>
						</Col>
						<Col md={9}>
							<Input type='password' value={password} onChange={(event) => setPassword(event.target.value)} required placeholder='Password' />
						</Col>
					</Row>
					<Row className='px-5 pb-3 mx-auto'>
						<Col md={3}>
							<Label>Re-enter Password</Label>
						</Col>
						<Col md={9}>
							<Input type='password' value={rePassword} autoFocus={isValid} onChange={(event) => setRePassword(event.target.value)} required invalid={isValid} placeholder='Re-enter Password' />
							<FormFeedback>Please input the correct password.</FormFeedback>
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

export default Register;