import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TableWithWorldData from './TableWithWorldData';
import TableWithIndiaData from './TableWithIndiaData';
import PDFDetailView from './PDFDetailView';
import OverViewPage from './OverViewPage';


export default class TableContent extends Component {
    render() {
        return (
                    <Switch>
                        <Route path='/graph' component={OverViewPage} />
                        <Route path='/world' component={TableWithWorldData} />
                        <Route path='/India' component={TableWithIndiaData} />
                        <Route path='/pdflinks' component={PDFDetailView} />
                        <Redirect exact={true} from='/' to='/world' />
                    </Switch>
        )
    }
}