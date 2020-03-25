
import React, {Component } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { connect } from 'react-redux';
import { getCountriesDataAsync } from  '../Actions/index';

const Countriescolumns = [
    {
      name: 'Country',
      selector: 'country',
      sortable: true,
      style: {
        fontStyle:'Bold',
        color:'Black',
        fontSize:24
  
      },
    },
    {
      name: 'Cases',
      selector: 'cases',
      sortable: true,
      center: true,
      style: {
        fontStyle:'Bold',
        color:'Orange',
        fontSize:24
  
      },
    
    },
    {
        name: 'TodayCases',
        selector: 'todayCases',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'Orange',
          fontSize:24
    
        },
      
      },
      {
        name: 'Deaths',
        selector: 'deaths',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'Red',
          fontSize:24
    
        },
      
      },
      {
        name: 'TodayDeaths',
        selector: 'todayDeaths',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'Red',
          fontSize:24
    
        },
      
      },
      {
        name: 'Recovered',
        selector: 'recovered',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'DarkGreen',
          fontSize:24
    
        },
      
      },
      {
        name: 'Active',
        selector: 'active',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'Orange',
          fontSize:24
    
        },
      
      },
      {
        name: 'Critical',
        selector: 'critical',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'red',
          fontSize:24
    
        },
      
      },
      {
        name: 'CasesPerOneMillion',
        selector: 'casesPerOneMillion',
        sortable: true,
        center: true,
        style: {
          fontStyle:'Bold',
          color:'red',
          fontSize:24
    
        },
      
      }

  ];

const customStyles = {
    rows: {
      style: {
        minHeight: '30px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize:24
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

class TableWithWorldData extends Component {
    componentWillMount(){
        this.props.getCountriesDataAsync();
    }
    render() {
        return (
            <div>
                 <DataTable
                    columns={Countriescolumns}
                    data={this.props.countriesData.data}
                    title={'World Details'}
                    responsive='true'
                    pagination
                    paginationPerPage="7"
                    customStyles={customStyles}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
    })

const mapDispatchToProps = {
    getCountriesDataAsync: getCountriesDataAsync
};

export default connect(mapStateToProps,mapDispatchToProps)(TableWithWorldData)

