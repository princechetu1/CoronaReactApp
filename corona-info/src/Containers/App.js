import React, { Component } from 'react';
import '../Style/style.css';

class App extends Component {
    render() {
        return  (
            <div>
                <div className='row'>
                    <div className='col'>
                       Header
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        Menu
                    </div>
                    <div className='col-10'>
                        Content
                    </div>
                </div>
                <div className='row'>
                    Footer
                </div>
            </div>
        );
    }
}

export default App;