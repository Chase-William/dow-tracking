import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Scanner from './Scanner';

export default function ModalScanner({ handleMaterialScanned, btnText, btnSize }) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const itemScannedHandler = (text) => {    
    handleMaterialScanned(text)
    closeHandler()
  }

  return (
    <div>
      <Button 
        size={!!btnSize ? btnSize : 'lg' } 
        auto 
        shadow 
        onClick={handler}
        style={{background: '#00b2ae', fontWeight: 600}}       
      >
        {btnText}
      </Button>
      <Modal
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Scan a Batch
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Scanner
            onScanned={itemScannedHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}