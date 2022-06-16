import React, { Component } from 'react'
import dynamic from "next/dynamic";
const QrReader = dynamic(() => import('react-qr-scanner'), {
  ssr: false
  })
// import QrReader from 'react-qr-scanner'

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 800,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if (!!data) {
      this.props.onScanned(data.text)
    }   
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div align="center">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}          
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={"rear"}
          />
      </div>
    )
  }
}