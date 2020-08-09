import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { SettingsPanel } from './SettingsPanel';
import { ChatWindow } from './ChatWindow';
import { NavigationBar } from './NavigationBar';

const PageRoutes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={ChatWindow}/>
            <Route exact path="/settings" component={SettingsPanel}/>
        </Switch>
    </HashRouter>
)

export const ChatContainer = () => {
    return (
        <div className="chat-web-container">
            <NavigationBar/>
            <PageRoutes/>
        </div>
    )
}
