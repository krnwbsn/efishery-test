import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DataTable } from "../../components/elements";
import { getData } from '../../actions';
import { Grid, Button, LinearProgress } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

function Home({ dispatch, data }) {
  const [state, setState] = useState({
    error: null,
    isLoading: true
  });

  useEffect(() => {
    getData()
      .then(value => setState({ dispatch, isLoading: false }))
      .catch(error => setState({ error: error.toString(), isLoading: false }));
  }, [dispatch]);

  const useStyles = makeStyles({
    display: {
      display: 'flex'
    }
  })

  const classes = useStyles();

  const { isLoading } = state;

  return (
    <Grid>
      {isLoading ? <LinearProgress color="primary" /> : ''}
      <Grid xs={12} className={classes.display}>
        <h1>eFishery</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
        >Tambah Data</Button>
      </Grid>
      <Grid key={data.index}>
        <DataTable post={data} key={data.id} />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Home);
