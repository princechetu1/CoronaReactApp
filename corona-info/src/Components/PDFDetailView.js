
import React, {Component } from 'react';
import { connect } from 'react-redux';

import { watchPDFAction } from  '../Actions/index';

class PDFDetailView extends Component {
    componentWillMount(){
        this.props.watchPDFAction();
    }

    render() {
        return (
            <div className='headerStyle'>
                <h2>{'Corona Virus Details '}</h2>
               {this.props.PDFLinks.data.map((k) =>{
                  return <div><a href={k.link}>{k.title}</a><br/></div>
               })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    PDFLinks: state.PDFLinks,
    })
  
  const mapDispatchToProps = {
    watchPDFAction: watchPDFAction
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(PDFDetailView)