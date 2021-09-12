import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class TField extends React.Component {

    inputRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        if(this.inputRef.current.value === ""){
            return null
            
        }
        this.props.addToDoP(this.inputRef.current.value)
        e.currentTarget.reset();
        
    }


    render() {
        return (
            <div style={{ width: '100%' }}>

                <form onSubmit={this.handleSubmit} style={{ display: "flex", padding: '1em' }}>
                    <Input
                        placeholder="Todo"

                        
                        inputRef={this.inputRef}
                        style={{ width: "85%", }}
                        
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        
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