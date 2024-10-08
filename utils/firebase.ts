import { app } from "@/config/firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFileToFirebase = async (file: File) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, "images/" + file?.name);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return {
      url: downloadURL,
      size: Math.round(snapshot.metadata.size / 1024),
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

const uploadMultipleFilesToFirebase = async (files: FileList | File[]) => {
  const downloadURLs = await Promise.all(
    Array.from(files).map((file) => uploadFileToFirebase(file))
  );
  return downloadURLs;
};

export { uploadMultipleFilesToFirebase, uploadFileToFirebase };
