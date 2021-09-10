import React from 'react' ;
import  ReactDOM  from 'react-dom';
import Container from '@material-ui/core/Container';
import TField from './component/textField'


class App extends React.Component {

    render() {
        return (
          <div>
            <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                <TField />
                

            </Container>

          </div>
        );
 
    }


}

ReactDOM.render(

    <App />,
    document.getElementById('root')

)
