
import React, {Component } from 'react';
import { connect } from 'react-redux';

import { watchPDFAction } from  '../Actions/index';

class PDFDetailView extends Component {
    componentWillMount(){
        this.props.watchPDFAction();
    }

    render() {
        return (
            <div style={{backgroundColor:'white'}}>
               {this.props.PDFLinks.data.map((k) =>{
                  return <div><a target='_blank' href={k.link}>{k.title}</a><br/></div>
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