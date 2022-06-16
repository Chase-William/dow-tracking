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
          facingmode={'rear'}
          // chooseDeviceId={(rear, all) => {
          //   console.log('adasd')
          //   if (!!rear && rear.length > 0) {              
          //     return rear[0]
          //   }
          //   return all[0]
          // }}
          />
      </div>
    )
  }
}