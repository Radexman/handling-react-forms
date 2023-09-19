import './FormInput.css';

const FormInput = (props) => {
	return (
		<div className='formInput'>
			{/* <label>Username</label> */}
			<input
				type='text'
				name={props.name}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default FormInput;
