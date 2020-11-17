import React, { useState } from 'react';
import {
  Button, Icon, Image, Modal,
} from 'semantic-ui-react';


const ModalProject = ({
  link,
  title,
  image,
  h3,
  h4,
  description,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Decouvrir le projet</Button>}
      closeInDimmerClick
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src={image} wrapped />

        <p className="ModalDescription">
          <h3>{h3}</h3>
          <h4>{h4}</h4>

          <br />
          <p>{description}</p>

        </p>

      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Revenir aux expériences <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalProject;
