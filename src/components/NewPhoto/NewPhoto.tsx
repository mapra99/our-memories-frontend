import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { NewPhotoModal } from '../NewPhotoModal';

export const NewPhoto = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ActionButton onClick={() => setModalVisible(true)}>
        Add a photo
      </ActionButton>

      { modalVisible && <NewPhotoModal onClose={() => setModalVisible(false)} />}
    </>
  )
}
