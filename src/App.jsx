import { useState } from 'react';
import FormInput from './components/FormInput';
import './App.css';

function App() {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			errorMessage: "Username should be 3-16 characters and shouldn't include any special character",
			label: 'Username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMessage: 'It should be a valid email addresse ',
			label: 'Email',
			required: true,
		},
		{
			id: 3,
			name: 'birthday',
			type: 'date',
			placeholder: 'Birthday',
			label: 'Birthday',
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			errorMessage: 'Password should be a 8-20 charactes and it should include at least 1 letter, 1 number and 1 special character',
			label: 'Password',
			pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
			required: true,
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Conform Password',
			errorMessage: "Passowrds don't mathch",
			label: 'Confirm Password',
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);

	return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
