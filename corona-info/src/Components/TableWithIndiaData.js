
import React, {Component } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { connect } from 'react-redux';
import { getInidaDataAsync } from  '../Actions/index';

const Statecolumns = [
  {
    name: 'State Name',
    selector: 'State_Name',
    sortable: true,
  },
  {
    name: 'Total Confirmed cases(Indian National)',
    selector: 'Total_Confirmed_cases_Indian_National',
    sortable: true,
    right: true,
  },
  {
    name: 'Total Confirmed cases(Foreign National)',
    selector: 'Total_Confirmed_cases_Foreign_National',
    sortable: true,
    right: true,
  },
  {
    name: 'Cured/Discharged/Migrated',
    selector: 'Cured_Discharged_Migrated',
    sortable: true,
    right: true,
  },
  {
    name: 'Death',
    selector: 'Death',
    sortable: true,
    right: true,
  },
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

 class TableWithIndiaData extends Component {
  componentWillMount(){
    this.props.getInidaDataAsync();
}
    render() {
        return (
            <div>
                 <DataTable
                 data={this.props.countriesData.IndiaStateData}
                    columns={Statecolumns}
                    title={'Indian State Details'}
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
  getInidaDataAsync: getInidaDataAsync
};

export default connect(mapStateToProps,mapDispatchToProps)(TableWithIndiaData)

