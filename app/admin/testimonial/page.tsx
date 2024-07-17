'use client';

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import useTestimonialForm from '@/redux/features/testimonials/hooks/useTestimonialForm';
import { useCreateTestimonialMutation, useUpdateTestimonialMutation } from '@/redux/services/testimonialApi';
import TestimonialForm from '@/app/components/testimonial/TestimonialForm';
import { uploadFileToFirebase } from '@/utils/firebase';

const Testimonial = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const testimonialString = searchParams?.get('testimonial') as any;
  const testimonial = useMemo(() => {
    return testimonialString ? JSON.parse(testimonialString) : null;
  }, [testimonialString]);
  const isEditMode = searchParams?.get('isEditMode') === 'true';
  const { handleInput, inputs, setInputs } = useTestimonialForm(testimonial);
  const [createMenuItem, { isLoading: loadingCreate }] =
    useCreateTestimonialMutation();
  const [updateMenuItem, { isLoading: loadingUpdate }] =
    useUpdateTestimonialMutation();
  const [isUploadingToFirebase, setIsUploadingToFirebase] = useState(false);

  const handleErrors = (err: any) => {
    console.error(err);
  };

  const handleSuccess = () => {
    navigate.push('/admin/testimonials');
  };

  const handleMenuItemUpdate = async () => {
    await updateMenuItem({ ...inputs, id: testimonial.id })
      .unwrap()
      .then(handleSuccess)
      .catch(handleErrors);
  };

  const handleMenuItemCreate = async () => {
    await createMenuItem(inputs)
      .unwrap()
      .then(handleSuccess)
      .catch(handleErrors);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (Boolean(isEditMode)) {
      handleMenuItemUpdate();
    } else {
      handleMenuItemCreate();
    }
  };

  const editPhotoHandler = async (e: any) => {
    setIsUploadingToFirebase(true)
    const imgData: any = await uploadFileToFirebase(e.target.files[0]);
    setIsUploadingToFirebase(false)
    setInputs((prev: any) => ({
      ...prev,
      img: imgData?.url,
    }));
    e.target.value = '';
  };

  return (
    <div className="flex flex-col gap-8 py-20 w-full lg:max-w-screen-lg mx-auto px-3 md:px-6">
      <Link
        href="/admin/testimonials"
        className="w-fit border border-zinc-900 bg-zinc-900 px-3.5 py-1.5 flex items-center hover:no-underline group hover:bg-zinc-800 duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="fa-xs mr-2" />
        <p className="font-Matter-Regular text-sm">Back to testimonials</p>
      </Link>
      <TestimonialForm
        inputs={inputs}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
        loadingCreate={loadingCreate}
        loadingUpdate={loadingUpdate}
        editPhotoHandler={editPhotoHandler}
        isUploadingToFirebase={isUploadingToFirebase}
      />
    </div>
  );
};

export default Testimonial;