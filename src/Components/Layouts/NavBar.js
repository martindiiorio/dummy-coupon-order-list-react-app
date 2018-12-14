import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Button, Hidden } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#9013fe' },
    secondary: { main: '#8cc03e' },
  },
  typography: {
    useNextVariants: true,
  },
});

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      buttonValue: ['Beneficios','Custom','Custom','Custom'],
    }
  }

  renderButtonValues() {
    return this.state.buttonValue.map(
      (value, index) => <Button key={index} color="inherit">{value}</Button>
    )
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Hidden only={['xs','sm']}>
          <AppBar position="static">
            <Toolbar>
              <Grid>
                <Row>
                  <Col md={12} lg={8}>
                    <Row center="md" start="lg">
                      {this.renderButtonValues()}
                      <Button color="inherit">
                        <Add fontSize="small"/> More
                      </Button>
                    </Row>
                  </Col>
                  <Col md={12} lg={4}>
                    <Row center='md' end="lg">
                      <Button color="inherit">Mi Billetera</Button>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            </Toolbar>
          </AppBar>
        </Hidden>
      </MuiThemeProvider>
    );
  }
}
