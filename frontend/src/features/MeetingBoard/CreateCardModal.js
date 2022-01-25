import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const CreateCardModal = ({ isOpen, toggle, addFeatureCard }) => {
  const [content, setContent] = useState(null);
  console.log('content', content);
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="add-modal">
      <ModalBody>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => addFeatureCard(content)}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateCardModal;
