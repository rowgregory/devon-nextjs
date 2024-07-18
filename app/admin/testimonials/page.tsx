'use client';

import DeleteModal, { useDeleteModal } from '@/app/components/common/DeleteModal';
import Spinner from '@/app/components/Spinner';
import MagnifyingGlass from '@/public/svg/MagnifyingGlass';
import TestimonialsTable from '@/app/components/testimonial/TestimonialsTable';
import { useDeleteTestimonialMutation, useGetTestimonialsQuery } from '@/redux/services/testimonialApi';
import { RootState, useAppSelector } from '@/redux/store';
import useOutsideDetect from '@/utils/useOutsideDetect';
import Link from 'next/link';
import { Fragment, useCallback, useRef, useState } from 'react';

const Testimonials = () => {
  const [text, setText] = useState('');
  const [idAndName, setIdAndName] = useState({ id: '', name: '' });
  const testimonials = useAppSelector(
    (state: RootState) => state.testimonial.testimonials
  );
  const noTestimonials = testimonials?.length === 0;
  const [testimonialToBeEdited, setTestimonialToBeEdited] = useState({
    open: false,
    testimonial: { id: null },
  });
  const testimonialRef = useRef(null) as any;
  const { openModal, show, closeModal } = useDeleteModal();

  const { isLoading } = useGetTestimonialsQuery();

  const [deleteTestimonial, { isLoading: loadingDelete }] =
    useDeleteTestimonialMutation();

  const filteredTestimonials = testimonials?.filter((item: any) =>
    item?.name?.toLowerCase().includes(text.toLowerCase())
  );

  const closeActionMenu = useCallback(() => {
    setTestimonialToBeEdited({
      open: false,
      testimonial: { id: null },
    });
  }, []);

  useOutsideDetect(testimonialRef, closeActionMenu);

  return (
    <Fragment>
      <DeleteModal
        idAndName={idAndName}
        deleteDocument={deleteTestimonial}
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
            <div className="font-Matter-Medium text-xl mb-3.5 text-zinc-200">Testimonials</div>
            <div className="flex justify-between">
              <div className="flex items-center font-Matter-Light border border-zinc-800 py-2 px-[16px] ">
                <MagnifyingGlass />
                <input
                  onChange={(e: any) => setText(e.target.value)}
                  className="w-full h-full focus:outline-0 ml-2 bg-transparent text-xs"
                  placeholder="Search"
                />
              </div>
              <Link
                href={{
                  pathname: '/admin/testimonial',
                  query: { isEditMode: false },
                }}
                className="whitespace-nowrap w-fit px-4 duration-200 hover:no-underline text-center flex justify-center items-center font-Matter-Medium bg-[#356368] text-xs text-white py-2 font-bold"
              >
                ADD TESTIMONIAL
              </Link>
            </div>
            <div className="bg-zinc-900 w-full mt-3 overflow-x-scroll md:overflow-auto">
              {noTestimonials ? (
                <div className="flex flex-col justify-center max-w-48 w-full items-center mx-auto  py-10">
                  <div className=" bg-zinc-800 h-12 w-12 flex justify-center items-center">
                    <MagnifyingGlass />
                  </div>
                  <div className="text-xs my-2 text-zinc-300">No testimonials</div>
                </div>
              ) : (
                <TestimonialsTable
                  filteredTestimonials={filteredTestimonials}
                  testimonialToBeEdited={testimonialToBeEdited}
                  testimonialRef={testimonialRef}
                  setIdAndName={setIdAndName}
                  openModal={openModal}
                  setTestimonialToBeEdited={setTestimonialToBeEdited}
                />
              )}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Testimonials;
