import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TableWithWorldData from './TableWithWorldData';
import TableWithIndiaData from './TableWithIndiaData';



export default class TableContent extends Component {
    render() {
        return (
                    <Switch>
                        <Route path='/world' render={(props) => <TableWithWorldData {...props} />} />
                        <Route path='/India' render={(props) => <TableWithIndiaData {...props} />} />
                        <Redirect exact={true} from='/' to='/world' />
                    </Switch>
        )
    }
}