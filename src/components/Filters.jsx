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
        flexWrap: 'wrap'
    },
}));

const Filters = ({ handleFilter }) => {
    const classes = useStyles();
    const [filters, setFilters] = useState({
        minExperience: '',
        companyName: '',
        location: '',
        remote: '',
        techStack: '',
        role: '',
        minBasePay: '',
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            handleFilter(filters);
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

            {/* min experience filter */}
            <Select style={{border: '1px solid lightgray',borderRadius: '5px', padding: '0.7rem'}}
                name="minExperience"
                value={filters.minExperience}
                onChange={handleChange}
                displayEmpty
            >
                <MenuItem value="">Min Experience</MenuItem>
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>

            </Select>

            {/* remote filter */}
            <Select style={{border: '1px solid lightgray',borderRadius: '5px', padding: '0.7rem'}}
                name="remote"
                value={filters.remote}
                onChange={handleChange}
                displayEmpty
            >
                <MenuItem value="">Location mode</MenuItem>
                <MenuItem value="onsite">On Site</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
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
            
            {/* min pay */}
            <TextField
            name="minBasePay"
            label="Min Base Pay"
            variant="outlined"
            value={filters.minBasePay}
            onChange={handleChange}
        />
            {/* Other select dropdowns for each filter */}
        </div>
    );
};

export default Filters;
