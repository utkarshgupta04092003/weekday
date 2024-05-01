import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useSelector } from 'react-redux';
import JobCard from './JobCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        fontFamily: 'Arial',
        width: '85%',
        margin: 'auto'

    },
    card: {
        minWidth: 275,
        margin: theme.spacing(2),
    },
}));


const AllJobs = () => {
    const allJobs = useSelector((state) => state.jobs.jobDetails);
    console.log(allJobs)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {allJobs.map((job, index) => (
                    <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                        <Card className={classes.card}>
                            <JobCard job={job} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AllJobs;
