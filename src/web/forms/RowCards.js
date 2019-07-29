import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as ArrowRight } from '../assets/icons/arrow_right.svg';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow_left.svg';

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

    let [pageSize, setPageSize] = React.useState(0);

    const { moveCards } = props;

    const showRows = day => {
        day === 'next' ? setPageSize(pageSize+1) : setPageSize(pageSize-1)
    }

    const displayRowsAndCards = ((day) => {
        showRows(day);
        moveCards({ day: day })
    });

    const classes = useStyles();

    return (       
        <Fragment>
            <Grid item xs={6} sm={4}>
                <div className={classes.paper}>
                    {pageSize > 0 && pageSize <= 3 ?
                        <svg width="100" height="100">
                            <ArrowLeft onClick={() =>  displayRowsAndCards('previous')} />
                        </svg>
                        : null
                    }
                </div>
            </Grid>
            <Grid item xs={6} sm={4}>
                <div className={classes.paper}>
                    {pageSize >= 0 && pageSize < 3 ?
                        <svg width="100" height="100">
                            <ArrowRight onClick={() => displayRowsAndCards('next')} />
                        </svg>
                        : null
                    }
                </div>
            </Grid>
        </Fragment>
    );
}
