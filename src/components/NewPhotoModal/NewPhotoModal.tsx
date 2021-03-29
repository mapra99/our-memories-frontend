import { useState, useEffect, SyntheticEvent } from 'react';
import { useMutation } from '@apollo/client';
import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { InputField } from '../InputField';
import { InputGroup } from '../InputGroup';
import { InputLabel } from '../InputLabel';
import { CancelButton } from '../CancelButton';
import { ActionButton } from '../ActionButton';
import { NewPhotoModalFormButtons } from './NewPhotoModal.styled';
import { NewPhotoModalProps } from './types';
import { PostModel } from '../../models';
import { useDirectUpload } from '../../hooks/useDirectUpload';
import { CREATE_POST } from '../../api/mutations/posts';

export const NewPhotoModal = ({ onClose }: NewPhotoModalProps) => {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [post, setPost] = useState<PostModel | null>(null);
  const { errors: uploadErrors, blob, uploadFile } = useDirectUpload();
  const [createPost, { data }] = useMutation(CREATE_POST);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // TODO: Validate form fields here
    if (!name || !file) return;

    uploadFile(file)
  }

  useEffect(() => {
    if(!blob || !name || uploadErrors) return;
    createPost({ variables: { createPostInput: { title: name, signedBlobId: blob.signed_id }}})
  }, [name, blob, uploadErrors])

  useEffect(() => {
    if (!data) return;
    setPost(data.createPost)
    onClose()
  }, [data])

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
