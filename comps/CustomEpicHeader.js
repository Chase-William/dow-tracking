import Wave from 'react-wavify'
import CustomTitle from './CustomTitle/CustomTitle'
import { Spacer } from '@nextui-org/react'
import ModalScanner from './ModalScanner'
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils'

export default function CustomEpicHeader({ materials, handleMaterialScanned }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto'
    }}>
      <CustomTitle/>
      <Spacer y={1} />
      <ModalScanner
        materials={materials}
        handleMaterialScanned={handleMaterialScanned}
        btnText='Scan to Start'
      />
      {/* <Wave
      className='styles.rotated'
        style={{
          position: 'fixed',
          top: 0,
          padding: 0,
          margin: -7,          
        }}
        width='100%'        
        fill='#01466f'
        paused={false}
        options={{
          height: 130,
          amplitude: 8,
          speed: 0.3,
          points: 5
        }}
      /> */}
      <Wave 
        style={{
          position: 'fixed',
          bottom: 0,
          padding: 0,
          margin: -7
        }}
        width='100%'        
        fill='#01466f'
        paused={false}
        options={{
          height: 130,
          amplitude: 8,
          speed: 0.3,
          points: 5
        }}
        />
    </div>
  )
}