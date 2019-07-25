import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RadioType from '../web/forms/RadioType';
import Header from '../web/forms/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RowCards from '../web/forms/RowCards';
import SelectedCard from '../web/forms/SelectedCard';
import Test from '../web/forms/Test';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Weather = (props) => {

	const initialFormState = { mobileNumber: '' }

	// Setting state
	const [phoneNumber, setPhoneNumber] = useState(initialFormState);

	const [value, setValue] = React.useState('Farenheit');

	function handleChange(event) {
		setValue(event.target.value);
	}

	const addPhoneNumber = phoneNumber => {
		setPhoneNumber([phoneNumber])
	}

	const useStyles = makeStyles(theme => ({
		root: {
			textAlign: "center",
			minWidth: 330
		},
		container: {
			marginTop: 50,
		},
		paper: {
			backgroundColor: "white",

		},
		radio: {
			alignContent: "center"
		}
	}));

	const classes = useStyles();

	console.log(props, " PROPS 1");

	return (
		<div className={classes.root}>
				<Grid container spacing={3} className={classes.container} justify={"center"} display="flex" direction="row">
					<RadioType
						phoneNumber={phoneNumber}
						addPhoneNumber={addPhoneNumber}
					/>
				</Grid>

				<Grid container justify={"center"} display="flex" direction="row">
					<RowCards />
				</Grid>
				<Grid container justify={"center"} display="flex" direction="row">
					<SelectedCard />
				</Grid>
				<Grid container justify={"center"} display="flex" direction="row">
					<Test />
				</Grid>
		</div >
	)
}

export default Weather;
