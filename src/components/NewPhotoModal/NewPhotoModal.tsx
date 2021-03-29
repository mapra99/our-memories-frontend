import { useState, useEffect, SyntheticEvent } from 'react';
import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { InputField } from '../InputField';
import { InputGroup } from '../InputGroup';
import { InputLabel } from '../InputLabel';
import { CancelButton } from '../CancelButton';
import { ActionButton } from '../ActionButton';
import { NewPhotoModalFormButtons } from './NewPhotoModal.styled';

import { NewPhotoModalProps } from './types';

import { useDirectUpload } from '../../hooks/useDirectUpload';

export const NewPhotoModal = ({ onClose }: NewPhotoModalProps) => {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const { errors: uploadErrors, blob, uploadFile } = useDirectUpload();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // TODO: Validate form fields here
    if (!name || !file) return;

    uploadFile(file)
  }

  const createPost = () => {
    // TODO: Build the graphql mutation stuff here to create a new post once the blob was created
  }

  useEffect(createPost, [blob, uploadErrors])

  return (
    <Modal>
      <ModalTitle>
        Add a new photo
      </ModalTitle>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <InputGroup>
          <InputLabel>
            Name
          </InputLabel>
          <InputField
            type="text"
            name="post[name]"
            placeholder="Suspendisse elit massa"
            value={name}
            onChange={event => setName(event.target.value)} />
        </InputGroup>

        <InputGroup>
          <InputLabel>
            File
          </InputLabel>
          <InputField
            type="file"
            name="post[file]"
            placeholder="Choose a File"
            accept="image/*"
            onChange={event => event.target.files && setFile(event.target.files[0]) }/>
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
