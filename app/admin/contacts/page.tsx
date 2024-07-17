'use client';

import DeleteModal, { useDeleteModal } from '@/app/components/common/DeleteModal';
import Spinner from '@/app/components/Spinner';
import MagnifyingGlass from '@/public/svg/MagnifyingGlass';
import { RootState, useAppSelector } from '@/redux/store';
import useOutsideDetect from '@/utils/useOutsideDetect';
import { Fragment, useCallback, useRef, useState } from 'react';
import { useDeleteContactMutation, useGetContactsQuery } from '@/redux/services/contactApi';
import ContactsTable from '@/app/components/contact/ContactsTable';

const Contacts = () => {
  const [text, setText] = useState('');
  const [idAndName, setIdAndName] = useState({ id: '', name: '' });
  const contacts = useAppSelector(
    (state: RootState) => state.contact.contacts
  );
  const noContacts = contacts?.length === 0;
  const [contactToBeEdited, setContactToBeEdited] = useState({
    open: false,
    contact: { id: null, contactMethod: '', inquiryType: '', contactTime: '' },
  });

  const contactRef = useRef(null) as any;
  const { openModal, show, closeModal } = useDeleteModal();

  const { isLoading } = useGetContactsQuery();

  const [deleteContact, { isLoading: loadingDelete }] =
    useDeleteContactMutation();

  const filteredContacts = contacts?.filter((item: any) =>
    item?.name?.toLowerCase().includes(text.toLowerCase())
  );

  const closeActionMenu = useCallback(() => {
    setContactToBeEdited({
      open: false,
      contact: { id: null, contactMethod: '', inquiryType: '', contactTime: '' },
    });
  }, []);

  useOutsideDetect(contactRef, closeActionMenu);

  return (
    <Fragment>
      <DeleteModal
        idAndName={idAndName}
        deleteDocument={deleteContact}
        loading={loadingDelete}
        hook={{ openModal, show, closeModal }}
      />
      <div className="w-full mx-auto pt-6 pb-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8">
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner fill="fill-[#3c6265]" wAndH="w-10 h-10" />
          </div>
        ) : (
          <Fragment>
            <div className="font-Matter-Medium text-xl mb-3.5 text-zinc-200">Contacts</div>
            <div className="flex justify-between">
              <div className="flex items-center font-Matter-Light border border-zinc-800 py-2 px-[16px] ">
                <MagnifyingGlass />
                <input
                  onChange={(e: any) => setText(e.target.value)}
                  className="w-full h-full focus:outline-0 ml-2 bg-transparent text-xs"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="bg-zinc-900 w-full mt-3">
              {noContacts ? (
                <div className="flex flex-col justify-center max-w-48 w-full items-center mx-auto  py-10">
                  <div className=" bg-zinc-800 h-12 w-12 flex justify-center items-center">
                    <MagnifyingGlass />
                  </div>
                  <div className="text-xs my-2 text-zinc-300">No contacts</div>
                </div>
              ) : (
                <ContactsTable
                  filteredContacts={filteredContacts}
                  contactToBeEdited={contactToBeEdited}
                  contactRef={contactRef}
                  setIdAndName={setIdAndName}
                  openModal={openModal}
                  setContactToBeEdited={setContactToBeEdited}
                />
              )}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Contacts;
