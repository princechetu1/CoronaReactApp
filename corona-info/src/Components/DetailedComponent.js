
import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import TableContent from './TableContent';
import {connect} from 'react-redux';
import {getCountriesDataAsync } from '../Actions/index';




class DetailedComponent extends Component {
  constructor(props){
      super(props);
  }
     render() {
        return (
            <div className='row detailedStyle'>

<div className='col-12 '>
                <ul>
                <li className="list-group-item">
                        <Link to='/graph'> {'Overview'}  </Link>
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
                        <Link to='/pdflinks'> {'Latest Article by Govt.'}  </Link>
                    </li>  
                    <li className="list-group-item">
                    <b>{'Total Cases : '}</b>
                    <b style={{color:'Orange'}}>{this.props.countriesData.Total.TotalCases}</b>  
                    <p><b>{this.props.countriesData.Total.Name}</b></p>
                    </li>  
                    
                    <li className="list-group-item">
                        <b>{'Total Cured : '}</b>
                         <b style={{color:'Green'}}>{this.props.countriesData.Total.TotalCured}</b>  
                            <p><b>{this.props.countriesData.Total.Name}</b></p>
                    </li>  
                    
                    <li className="list-group-item">
                    <b>{'Total Deaths : '}</b> 
                    <b style={{color:'Red'}}>{this.props.countriesData.Total.TotalDeath}</b>  
                    <p><b>{this.props.countriesData.Total.Name}</b></p>
                    </li>  
                        </ul>
                </div>
                <div className='col-12 detailsBlock shadow p-3 mb-5 bg-white rounded'>
                    <TableContent />
                </div>
                   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
});

const mapDispatchToProps = {
    getCountriesDataAsync: getCountriesDataAsync
};


export default connect(mapStateToProps,mapDispatchToProps)(DetailedComponent)
