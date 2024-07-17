import React from 'react'
import ContactRow from './ContactRow';

const ContactsTable = ({
  filteredContacts,
  contactToBeEdited,
  contactRef,
  setIdAndName,
  openModal,
  setContactToBeEdited,
}: any) => {
  return (
    <table className="w-full">
      <thead className="whitespace-nowrap px-4 pb-4 pt-2">
        <tr className="bg-zinc-900">
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs -mx-1.5 -my-1 w-fit px-1.5 py-1 flex flex-nowrap items-center gap-2">
              Name
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              Email
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              Phone Number
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              Date & Time
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts?.map((contact: any, i: number) => (
          <ContactRow
            key={i}
            contact={contact}
            contactToBeEdited={contactToBeEdited}
            contactRef={contactRef}
            setIdAndName={setIdAndName}
            openModal={openModal}
            setContactToBeEdited={setContactToBeEdited}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactsTable