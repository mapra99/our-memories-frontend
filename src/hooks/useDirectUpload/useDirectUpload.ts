import { useState } from "react"
import { DirectUpload } from "@rails/activestorage"

// TODO: Type this hook
export const useDirectUpload = () => {
  const [errors, setErrors] = useState<Error | null>(null)
  const [blob, setBlob] = useState<any>(null) // TODO: Change 'any' type for a more appropiate one

  const { REACT_APP_ACTIVE_STORAGE_URL } = process.env

  const uploadFile = async (file: File) => {
    const upload = await new DirectUpload(file, REACT_APP_ACTIVE_STORAGE_URL || '');

    await upload.create((error, blob) => {
      if (error) setErrors(error);
      else setBlob(blob);
    })

    return ({ blob, errors });
  }

  return {
    errors,
    blob,
    uploadFile
  }
}
