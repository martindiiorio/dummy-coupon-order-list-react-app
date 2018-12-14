import React, { Component } from 'react';
import { Hidden, Typography, Button, CardContent, Collapse } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tune from '@material-ui/icons/Tune';
import ListItem from './ListItem';

const styles = theme => ({
  miBilletera_section: {
    height: 'calc(100vh - 222px)',
    overflowY: 'scroll',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
  miBilletera_sectionLeftMargin: {
    [theme.breakpoints.up('sm')]: {
      padding: '30px 5px',
    },
  },
  miBilletera_sectionRightMargin: {
    padding: '30px 5px',
    borderLeft: '1px solid #e1e1e3',
    borderRight: '1px solid #e1e1e3',
  },
  miBilletera_sectionHeader: {
    marginBottom: '15px',
  },
  miBilletera_sectionH3: {
    fontSize: '2.75em',
    color: 'rgba(0, 0, 0, 0.6)',
    [theme.breakpoints.down('sm')]: {
     fontSize: '1.5em',
     margin: '15px auto 0',
     fontWeight: '600',
    },
  },
  miBilletera_sectionTuneIcon: {
    color: 'rgba(0, 0, 0, 0.4)',
    marginLeft: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class Section extends Component {
    state = { expanded2: true };

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.miBilletera_section}>
        <Grid>
          <Row>
            <Col md={12} lg={5} className={classes.miBilletera_sectionLeftMargin}>
              <Hidden smDown>
                <Row middle="xs" className={classes.miBilletera_sectionHeader}>
                    <Typography
                      variant="h4"
                      className={classes.miBilletera_sectionH3}
                      children="Mi billetera"
                    />
                    <Button className={classes.miBilletera_sectionTuneIcon}>
                      <Tune fontSize="default"/>
                    </Button>
                </Row>
              </Hidden>
              <Hidden mdUp>
                <Row middle="xs" className={classes.miBilletera_sectionHeader}>
                    <Typography
                      variant="h4"
                      className={classes.miBilletera_sectionH3}
                      children="Mi billetera"
                    />
                </Row>
              </Hidden>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </Col>
            <Hidden smDown>
            <Col md={12} lg={7} className={classes.miBilletera_sectionRightMargin}>
              <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </CardContent>
              </Collapse>
            </Col>
            </Hidden>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default withStyles(styles)(Section);
