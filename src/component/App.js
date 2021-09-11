import React from "react";
import Container from '@material-ui/core/Container';
import TField from './textField'
import List from './List'





class App extends React.Component {

    render() {

        

        return (
          <div>
            <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                <TField />
                <List />
            </Container>

          </div>
        );
 
    }


}

export default App;