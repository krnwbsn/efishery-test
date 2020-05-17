import React from 'react';
import ModalView from '../ModalView';
import {
  makeStyles,
  withStyles
} from '@material-ui/core/styles';
import {
  Grid,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  display: {
    display: 'flex'
  },
  title: {
    color: 'rgb(24, 51, 88)',
    margin: '20px'
  },
  button: {
    border: '1px solid rgb(24, 51, 88)',
    height: '35%',
    textTransform: 'none',
    textAlign: 'right',
  },
  rightObject: {
    marginRight: '10px',
    marginLeft: 'auto'
  }
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgb(24, 51, 88)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(24, 51, 88)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(24, 51, 88)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(24, 51, 88)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(24, 51, 88)',
      },
    },
    marginTop: '20px',
    width: '120px'
  },
})(TextField);

const TopBar = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.display}>
      <h1 className={classes.title}>eFishery</h1>
      <Grid className={classes.rightObject}>
        <CssTextField
          label="Cari Komoditas"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
        <ModalView />
      </Grid>
    </Grid>
  )
}

export default TopBar;