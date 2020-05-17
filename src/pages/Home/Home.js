import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  DataTable,
  TopBar
} from "../../components/elements";
import { getData } from '../../actions';
import {
  Grid,
  LinearProgress
} from '@material-ui/core';
import {
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
            <DataTable post={data} key={data.index} />
          </Grid>}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Home);
