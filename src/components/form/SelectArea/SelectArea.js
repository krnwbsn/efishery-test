import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select 
} from '@material-ui/core';
import { getArea } from '../../../actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectArea({ dispatch, area }) {
  useEffect(() => {
    getArea({ dispatch })
  }, [dispatch]);

  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Province</InputLabel>
      <Select
        labelId="area_province"
        id="area_province"
        label="Provinsi"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {area.map((row, index) => {
          // return <MenuItem value={index}>{row.province} - {row.city}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}

const mapStateToProps = state => ({
  area: state
});

export default connect(mapStateToProps)(SelectArea);
