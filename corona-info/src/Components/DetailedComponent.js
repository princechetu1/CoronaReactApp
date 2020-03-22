
import React, {Component } from 'react';
import TableWithData from './TableWithData';

export default class DetailedComponent extends Component {
    render() {
        return (
            <div className='row detailedStyle'>
               <div className='col-6'>
                    {'World Details'}
                    <TableWithData />
               </div>
               <div className='col-6'>
                    {'India State wise Details'}
                    <TableWithData />
               </div>
            </div>
        )
    }
}
