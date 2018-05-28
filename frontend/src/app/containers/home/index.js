import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql `{
    rates(currency: "USD") {
      currency
    }
  }
`
export default class Home extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render() {
        const { match } = this.props
        return (
            <div>
                <h1>Home</h1>
                <Query query={query}>
                    {({ loading, error, data }) => (
                        error
                            ? <Error />
                            : loading && !data
                                ? <Loading />
                                : data
                                    ? (data.rates || []).map(({ currency, rate }) => (
                                        <div key={currency}>
                                            <p>{`${currency}: ${rate}`}</p>
                                        </div>
                                    ))
                                    : null
                    )}
                </Query>
            </div>
        )
    }
}