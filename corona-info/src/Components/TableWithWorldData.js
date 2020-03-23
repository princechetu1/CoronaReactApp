
import React, {Component } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { connect } from 'react-redux';
import { getCountriesDataAsync } from  '../Actions/index';

const Countriescolumns = [
    {
      name: 'Country',
      selector: 'country',
      sortable: true,
    },
    {
      name: 'Cases',
      selector: 'cases',
      sortable: true,
      right: true,
    
    },
    {
        name: 'TodayCases',
        selector: 'todayCases',
        sortable: true,
        right: true,
      
      },
      {
        name: 'Deaths',
        selector: 'deaths',
        sortable: true,
        right: true,
      
      },
      {
        name: 'TodayDeaths',
        selector: 'todayDeaths',
        sortable: true,
        right: true,
      
      },
      {
        name: 'Recovered',
        selector: 'recovered',
        sortable: true,
        right: true,
      
      },
      {
        name: 'Active',
        selector: 'active',
        sortable: true,
        right: true,
      
      },
      {
        name: 'Critical',
        selector: 'critical',
        sortable: true,
        right: true,
      
      },
      {
        name: 'CasesPerOneMillion',
        selector: 'casesPerOneMillion',
        sortable: true,
        right: true,
      
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

