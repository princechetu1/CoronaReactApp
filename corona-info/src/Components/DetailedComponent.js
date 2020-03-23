
import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import TableContent from './TableContent';






export default class DetailedComponent extends Component {
  
     render() {
        return (
            <div className='row detailedStyle'>

<div className='col-12 '>
                <ul>
                <li className="list-group-item">
                        <Link to='/graph'> {'OverView'}  </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/world'> {'World'}  </Link>
                    </li>
                                
                    <li className="list-group-item">
                        <Link to='/India'>
                                {'India'}
                        </Link>
                    </li>     
                    <li className="list-group-item">
                        <Link to='/pdflinks'> {'New PDF by Govt.'}  </Link>
                    </li>  
                        </ul>
                </div>
                <div className='col-12 detailsBlock'>
                    <TableContent />
                </div>
                   
            </div>
        )
    }
}
