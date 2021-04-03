import { useEffect, useState, FormEvent } from 'react';
import { DirectUpload } from '@rails/activestorage';
import { IBlob, DirectUploadTypes } from './props';

export const useDirectUpload = (): DirectUploadTypes => {
  const [errors, setErrors] = useState<Error | null>(null);
  const [blob, setBlob] = useState<IBlob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileSrc, setFileSrc] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => console.log(blob), [blob])

  const { REACT_APP_DIRECT_UPLOADS_URL } = process.env;

  const uploadFile = async (file: File) => {
    try {
      const upload = await new DirectUpload(file, REACT_APP_DIRECT_UPLOADS_URL || '');

      await upload.create((error, blob) => {
        if (error) setErrors(error);
        else setBlob(blob);
      });

      return ({ blob, errors });
    } catch(error) {
      setErrors(error);
    }
  };

  const readFileAsUrl = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      setFileSrc(event.target.result)
    };

    reader.readAsDataURL(file);
  };

  const onFileSelect = (event: FormEvent<HTMLInputElement>) => {
    setLoading(true);

    const { files } = event.currentTarget;
    if (!files || !files.length) return;

    uploadFile(files[0]);
    readFileAsUrl(files[0]);
    setLoading(false);
  };

  return {
    loading,
    errors,
    blob,
    fileSrc,
    onFileSelect,
  };
};
