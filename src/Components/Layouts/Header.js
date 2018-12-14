import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Hidden } from '@material-ui/core';
import surface from './../../Images/surface.png';

const styles = {
  headerSurface: {
    padding: '16px',
  },
}

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Hidden only={['xs','sm']}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Row center="md" start="lg">
                <img className={classes.headerSurface} src={surface} alt="logo-header" />
              </Row>
            </Col>
          </Row>
        </Grid>
      </Hidden>
    );
  }
}

export default withStyles(styles)(Header);
