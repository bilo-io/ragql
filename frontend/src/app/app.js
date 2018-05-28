import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import Dashboard from './containers/dashboard'
import Home from './containers/home'
import gql from 'graphql-tag'
import '../app.scss'

const client = new ApolloClient({ uri: "https://w5xlvm3vzz.lp.gql.zone/graphql" })

export default class App extends React.Component {
    componentDidMount() {
        // client.query({ query }).then(result => console.log('GQL result:', result))
    }
    render() {
        return <ApolloProvider client={client}>
            <Router>
                <div className={`app-header`}>
                    <h1>React _ Apollo _ GraphQL</h1>
                    <div className='right-links'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </div>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            component={() => <Home custom={ 'some custom prop'}/>}
                        />
                        <Route
                            path={'/dashboard'}
                            component={() => <Dashboard custom={ 'some custom prop'}/>}
                        />
                        <Route
                            path={'/dashboard/:id'}
                            component={() => <Dashboard custom={ 'some custom prop'}/>}
                        />
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    }
}

const Error = () => (
    <div style={{ color: 'red' }}>ERROR</div>
)

const Loading = () => (
    <div style={{ color: '#00adee' }}>...loading...</div>
)