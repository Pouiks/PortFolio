import React, { useState } from 'react';
import {
  Button, Icon, Image, Modal,
} from 'semantic-ui-react';
import './modalinfo.scss';

const ModalInfo = ({
  id,
  year,
  title,
  image,
  description,
  path,
  longDescription1,
  longDescription2,
  longDescription3,
  longDescription4,
  techno1,
  techno2,
  techno3,
  techno4,
  techno5,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>En savoir plus</Button>}
      closeInDimmerClick
    >
      <Modal.Header>{year} - {title}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src={image} wrapped />

        <p className="ModalDescription">
          <p>{longDescription1}</p>
          <p>{longDescription2}</p>

          <li>{techno1}</li>
          <li>{techno2}</li>
          <li>{techno3}</li>
          <li>{techno4}</li>
          <li>{techno5}</li>

          <br />
          <p>{longDescription3}</p>
          <p>{longDescription4}</p>
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

export default ModalInfo;
