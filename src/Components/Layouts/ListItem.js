import  React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Card, CardHeader, Typography, CardContent } from '@material-ui/core/';
import { CardActions, Collapse, Avatar, IconButton } from '@material-ui/core/';
import { Hidden } from '@material-ui/core/';
import { Timer, ExpandMore, Add } from '@material-ui/icons/';

const styles = theme => ({
  card: {
    boxShadow: 'none',
  },
  cardsPadding: {
    padding: '5px 10px',
  },
  cardsContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    color: 'rgba(0, 0, 0, .4)',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
  },
  timeIcon: {
    color: '#8cc03e',
    padding: '0 10px',
  },
  date: {
    color: 'rgba(0, 0, 0, .4)',
    fontWeight: '600',
  },
  expiration: {
    color: '#8cc03e',
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
  avatar: {
    borderRadius: 'inherit',
    marginRight: '15px',
  },
});

class ListItem extends React.Component {
  state = {
    expanded: false,
  };

  handleExpandClickMobile = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="0%"
          subheader="Card Title | 2 lineas como máximo..."
          className={classes.cardsPadding}
        />
        <CardContent className={classes.cardsContent}>
          <Avatar alt="Place Holder" src="https://via.placeholder.com/30" className={classes.avatar} />
          <Typography
            children="NOMBRE PARTNER"
            component="p"
            color='inherit'
          />
          </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography children="Ayer" component="p" className={classes.date} />
          <Timer className={classes.timeIcon}/>
          <Typography
            children="Próximo a vencer"
            component="p"
            className={classes.expiration}
          />
          <Hidden only={['md','lg']}>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClickMobile}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMore />
            </IconButton>
          </Hidden>
          <Hidden only={['xs','sm']}>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClickDesktop}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <Add />
            </IconButton>
          </Hidden>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ListItem);
