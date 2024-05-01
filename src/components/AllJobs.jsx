import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import { useSelector } from 'react-redux';
import JobCard from './JobCard';
import Filters from './Filters';

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
    const classes = useStyles();

    const [filterData, setFilterData] = useState([]);
    const [currFilter, setCurrFilter] = useState({});

    useEffect(()=>{
        udpateFilterData();
    }, [allJobs, currFilter]);
    

    // currently there are only 5 filters applicable are other 2 filter values are not provided in the api response that is company nanme and tech stack
    // if location type is remote then only show remote job otherwise check the for the preferred location
    const udpateFilterData = () => {
        console.log(currFilter)
        const filteredJob = allJobs.filter((job)=>{
            if((currFilter.remote.toLowerCase() == "remote" ? job.location.toLowerCase().includes('remote') 
            : job.location.toLowerCase().includes(currFilter.location.toLowerCase()) )
            && job.jobRole.toLowerCase().includes(currFilter.role.toLowerCase())
            && (currFilter.minBasePay == '' || job.minJdSalary >= parseInt(currFilter.minBasePay))
            && (currFilter.minExperience == '' || job.minExp == parseInt(currFilter.minExperience))
            ){
                return job;
            }
        })
        setFilterData(filteredJob);
    }
    
    const handleFilter = (filter) =>{
        setCurrFilter(filter);
    }
    
    return (
        <div className={classes.root}>
            <Filters handleFilter={handleFilter} />

            <Grid container spacing={3}>
                {filterData.map((job, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
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
