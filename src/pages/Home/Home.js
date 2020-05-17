import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import {
  DataTable,
  TopBar
} from "../../components/elements";
import { FormEdit } from "../../components/form";
import { getData } from '../../actions';
import {
  Grid,
  LinearProgress
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {
  makeStyles,
  withStyles
} from '@material-ui/core/styles';

function Home({ dispatch, data }) {
  useEffect(() => {
    getData({ dispatch })
  }, [dispatch]);

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: 'rgb(91, 181, 154)',
    },
  })(LinearProgress);

  return (
    <Fragment>
      <TopBar />
      {data.length === 0
        ? <ColorLinearProgress />
        : <Grid key={data.index}>
          {data.editing
            ? <FormEdit post={data} key={data.index} />
            : <DataTable post={data} key={data.index} />}
        </Grid>}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Home);
