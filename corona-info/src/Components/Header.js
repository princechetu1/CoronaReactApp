
import React, {Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className='headerStyle'>
                <h2>{'Corona Virus Details '}</h2>
                <h5 className='row'>
                    <div className='col-6'>
                        {'Helpline Number Toll free: 1075, +91-11-23978046'}
                    </div>
                    <div className='col-6' style={{textAlign:'end'}}>
                        {'Helpline Email ID :  ncov2019.gov.in OR ncov2019.gmail.com'}
                    </div>
                </h5>
            </div>
        )
    }
}
