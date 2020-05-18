import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';
import { getArea } from '../../../actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectArea(props) {
  const [area, setArea] = useState([]);
  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { province, list } = await getArea();

    setProvince(province);
    setArea(list);
  }

  const handleChangeProvince = (event) => {
    const value = event.target.value;

    props.handleChangeProvince(event);

    setCity(area.filter(i => i.province === value && i.city));
  }

  return (
    <Fragment>
      <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Province</InputLabel>
          <Select
            labelId="area_province"
            id="area_province"
            label="Provinsi"
            onChange={handleChangeProvince}
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {province.map((row, index) => <MenuItem key={row.key + index} value={row.key}>{row.value}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>City</InputLabel>
          <Select
            labelId="area_city"
            id="area_city"
            label="City"
            onChange={props.handleChangeCity}
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {city.map((row, index) => <MenuItem key={row.city + index} value={row.city}>{row.city}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default SelectArea;
