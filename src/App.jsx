import { useState } from 'react';
import FormInput from './components/FormInput';
import './App.css';

function App() {
	// const [username, setUsername] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const entries = Object.fromEntries(data.entries());
		console.log(entries);
	};

	return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='username'
					placeholder='User Name'
				/>
				<FormInput
					name='email'
					placeholder='Email'
				/>
				<FormInput
					name='full-name'
					placeholder='Full Name'
				/>
				<FormInput
					name='something-else'
					placeholder='Somthing Else'
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
