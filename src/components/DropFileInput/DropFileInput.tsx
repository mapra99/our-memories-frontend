import { useEffect } from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import {
  DropFileInputArea,
  DropFileInputField,
  DropFileInputPlaceholder,
  DropFileInputImage
} from './DropFileInput.styled';

import {DropFileInputProps} from './props';
import { useDirectUpload } from '../../hooks/useDirectUpload';

export const DropFileInput = ({ onBlobUpload }: DropFileInputProps) => {
  const { errors, loading, blob, fileSrc, onFileSelect } = useDirectUpload();

  useEffect(() => {
    if (!onBlobUpload || !blob) return

    onBlobUpload(blob);
  }, [blob])

  if (loading) return (
    <DropFileInputArea>
      <LoadingSpinner />
    </DropFileInputArea>
  )

  return (
    <DropFileInputArea>
      <DropFileInputField
        type="file"
        onChange={onFileSelect}
        accept="image/*" />
      { fileSrc ? (
        <DropFileInputImage
          alt=''
          src={fileSrc} />
      ) : (
        <DropFileInputPlaceholder>
          Drag & drop your image here
        </DropFileInputPlaceholder>
      )}
    </DropFileInputArea>
  )
}
