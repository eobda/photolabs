import { useState } from "react";

export default function useApplicationData() {

  const [favPhotos, setFavPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const state = {
    favPhotos,
    activePhoto,
    modalOpen
  };

  const updateToFavPhotoIds = (photo) => {
    const newFavPhotos = [...favPhotos, photo];
    setFavPhotos(newFavPhotos);
  }

  const onPhotoSelect = (photo) => {
    setActivePhoto(photo);
    setModalOpen(true);
  }

  const onClosePhotoDetailsModal = () => {
    setActivePhoto(null);
    setModalOpen(false);
  }

  // onLoadTopic

  return { state, onPhotoSelect, updateToFavPhotoIds, onClosePhotoDetailsModal };
};