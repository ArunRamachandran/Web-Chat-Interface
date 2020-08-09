import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { ChatContainer } from './components/ChatContainer';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ChatContainer/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));