'use client';

import { useState } from 'react';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Spinner from '../Spinner';

export const useDeleteModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return { show, openModal, closeModal };
};

const DeleteModal = ({ idAndName, deleteDocument, loading, hook }: any) => {

  const getAction = async () => {
    await deleteDocument({ id: idAndName.id })
      .unwrap()
      .then(() => {
        hook.closeModal();
      });
  };

  return (
    <Modal isOpen={hook.show} isCentered onClose={hook.closeModal}>
      <ModalOverlay />
      <ModalContent>
        <div className="bg-[#09090b] p-5 min-h-72 flex flex-col justify-between">
          <p className="font-Matter-Medium text-gray-400">
            Are you sure you want to delete{' '}
            <span className="text-red-500 font-bold">{idAndName.name}</span>?
          </p>
          <div className="flex items-center justify-end gap-3">
            <button
              className="px-4 py-2 text-red-500 border-2 border-red-500 duration-200 hover:shadow-lg text-xs"
              onClick={hook.closeModal}
            >
              No
            </button>
            <button
              className="px-4 py-2 bg-red-500 border-2 border-red-500 text-white duration-200 hover:shadow-lg text-xs hover:bg-red-600"
              onClick={getAction}
            >
              {loading ? <Spinner fill="fill-white" /> : 'Yes'}
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
