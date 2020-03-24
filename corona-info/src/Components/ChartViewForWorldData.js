
import React, {Component } from 'react';
import { connect } from 'react-redux';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import mapJson from "@highcharts/map-collection/custom/world.geo.json";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
highchartsMap(Highcharts);

const mapOptions = {
    chart: {
      map: mapJson
    },
    title: {
      text: "World Details"
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
        data: [],
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


class ChartViewForWorldData extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartValues : []
        };
    }
    componentWillMount(){
        var values = [];
        var data = this.props.countriesData.data.find(x => x.country == "India");
        if(data && Object.keys(data).length > 0 ){

            Object.keys(data).map((k,v) => {
                var obj ={
                    "value":v,
                    "name":k
                };
                values.push(obj);
            });
    
            this.setState({
                chartValues :values
            });
        }
    }
    render() {
        return (
            <div style={{overflow:'scroll'}} className='headerStyle shadow-lg p-3 mb-2 bg-white rounded'>
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

export default connect(mapStateToProps,'')(ChartViewForWorldData);
  
