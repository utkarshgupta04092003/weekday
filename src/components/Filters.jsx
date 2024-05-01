import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Filters = ({ onFilter }) => {
    const classes = useStyles();
    const [filters, setFilters] = useState({
        minExperience: '',
        companyName: '',
        location: '',
        remote: 'remote',
        techStack: '',
        role: '',
        minBasePay: '',
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            onFilter(filters);
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [filters]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className={classes.root}>

            {/* experience filter */}
            <Select style={{border: '1px solid lightgray',borderRadius: '5px', padding: '0.7rem'}}
                name="minExperience"
                value={filters.minExperience}
                onChange={handleChange}
                displayEmpty
            >
                <MenuItem value="">Min Experience</MenuItem>
                <MenuItem value="0-1">0-1 years</MenuItem>
                <MenuItem value="1-3">1-3 years</MenuItem>
                <MenuItem value="3-5">3-5 years</MenuItem>
                <MenuItem value="5+">5+ years</MenuItem>
            </Select>

            {/* remote filter */}
            <Select style={{border: '1px solid lightgray',borderRadius: '5px', padding: '0.7rem'}}
                name="remote"
                value={filters.remote}
                onChange={handleChange}
                displayEmpty
            >
                <MenuItem value="remote">Remote</MenuItem>
                <MenuItem value="onsite">on-site</MenuItem>
            </Select>

            {/* job role */}
            <TextField
                name="role"
                label="Job Role"
                variant="outlined"
                value={filters.role}
                onChange={handleChange}
            />


            {/* location */}
            <TextField
                name="location"
                label="Location"
                variant="outlined"
                value={filters.location}
                onChange={handleChange}
            />

            {/* company name */}
            <TextField
                name="companyName"
                label="Company Name"
                variant="outlined"
                value={filters.companyName}
                onChange={handleChange}
            />
            {/* Other select dropdowns for each filter */}
        </div>
    );
};

export default Filters;
