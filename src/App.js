import React, { Component, useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import './App.css';
import Conditional from "./components/Conditional"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  navItem: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "35px",
    fontFamily: "Yellowtail, cursive",
    '&:hover': {
      cursor: "pointer",
    }
  },
  about: {
    color: "#FFF"
  }
});

function App(props) {
  const { classes } = props

  const [tab, setTab] = useState("Home");

  return (
    <div className="App">
      <Grid container spacing={40}>
        <Grid item xs={12} md={4}>
          <Grid container jusitfy="center">
            <Grid item xs={12}>
              <img src="/img/logo-png.png" width="100%" />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.navItem} onClick={e => setTab("Home")}>Home</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.navItem} onClick={e => setTab("About")}>About</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.navItem}>Contact</Typography>
            </Grid>
            {/* <Conditional page={tab}/> */}
            {tab === "About" &&
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.about}>
                  Get It Done Management Records (G.I.D.M.R), established in 2013, is a new music and entertainment powerhouse monster - without the procrastination. The lab​el is dedicated to providing an environment that allows creativity to flow.  G.I.D.M.R is comprised of recording artists from various genres collaborating with writers, musicians,composers, and producers to create a unique sound and brand. G.I.D.M.R. is a family-oriented business you can call home. A recording artists will reap the benefits of their hard work.G.I.D.M.R has the ability to create fantastic music at will, for any occasion at any time. We also distribute this music any where in the world. So if you're looking for a home, hang your hat right here with us at Get It Done Management Records
              </Typography>
              </Grid>
            }
            <Grid item xs={12}>
              <div className="fb-page" data-href="https://www.facebook.com/Get-It-Done-Management-Records-LLC-215688518771898/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Get-It-Done-Management-Records-LLC-215688518771898/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Get-It-Done-Management-Records-LLC-215688518771898/">Get It Done Management Records LLC</a></blockquote></div>
            </Grid>


          </Grid>
        </Grid>


        <Grid item xs={12} md={8}>
          <Grid container alignItems="center">

            <Grid item xs={2}>
              <hr />
            </Grid>
            <Grid item xs={4} md={2}>
              <p className="header">Music</p>
            </Grid>
            <Grid item xs={6} md={8}>
              <hr />
            </Grid>
            <Grid item xs={12}>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gIL6qstirk0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/59bhfUkEF5s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KpRE_GxviTo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
