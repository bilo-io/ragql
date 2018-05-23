import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../app.scss'

const client = new ApolloClient({uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"})
const query = gql `{
    rates(currency: "USD") {
      currency
    }
  }
`

export default class App extends React.Component {
    componentDidMount() {
        client.query({ query }).then(result => console.log('GQL result:', result))
    }
    render() {
        return <ApolloProvider client={client}>
            <div><h1>React + Apollo + GraphQL</h1></div>
            <Query query={query}>
                {({ loading, error, data }) => (
                    error
                        ? <Error />
                        : loading && !data
                            ? <Loading />
                            : data
                                ? (data.rates ||[]).map(({ currency, rate }) => (
                                    <div key={currency}>
                                        <p>{`${currency}: ${rate}`}</p>
                                    </div>    
                                ))
                                : null    
                )}
            </Query>    
        </ApolloProvider>
    }
}

const Error = () => (
    <div style={{color: 'red'}}>ERROR</div>
)

const Loading = () => (
    <div style={{color: '#00adee'}}>...loading...</div>
)