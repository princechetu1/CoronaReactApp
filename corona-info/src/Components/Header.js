
import React, {Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.mySidenav = React.createRef();
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
    }

    

  closeNav(){
    this.mySidenav.current.style.display = "none";    
  }

  openNav(){
    this.mySidenav.current.style.display = "block";
  }
    
    render() {
        let menuBar = <ul className="sidenav" ref={this.mySidenav}>
                    <li onClick={this.closeNav}  className="closebtn">x</li>
                    <li className="col-12">
                        <Link to='/graph'> {'Overview'}  </Link>
                    </li>
                    <li className="col-12">
                        <Link to='/world'> {'World'}  </Link>
                    </li>
                                
                    <li className="col-12">
                        <Link to='/India'>
                                {'India'}
                        </Link>
                    </li>     
                    <li className="col-12">
                        <Link to='/pdflinks'> {'Latest Article by Govt.'}  </Link>
                    </li> 
                </ul>
        return (
            <div className='headerStyle shadow-lg p-3 mb-2 bg-white rounded'>
                {menuBar}
                <a className='menuIcon' onClick={this.openNav}>☰</a>
                <h2>{'Corona Virus(COVID-19) Details '}</h2>
                <h5 className='row'>
                    <div className='col-6'>
                        <b>{'Helpline Number Toll free: 1075, +91-11-23978046'}</b>
                    </div>
                    <div className='col-6' style={{textAlign:'end'}}>
                        <b>{'Helpline Email ID :  ncov2019.gov.in OR ncov2019.gmail.com'}</b>
                    </div>
                </h5>
            </div>
        )
    }
}
