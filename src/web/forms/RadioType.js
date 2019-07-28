import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    flexDirection: "row",
    flexGrow: 2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  group: {
    display: 'flex'
  },
  radio: {
    '&$checked': {
      color: '#4B8DF8'
    }
  },
  checked: {}
}));

export default function RadioType(props) {

  const { handleChange, value } = props;

  const classes = useStyles();

  return (
    <Fragment>
    <Grid item xs={5} sm={3}>
      <div className={classes.paper}><FormControl component="fieldset">
        <RadioGroup
          aria-label="celsius"
          name="celsius"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            className={classes.radio}
            value="Celsius"
            control={<Radio  classes={{root: classes.radio, checked: classes.checked}} />}
            label="Celsius"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
      </div>
    </Grid>
    <Grid item xs={5} sm={3}>
      <div className={classes.paper}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Farenheit"
            name="farenheit"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Farenheit"
              control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
              label="Farenheit"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
    </Fragment>
  );
}
