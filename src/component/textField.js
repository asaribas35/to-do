import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class TField extends React.Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} >
                    <Box p={1} flexGrow={1} >
                        <TextField 
                            id="standard-full-width"
                            label="Todo"
                            style={{ margin: 8 }}
                            
                            
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box p={1} >
                        <Button size="large" variant="contained" color="primary" >
                            Save
                        </Button>
                    </Box>

                </Box>


            </div>
        )

    }


}

export default TField;