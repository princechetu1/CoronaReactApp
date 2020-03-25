
import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import TableContent from './TableContent';
import {connect} from 'react-redux';
import {getCountriesDataAsync } from '../Actions/index';




class DetailedComponent extends Component {
  constructor(props){
      super(props);
      this.state ={
          isMobiledevice:(window.outerWidth < 450) ? true :false
      };
      
  }

     render() {
         let menuBar;
         if(this.state.isMobiledevice){
            menuBar = <ul className='col-12 shadow justify-content-center'>     
            <li className="col-lg-2 col-sm-12">
            <b>{'Total Cases : '}</b>
            <b style={{color:'Orange'}}>{this.props.countriesData.Total.TotalCases}</b>  
            <p><b>{this.props.countriesData.Total.Name}</b></p>
            </li>  
            <li className="col-lg-2 col-sm-12">
                <b>{'Total Cured : '}</b>
                 <b style={{color:'Green'}}>{this.props.countriesData.Total.TotalCured}</b>  
                    <p><b>{this.props.countriesData.Total.Name}</b></p>
            </li>  
            <li className="col-lg-2 sol-sm-12">
            <b>{'Total Deaths : '}</b> 
            <b style={{color:'Red'}}>{this.props.countriesData.Total.TotalDeath}</b>  
            <p><b>{this.props.countriesData.Total.Name}</b></p>
            </li>  
        </ul>
         } else {
             menuBar =  <ul className='col-12 shadow justify-content-center'>
             <li className="col-2 menusItem">
                 <Link to='/graph'> {'Overview'}  </Link>
             </li>
             <li className="col-1 menusItem">
                 <Link to='/world'> {'World'}  </Link>
             </li>
                         
             <li className="col-1 menusItem">
                 <Link to='/India'>
                         {'India'}
                 </Link>
             </li>     
             <li className="col-2 menusItem">
                 <Link to='/pdflinks'> {'Latest Article by Govt.'}  </Link>
             </li>  
             <li className="col-lg-2 col-sm-12">
             <b>{'Total Cases : '}</b>
             <b style={{color:'Orange'}}>{this.props.countriesData.Total.TotalCases}</b>  
             <p><b>{this.props.countriesData.Total.Name}</b></p>
             </li>  
             
             <li className="col-lg-2 col-sm-12">
                 <b>{'Total Cured : '}</b>
                  <b style={{color:'Green'}}>{this.props.countriesData.Total.TotalCured}</b>  
                     <p><b>{this.props.countriesData.Total.Name}</b></p>
             </li>  
             
             <li className="col-lg-2 sol-sm-12">
             <b>{'Total Deaths : '}</b> 
             <b style={{color:'Red'}}>{this.props.countriesData.Total.TotalDeath}</b>  
             <p><b>{this.props.countriesData.Total.Name}</b></p>
             </li>  
                 </ul>
         }
        return (
            <div className='row detailedStyle '>
               {menuBar}
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
