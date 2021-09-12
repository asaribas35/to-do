import React from "react";
import Container from '@material-ui/core/Container';
import TField from './textField'
import List from './List'
import uniqueId from 'lodash/uniqueId';





class App extends React.Component {

    state = {
        list : [

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

    addToDo = (todo) => {

        let x =  uniqueId("a-")
        const newElement = {
            "id": x,
            "text": todo
        }
        console.log(newElement)

        this.setState({
            list: [...this.state.list, newElement]
          })

    }

    render() {

        

        return (
          <div>
            <Container maxWidth="sm" style={{ backgroundColor: '#F1F1F1', height: '100vh' }}>
                <TField 
                addToDoP={this.addToDo}
                />
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