import React from 'react'
import { Box, Button, CardContent, makeStyles, Typography } from '@material-ui/core';


import companyLogo from '../assets/companyLogo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        background: 'linear-gradient(to bottom, transparent, white)', // Add gradient background

        border: '2px solid red',

    },
    postedDate: {
        border: '1px solid lightgrey',
        boxShadow: '1px',
        display: 'inline',
        padding: '2px',
        display: 'inline-flex',
        alignItems: 'center',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', // Add box shadow

        borderRadius: '20px'
    },
    logo: {
        width: 40, // Adjust as needed
        height: 'auto',
        marginRight: theme.spacing(2),
    },
    detailsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    salary: {
        color: 'gray',
        fontWeight: '',
        fontSize: '1rem',
        marginTop: '6px',
        display: 'flex'
    },
    jobDetails: {
        textAlign: 'justify'
    },
    about: {
        marginTop: '0.8rem',
        fontSize: '1.2rem',
        fontWeight: 600,
        fontFamily: 'Arial',
        display: 'flex',
        flexDirection: 'column'
    },
    aboutus: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Arial',
        display: 'flex',
        textAlign: 'justify'
    },
    viewjob: {
        color: 'blue',
        display: 'flex',
        justifyContent: 'center',
        opacity: '0.7',
        background: 'white',
        // border: '2px solid red',
        paddingTop: '2rem',
        position: 'relative',
        top: '-2.2rem',
        cursor: 'pointer',

    },
    easyapply: {
        backgroundColor: '#54efc3',
        color: 'black',
        width: '100%',
        marginTop: '10px',
        '&:hover': {
            backgroundColor: '#54efc3',
        },
    },
    referralask: {
        backgroundColor: '#4842da',
        color: 'black',
        width: '100%',
        marginTop: '10px',
        '&:hover': {
            backgroundColor: '#4842da',
        },
    },
    referralimg: {
        width: '20px',
        background: 'white',
        borderRadius: '50%',
        filter: 'blur(1px)',
        marginRight: '5px'
    }
}));
export default function JobCard({ job }) {
    const classes = useStyles();

    return (
        <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
            <Box>

                <Typography variant="subtitle3" color="textSecondary" className={classes.postedDate}>
                    ⌛
                    Posted 3 days ago
                </Typography>
            </Box>


            <Box className={classes.detailsContainer}>
                <Box>
                    <img src={companyLogo} alt="Company Logo" className={classes.logo} />
                </Box>
                <Box style={{ marginTop: '3px' }}>
                    <Typography variant="h6">
                        Company Name
                    </Typography>
                    <Typography variant="p" style={{ display: 'block', textTransform: 'capitalize' }}>
                        {job.jobRole}
                    </Typography>
                    <Typography variant="p" style={{ display: 'block', textTransform: 'capitalize' }}>
                        {job.location}
                    </Typography>

                </Box>

            </Box>
            <Box className={classes.salary}>
                <Typography variant='p'>Estimated Salary: 18-35 LPA ✅</Typography>
            </Box>
            <Box className={classes.jobDetails}>
                <Typography variant='p' className={classes.about}>About Company</Typography>
                <Typography variant='p' className={classes.aboutus}>About us</Typography>
                <Typography variant='p'>{job.jobDetailsFromCompany.substring(0, 500)}</Typography>
                <Typography variant='p' className={classes.viewjob}>view job</Typography>
            </Box>
            <Box>
                <Typography variant='p' className={classes.salary}>Minimum Experience: </Typography>
                <Typography variant='p' className={classes.salary}>2 years</Typography>

            </Box>
            <Box>
                <Button variant="contained" className={classes.easyapply}>
                    ⚡Easy Apply
                </Button>

                <Button variant="contained" className={classes.referralask}>

                <img src={companyLogo} alt="" className={classes.referralimg}/>
                <img src={companyLogo} alt="" className={classes.referralimg}/>
                    
                    Unlock referral asks
                </Button>
            </Box>


        </CardContent>
    );
}
