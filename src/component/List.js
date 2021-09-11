import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class List extends React.Component {

    render() {

        return (
            <div style={{ width: '95%' }}>
                <Box display="flex" p={1} height="3em">
                    <Box p={1} flexGrow={1} >
                        <Paper elevation={3} style={{ height: '2em'}}> <span style={{ lineHeight:'30px' , textAlign:'center', margin:'1em'}} >todo</span> </Paper>
                    </Box>
                    <Box  >
                        <IconButton  >
                            <DeleteIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box display="flex" p={1} height="3em">
                    <Box p={1} flexGrow={1} >
                        <Paper elevation={3} style={{ height: '2em'}}> <span style={{ lineHeight:'30px' , textAlign:'center', margin:'1em'}} >todo</span> </Paper>
                    </Box>
                    <Box >
                        <IconButton   >
                            <DeleteIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box display="flex" p={1} height="3em">
                    <Box p={1} flexGrow={1} >
                        <Paper elevation={3} style={{ height: '2em'}}> <span style={{ lineHeight:'30px' , textAlign:'center', margin:'1em'}} >todo</span> </Paper>
                    </Box>
                    <Box >
                        <IconButton   >
                            <DeleteIcon />
                        </IconButton>
                    </Box>

                </Box>

            </div>





        )

    }
}

export default List