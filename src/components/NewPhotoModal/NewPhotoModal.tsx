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
import { ModalActionButtons } from '../ModalActionButtons';
import { NewPhotoModalProps } from './types';
import { IBlob } from '../../hooks/useDirectUpload/types';
import { PostModel } from '../../models';
import { CREATE_POST } from '../../api/mutations/posts';

export const NewPhotoModal = ({ onClose, onSuccess, onErrors }: NewPhotoModalProps) => {
  const [name, setName] = useState<string>("");
  const [post, setPost] = useState<PostModel | null>(null);
  const [blob, setBlob] = useState<IBlob | null>(null);
  const [createPost] = useMutation(CREATE_POST);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // TODO: Validate form fields here
    if (!name || !blob) return;
    try {
      const result = await createPost({ variables: { createPostInput: { title: name, signedBlobId: blob.signed_id }}})
      setPost(result.data.createPost);
      onSuccess();
    } catch(err) {
      onErrors()
    }
    onClose();
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

        <ModalActionButtons>
          <CancelButton type="button" onClick={onClose} >
            Cancel
          </CancelButton>
          <ActionButton type="submit">
            Submit
          </ActionButton>
        </ModalActionButtons>
      </form>
    </Modal>
  )
}
