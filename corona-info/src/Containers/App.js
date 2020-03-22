import React, { Component } from 'react';
import '../Style/style.css';
import Header from '../Components/Header';
import TitleValues from '../Components/HighLevelStatus';
import DetailedComponent from '../Components/DetailedComponent';
import Footer from '../Components/Footer'; 

class App extends Component {
    render() {
        return  (
            <div>
                <div className='row'>
                    <div className='col'>
                       <Header />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <TitleValues />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <DetailedComponent />
                    </div>
                </div>
                <div className='row'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;