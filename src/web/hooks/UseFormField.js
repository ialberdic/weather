import { useState } from 'react';

function useFormField(initialVal = '') {
    const [responseCode, setResponseCode] = useState(initialVal);

	const handleSubmit = mobileNumber => {
		fetch('http://localhost:4000/api/mobile-number', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ mobileNumber: mobileNumber })
		}).then(async function (response) {
			setResponseCode(response.status);
		}).catch(function (err) {
			console.log(err);

		});
    }

    const onInputChange = () => {
		setResponseCode('');
    }
    
  return [responseCode, handleSubmit, onInputChange];
}

export default useFormField;