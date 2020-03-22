
import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import TableContent from './TableContent';
import 'bootstrap/dist/css/bootstrap.css';





export default class DetailedComponent extends Component {
  
     render() {
        return (
            <div className='row detailedStyle'>

<div className='col-12'>
                <ul>
                <Link to='/world'>
                                    <li className="list-group-item">
                                        {'World'}
                                    </li>
                                </Link>
                                <Link to='/India'>
                                    <li className="list-group-item">
                                        {'India'}
                                    </li>
                                </Link>
                        </ul>
                </div>
                <div className='col-12'>
                    <TableContent />
                </div>
                   
            </div>
        )
    }
}
