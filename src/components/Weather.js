import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RadioType from '../web/forms/RadioType';
import Grid from '@material-ui/core/Grid';
import RowCards from '../web/forms/RowCards';
import SelectedCard from '../web/forms/SelectedCard';
import BarChart from '../web/forms/BarChart';
import Loader from 'react-loader';
let isFirstLoad = false;
let filterParams = {};
let valueRadio = 'Farenheit';

const Weather = (props) => {

	const { arrWeather, reFetch, loading } = props;

	const addDateWithoutTime = () => {
		const lastDay = new Date(arrWeather[arrWeather.length-1].date);		
		const thirdDay = new Date(lastDay.setDate(lastDay.getDate() - 2));
		arrWeather.forEach((element) => {
			element.dateNotTime = element.date.split(' ')[0];
			if (thirdDay.getTime() > new Date(element.date).getTime()
				&& thirdDay.getDate() > new Date(element.date).getDate()) {
				element.show = true;
				element.selected = false;
			} else {
				element.show = false;
				element.selected = false;
			}
		})

		return arrWeather;
	};

	const [reloadCards, setReloadCards] = React.useState(true);

	const [isMoveCards, setIsMoveCards] = React.useState(false);

	useEffect(() => {
		setDaysWeather(addDateWithoutTime())
	});

	const filterDays = params => {
		let i = 0;
		let dayOne;
		if (params.day === 'next' && isMoveCards) {
			dayOne = arrWeather.find(t => t.show === true).dateNotTime;
			arrWeather.forEach((element) => {
				if (element.dateNotTime <= dayOne) { return element.show = false; }
				element.show = i < 24 ? true : false;
				i += 1;
			});
		} else if (params.day === 'previous' && isMoveCards) {
			const arrReverse = [...arrWeather].reverse();
			dayOne = [...arrWeather].reverse().find(t => t.show === true).dateNotTime
			arrReverse.forEach((element) => {
				if (element.dateNotTime > dayOne) { return element.show = false; }
				element.show = i < 24 ? true : false;
				i += 1;
			});
		}
	}

	const fnExec = () => {
		return !isFirstLoad ? addDateWithoutTime() : filterDays(filterParams);
	}

	const [daysWeather, setDaysWeather] = React.useState(fnExec());

	const handleChange = event => {
		setReloadCards(true);
		let value = event.target.value;
		valueRadio = value;
		isFirstLoad = false;
		reFetch(value);
	}

	const moveCards = params => {
		isFirstLoad = true;
		filterParams = params;
		setTrigger(!trigger);
		setIsMoveCards(true);
		setReloadCards(true);
	}

	const [trigger, setTrigger] = React.useState(false);

	const cleanPrevioousSelected = () => {
		daysWeather.map(element => { 
			return element.selected = false; 
		});
	}

	const selectCard = (card) => {
		cleanPrevioousSelected();
		daysWeather.map(element => {
			return card.date === element.dateNotTime ? element.selected = true : null;
		});
		const arrSegments = Object.assign([], daysWeather);
		setTrigger(!trigger);
		setIsMoveCards(false);
		setReloadCards(false);
		setAllSegments(arrSegments);

	}

	const [allSegments, setAllSegments] = React.useState(fnExec());

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

	return (
		<Fragment>
			{!loading && daysWeather.length === 40 ? 
				<div className={classes.root}>
					<Grid container spacing={3} className={classes.container} justify={"center"} display="flex" direction="row">
						<RadioType
							handleChange={handleChange}
							value={valueRadio}
						/>
					</Grid>
					<Grid container justify={"center"} display="flex" direction="row">
						<RowCards
							reloadCards={reloadCards}
							daysWeather={daysWeather}
							moveCards={moveCards}
						/>
					</Grid>
					<Grid container justify={"center"} display="flex" direction="row">
						<SelectedCard
							isMoveCards={isMoveCards}
							reloadCards={reloadCards}
							selectCard={selectCard}
							daysWeather={daysWeather}
							allSegments={isFirstLoad ? daysWeather : allSegments}
						/>
					</Grid>
					<Grid container justify={"center"} display="flex" direction="row">
						<BarChart
							daysWeather={daysWeather}
							isFirstLoad={isFirstLoad}
						/>
					</Grid>
				</div >
				: <Loader />
		}
		</Fragment>
	)
}

export default Weather;
