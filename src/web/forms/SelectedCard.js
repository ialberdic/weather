import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { CardActionArea } from '@material-ui/core';
let arrCards = [];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
    '&:hover $focusHighlight': {
      color: '#0000FF'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    flexDirection: "row",
    flexGrow: 1,
    marginLeft: '5%',
    color: theme.palette.text.secondary
  },
  space: {
    justifyContent: 'stretch'
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  focusHighlight: {}
}));


export default function SelectedCard(props) {

  const { params, selectCard, isMoveCards } = props;
  let { daysWeather } = props;

  const filterDays = params => {
		let i = 0;
		let dayOne;
		if (params.day === 'next' && isMoveCards) {
			dayOne = daysWeather.find(t => t.show === true).dateNotTime;
			daysWeather.forEach((element) => {
				if (element.dateNotTime <= dayOne) { return element.show = false; }
				element.show = i < 24 ? true : false;
				i += 1;
			});
		} else if (params.day === 'previous' && isMoveCards) {
      daysWeather = [...daysWeather].reverse();
      dayOne = daysWeather.find(t => t.show === true).dateNotTime
			daysWeather.forEach((element) => {
				if (element.dateNotTime >= dayOne) { return element.show = false; }
				element.show = i < 24 ? true : false;
				i += 1;
      });
      daysWeather = [...daysWeather].reverse();
		}
	}

  filterDays(params);

  const result = Array.from(new Set(daysWeather.map(x => x.dateNotTime)))
    .map(item => {
      return {
        date: item,
        temp: daysWeather.find(t => t.dateNotTime === item).temp,
        show: daysWeather.find(t => t.dateNotTime === item).show,
        selected: daysWeather.find(t => t.dateNotTime === item).selected,
      }
    });

   arrCards = Object.assign([], result);

  const classes = useStyles();

  function selectedCard(e) {
    return selectCard(e);
  }

  return (
    arrCards.map((item, index) => {
      if (item.show) {
        return (
          <Grid item xs={3} sm={2} key={index}>
            <div className={classes.paper}>
              <Card className={classes.card} onClick={function () { selectedCard(item) }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Temp: {item.temp}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Date: {item.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        );
      } else {
        return null;
      }
    })
  );
}