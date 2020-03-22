import React, {Component } from 'react';
import { connect } from 'react-redux';
import { getInidaHighLevelAsync } from  '../Actions/index';

 class TitleValues extends Component {
    componentWillMount(){
        this.props.getInidaHighLevelAsync();
    }
    render() {
        return (
            <div className='row TitleValuesStyle'>
               <div className='col-3'>
                 <label title={'Cases ' + this.props.countriesData?.IndianData?.cases }/>
                 <label title={'Todays Cases '+this.props.countriesData?.IndianData?.todayCases }/>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countriesData: state.countries,
    })

const mapDispatchToProps = {
    getInidaHighLevelAsync: getInidaHighLevelAsync
};

export default connect(mapStateToProps,mapDispatchToProps)(TitleValues)