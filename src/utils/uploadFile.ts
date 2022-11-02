import axios from "axios";

export interface UploadFile {
  file: Blob;
  signedRequest: string;
  onUploadProgress?: (percent: number) => void;
}

export const uploadFile = async ({
  file,
  signedRequest,
  onUploadProgress
}: UploadFile) =>
  axios({
    data: file,
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": file.type
    },
    method: "PUT",
    onUploadProgress: progressEvent => {
      progressEvent?.total &&
        onUploadProgress?.(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
    },
    url: signedRequest
  });

export default uploadFile;
