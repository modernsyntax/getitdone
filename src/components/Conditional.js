import React, { Component, useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
});

function Conditional(props) {

    if (props.page === "Home") {
        return (
            <Grid item xs={12}>
                <div className="fb-page" data-href="https://www.facebook.com/Get-It-Done-Management-Records-LLC-215688518771898/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Get-It-Done-Management-Records-LLC-215688518771898/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Get-It-Done-Management-Records-LLC-215688518771898/">Get It Done Management Records LLC</a></blockquote></div>
            </Grid>
        )
    } else if(props.page === "About") {
        return (
            <Grid item xs={12}>
                <Typography variant="body1" color="primary">
                    Get It Done Management Records (G.I.D.M.R), established in 2013, is a new music and entertainment powerhouse monster - without the procrastination. The lab​el is dedicated to providing an environment that allows creativity to flow.  G.I.D.M.R is comprised of recording artists from various genres collaborating with writers, musicians,composers, and producers to create a unique sound and brand. G.I.D.M.R. is a family-oriented business you can call home. A recording artists will reap the benefits of their hard work.G.I.D.M.R has the ability to create fantastic music at will, for any occasion at any time. We also distribute this music any where in the world. So if you're looking for a home, hang your hat right here with us at Get It Done Management Records
              </Typography>
            </Grid>
        )
    }
}

export default withStyles(styles)(Conditional);