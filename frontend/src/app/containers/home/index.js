import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
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