
import React, {Component } from 'react';
import { connect } from 'react-redux';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {getInidaDataAsync} from '../Actions/index';
import highchartsMap from "highcharts/modules/map";
import {getIndiaData} from "../Helpers/IndiaData";
highchartsMap(Highcharts);

var data = [
        ['in-py', 0],
        ['in-ld', 1],
        ['in-wb', 2],
        ['in-or', 3],
        ['in-br', 4],
        ['in-sk', 5],
        ['in-ct', 6],
        ['in-tn', 7],
        ['in-mp', 8],
        ['in-2984', 9],
        ['in-ga', 10],
        ['in-nl', 11],
        ['in-mn', 12],
        ['in-ar', 13],
        ['in-mz', 14],
        ['in-tr', 15],
        ['in-3464', 16],
        ['in-dl', 17],
        ['in-hr', 18],
        ['in-ch', 19],
        ['in-hp', 20],
        ['in-jk', 21],
        ['in-kl', 22],
        ['in-ka', 23],
        ['in-dn', 24],
        ['in-mh', 25],
        ['in-as', 26],
        ['in-ap', 27],
        ['in-ml', 28],
        ['in-pb', 29],
        ['in-rj', 30],
        ['in-up', 31],
        ['in-ut', 32],
        ['in-jh', 33]
    ];
const mapOptions = {
        chart: {
          map: getIndiaData()
        },
        title: {
          text: " "
        },
        mapNavigation: {
          enabled: true,
          buttonOptions:{
              verticalAlign:'bottom'
          }
        },
        tooltip: {
            headerFormat: "",
            pointFormat: "Cases {point.value.cases}, Deaths {point.value.deaths}"
          },
        series: [
         {
            name: "Locations",
            color: "#4169E1",
            data: data,
            states: {
              hover: {
                color: 'red'
              }
            },
            dataLabels:{
                enabled:true, 
                format:"{point.name}"
            }
          }
        ]
      };

class ChartViewForIndiaData extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartValues : []
        };
    }
    componentWillMount(){
        //this.props.getInidaDataAsync();
    }
    render() {
        return (
            <div className='headerStyle shadow-lg p-3 mb-2 bg-white rounded'>
             <HighchartsReact
                constructorType={"mapChart"}
                highcharts={Highcharts}
                options={mapOptions}
            />
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
});

const mapDispatchToProps = {
    getInidaDataAsync: getInidaDataAsync
  };



export default connect(mapStateToProps,'')(ChartViewForIndiaData);
