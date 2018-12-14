import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button, Hidden, CardMedia } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import logoBonda from './../../Images/logo-bonda.png'
import { Home, AccountBalanceWallet, AccountCircle, MoreHoriz } from '@material-ui/icons/';

const styles = {
  footer: {
    width: `100%`,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#eef1f2',
    minHeight: '60px',
  },
  footerlogo: {
    padding: '19px 16px',
    width: '119px',
  },
  footerButtons: {
    color: '#979797',
    textTransform: 'capitalize',
  },
  BottomNavigation: {
    width: `100%`,
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#9013fe'
  },
};

class Footer extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Hidden only={['xs','sm']}>
          <footer className={classes.footer}>
            <Grid>
              <Row middle="xs">
                <Col md={12} lg={4}>
                  <Row center="md" start="lg">
                    <CardMedia
                      component="img"
                      alt="Logo Bonda"
                      src={logoBonda}
                      className={classes.footerlogo}
                    />
                  </Row>
                </Col>
                <Col md={12} lg={8}>
                  <Row center='md' end="lg">
                    <Button className={classes.footerButtons}>Link 1</Button>
                    <Button className={classes.footerButtons}>Link 2</Button>
                    <Button className={classes.footerButtons}>Link 3</Button>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </footer>
        </Hidden>
        <Hidden only={['md','lg', 'xl']}>
          <BottomNavigation
            value={value}
            showLabels
            onChange={this.handleChange}
            className={classes.BottomNavigation}
          >
            <BottomNavigationAction style={{color: 'rgba(255,255,255, 0.7)'}} label="Home" icon={<Home />} />
            <BottomNavigationAction style={{color: 'rgba(255,255,255, 0.7)'}} label="Mi Billetera" icon={<AccountBalanceWallet />} />
            <BottomNavigationAction style={{color: 'rgba(255,255,255, 0.7)'}} label="Cuenta" icon={<AccountCircle />} />
            <BottomNavigationAction style={{color: 'rgba(255,255,255, 0.7)'}} label="Más" icon={<MoreHoriz />} />
          </BottomNavigation>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
