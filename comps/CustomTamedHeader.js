import { Text } from "@nextui-org/react"
import ModalScanner from "./ModalScanner"

export default function CustomTamedHeader({ materials, handleMaterialScanned }) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      background: '#FFF',
      padding: '5px',
      boxShadow: '0 5px 6px #3332',      
      zIndex: 1,
      top: 0
    }}>
      <Text
        css={{
          color: '#ef3a41',
          fontSize: '2em',
          fontWeight: 800,
          textTransform: 'uppercase'
        }}
        size={30}
      >
        Dow Tracking System
      </Text>
      <div style={{
        alignSelf: 'center',
        marginRight: '5px'
      }}>
        <ModalScanner
          materials={materials}
          handleMaterialScanned={handleMaterialScanned}
          btnText='Scan'
          btnSize='md'        
        />
      </div>      
    </div>
  )
}