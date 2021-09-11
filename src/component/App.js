import React from "react";
import Container from '@material-ui/core/Container';
import TField from './textField'
import List from './List'






class App extends React.Component {

    state = {
        list : [
            {
                "id": 1,
                "text": "go market"
            },
            {
                "id": 2,
                "text": "go school"
            }
            ]
    }

    deleteToDo = (todo) => {
        const newList = this.state.list.filter(
            t => t.id !==todo.id
        );
        this.setState({
            list: newList
        })
    }

    render() {

        

        return (
          <div>
            <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                <TField />
                <List 
                todos={this.state.list}
                deleteToDoP={this.deleteToDo}
                />
            </Container>

          </div>
        );
 
    }


}

export default App;