/**
 *
 * Apps
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { apps } from 'utils/constants';
import { Link } from 'react-router';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Slide from 'material-ui/transitions/Slide';
import Tooltip from 'material-ui/Tooltip';
import {
  MdChevronRight,
} from 'react-icons/lib/md';

import { getAppIcon } from 'utils/functions';

const styles = () => ({
  AppWrapper: {
    maxWidth: 'calc(1200px + 16px * 2)',
    margin: '20 auto',
    marginTop: '40px',
    display: 'flex',
    minHeight: '100%',
    padding: '0 0px',
    flexDirection: 'column',
    textDecoration: 'none',
    position: 'block',
  },
  appHint: {
    fontSize: 12,
    textAlign: 'left',
  },
  appPaper: {
    padding: 10,
    paddingTop: 5,
    minWidth: 280,
    maxWidth: 300,
    textAlign: 'left',
    backgroundColor: '#eeeeee',
    cornerRadius: 40,
  },
});

class Apps extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.classes.AppWrapper} >

        <Slide
          in
          mountOnEnter
          unmountOnExit
          direction="left"
        >
          <div>
            <Grid container justify="center">
              {apps.map((app, i) => (
                <Grid item key={`griditem_${i}`}>
                  <Link
                    to={app.route}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Paper
                      className={this.props.classes.appPaper}
                      elevation={0}
                    >
                      <Tooltip title={app.tooltip} placement="top">
                        <h3>
                          {getAppIcon(app.title)}
                          {'\u00A0'}{app.title}</h3>
                      </Tooltip>
                      <div className={this.props.classes.appHint}>{app.tooltip} <MdChevronRight /></div>
                    </Paper>
                  </Link>
                </Grid>
              )) }
            </Grid>
          </div>
        </Slide>
      </div>
    );
  }
}

Apps.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles, { withTheme: true })(Apps);
