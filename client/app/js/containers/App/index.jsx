import React from 'react';
import axios from 'axios';


axios.defaults.proxy = {
    host: '127.0.0.1',
    port: 3000,
    auth: {
        username: 'mikeymike',
        password: 'rapunz3l'
    }
};
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function


    componentWillMount()
    {
        axios.
    }


    render() {
        return (
            <div>
              App
            </div>
        );
    }
}

export default App;