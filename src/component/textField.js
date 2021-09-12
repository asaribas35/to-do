import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class TField extends React.Component {

    inputRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDoP(this.inputRef.current.value)
        
    }


    render() {
        return (
            <div style={{ width: '100%' }}>

                <form onSubmit={this.handleSubmit} style={{ display: "flex", padding: '1em' }}>
                    <Input
                        placeholder="Todo"
                        inputProps={{
                            "aria-label": "Description"
                        }}
                        
                        inputRef={this.inputRef}
                        style={{ width: "85%" }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ width: "10%" }}
                    >
                        Add
                    </Button>


                </form>

            </div>
        )

    }


}

export default TField;