import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class List extends React.Component {

render() {

    return (
        <div >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper >todo</Paper>
          </Grid>
        </Grid>
    
        </div>


        )

    }
}

export default List 