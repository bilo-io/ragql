import React, { Component }  from 'react'

export default class Dashboard extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render() {
        const { match } = this.props
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}