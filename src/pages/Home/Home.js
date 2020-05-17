import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DataTable } from "../../components/elements";
import { getData } from '../../actions';
import { Grid, Button, LinearProgress } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Home({ dispatch, data }) {
  useEffect(() => {
    getData({ dispatch })
    console.log(data);
  }, [dispatch]);

  const useStyles = makeStyles({
    display: {
      display: 'flex'
    },
    title: {
      color: 'rgb(24, 51, 88)',
      margin: '20px'
    },
    button: {
      border: '1px solid rgb(24, 51, 88)',
      height: '50%',
      textTransform: 'none',
      textAlign: 'right',
      margin: '20px',
      marginLeft: 'auto'
    }
  });

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: 'rgb(91, 181, 154)',
    },
  })(LinearProgress);

  const classes = useStyles();

  return (
    <Grid>
      <Grid item xs={12} className={classes.display}>
        <h1 className={classes.title}>eFishery</h1>
        <Button
          className={classes.button}
          startIcon={<Add />}
        >Tambah Data</Button>
      </Grid>
      {data.length === 0
        ? <ColorLinearProgress />
        : <Grid key={data.index}>
          <DataTable post={data} key={data.id} />
        </Grid>}
    </Grid>
  );
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Home);
