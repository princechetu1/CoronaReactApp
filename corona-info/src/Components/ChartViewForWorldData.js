
import React, {Component } from 'react';
import { connect } from 'react-redux';

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
            <div className='headerStyle shadow-lg p-3 mb-2 bg-white rounded'>
                    {this.state.chartValues.map((k,v) => {
                        return <div>
                            <div class="card">
                                <div class="card-header">{k.name}</div>
                                <div class="card-body">{k.value}</div>
                            </div>
                        </div>

                    })
                    }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
});

export default connect(mapStateToProps,'')(ChartViewForWorldData);
  
