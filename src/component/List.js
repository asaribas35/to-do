import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class List extends React.Component {


 
    render() {


        return (
            <div style={{ width: '95%' }}>

                {this.props.todos.map((todo) => (
                    <Box display="flex" p={1} height="2em" key={todo.id} >
                        <Box p={1} flexGrow={1} >
                            <Paper elevation={1} style={{ height: '2.2em' }}> <span style={{ lineHeight: '2em', textAlign: 'center', margin: '1em' }} > {todo.text} </span> </Paper>
                        </Box>
                        <Box  >
                            <IconButton onClick={(e) => this.props.deleteToDoP(todo)} >
                                <DeleteIcon />
                            </IconButton>
                        </Box>

                    </Box>
                ))}







            </div>





        )

    }
}

export default List