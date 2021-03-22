import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { InputField } from '../InputField';
import { InputGroup } from '../InputGroup';
import { InputLabel } from '../InputLabel';
import { CancelButton } from '../CancelButton';
import { ActionButton } from '../ActionButton';
import { NewPhotoModalFormButtons } from './NewPhotoModal.styled';

import { NewPhotoModalProps } from './types';

export const NewPhotoModal = ({ onClose }: NewPhotoModalProps) => {
  return (
    <Modal>
      <ModalTitle>
        Add a new photo
      </ModalTitle>

      <form>
        <InputGroup>
          <InputLabel>
            Name
          </InputLabel>
          <InputField type="text" name="post[name]" placeholder="Suspendisse elit massa" />
        </InputGroup>

        <InputGroup>
          <InputLabel>
            File
          </InputLabel>
          <InputField type="file" name="post[file]" placeholder="Choose a File" />
        </InputGroup>

        <NewPhotoModalFormButtons>
          <CancelButton type="button" onClick={onClose} >
            Cancel
          </CancelButton>
          <ActionButton type="submit">
            Submit
          </ActionButton>
        </NewPhotoModalFormButtons>
      </form>
    </Modal>
  )
}
