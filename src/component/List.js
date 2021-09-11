import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class List extends React.Component {

    render() {

        return (
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} >
                    <Box p={1} flexGrow={1} >
                        <Paper elevation={3} style={{ height: '2em', margin: '1.2em'}}> <span style={{ lineHeight:'30px' , textAlign:'center', margin:'1em'}} >todo</span> </Paper>
                    </Box>
                    <Box p={1} >
                        <IconButton style={{ margin: '0.5em', marginLeft: '-1em' }}  >
                            <DeleteIcon />
                        </IconButton>
                    </Box>

                </Box>


            </div>





        )

    }
}

export default List