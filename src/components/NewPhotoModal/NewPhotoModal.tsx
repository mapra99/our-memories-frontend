import { useState, useEffect, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { InputField } from '../InputField';
import { InputGroup } from '../InputGroup';
import { InputLabel } from '../InputLabel';
import { CancelButton } from '../CancelButton';
import { ActionButton } from '../ActionButton';
import { DropFileInput } from '../DropFileInput';
import { NewPhotoModalFormButtons } from './NewPhotoModal.styled';
import { NewPhotoModalProps } from './types';
import { IBlob } from '../../hooks/useDirectUpload/types';
import { PostModel } from '../../models';
import { CREATE_POST } from '../../api/mutations/posts';

export const NewPhotoModal = ({ onClose }: NewPhotoModalProps) => {
  const [name, setName] = useState<string>("");
  const [post, setPost] = useState<PostModel | null>(null);
  const [blob, setBlob] = useState<IBlob | null>(null);
  const [createPost, { data }] = useMutation(CREATE_POST);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: Validate form fields here
    if (!name) return;
    console.log('submitting :)')
  }

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
          <DropFileInput onBlobUpload={(blob: IBlob) => { setBlob(blob) }} />
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
