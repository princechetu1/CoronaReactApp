import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TableWithWorldData from './TableWithWorldData';
import TableWithIndiaData from './TableWithIndiaData';
import PDFDetailView from './PDFDetailView';


export default class TableContent extends Component {
    render() {
        return (
                    <Switch>
                        <Route path='/world' component={TableWithWorldData} />
                        <Route path='/India' component={TableWithIndiaData} />
                        <Route path='/pdflinks' component={PDFDetailView} />
                        <Redirect exact={true} from='/' to='/world' />
                    </Switch>
        )
    }
}