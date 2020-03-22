
import React, {Component } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { connect } from 'react-redux';
import { getInidaDataAsync } from  '../Actions/index';

const Statecolumns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
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
                 todayCases
                    columns={Statecolumns}
                    title={'Indian State Details'}
                    pagination
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

