import React, { Component } from 'react'
import dynamic from "next/dynamic";
// const QrReader = dynamic(() => import('react-qr-scanner'), {
//   ssr: false
//   })
const QrReader = dynamic(() => import('modern-react-qr-reader'), {
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
    console.log(data)
    if (!!data) {
      this.props.onScanned(data)
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
          facingMode={"environment"}

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