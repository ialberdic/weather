import React, { Fragment, useState } from 'react';
import FlagsInputCode from './FlagInputCountry';
import useFormField from '../hooks/UseFormField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as ArrowRight } from '../assets/icons/arrow_right.svg';
import { ReactComponent as ArrowLeft }  from '../assets/icons/arrow_left.svg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        flexDirection: "row",
        flexGrow: 2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary
    }
}));

export default function RowCards(props) {

    const [value, setValue] = React.useState('Farenheit');

    function handleChange(event) {
        //setValue(event.target.value);
        console.log("Clicked")
    }

    const [responseCode, handleSubmit, onInputChange] = useFormField('');

    const classes = useStyles();

    console.log(classes, " Classes");

    return (
        <Fragment>
            <Grid item xs={6} sm={4}>
                <div className={classes.paper}>
                <svg width="100" height="100">
                        <ArrowLeft onClick={() => handleChange()} />
                   </svg>
                </div>
            </Grid>
            <Grid item xs={6} sm={4}>
                <div className={classes.paper}>
                <svg width="100" height="100">
                        <ArrowRight onClick={() => handleChange()} />
                   </svg>
                </div>
            </Grid>
        </Fragment>
    );
}
