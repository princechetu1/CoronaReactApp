
import React, {Component } from 'react';
import ChartViewForIndiaData from './ChartViewForIndiaData';
import ChartViewForWorldData from './ChartViewForWorldData';

export default class OverViewPage extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-6'>
                    <ChartViewForWorldData />
                </div>
                <div className='col-6'>
                    <ChartViewForIndiaData />
                </div>
            </div>
        )
    }
}
