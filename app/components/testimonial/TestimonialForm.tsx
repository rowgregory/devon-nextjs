import Picture from "@/app/components/elements/Picture";
import Spinner from "@/app/components/Spinner";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialForm = ({
  inputs,
  handleInput,
  handleSubmit,
  isEditMode,
  loadingCreate,
  loadingUpdate,
  editPhotoHandler,
  isUploadingToFirebase,
}: any) => {
  return (
    <form className="flex flex-col border-[1px] border-zinc-800 py-12 px-3 sm:px-8">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-6">
        <div className="col-span-12 md:col-span-5 text-sm">
          Upload an image for your testimonial
        </div>
        <div className="col-span-12 md:col-span-7 flex justify-center py-4 mx-auto w-full cursor-pointer">
          <input
            id="image-file"
            type="file"
            onChange={editPhotoHandler}
            className="hidden"
            name="image"
          />
          <label htmlFor="image-file" className="rounded-md cursor-pointer">
            {isUploadingToFirebase ? (
              <Spinner fill="fill-white" wAndH="w-10 h-10" />
            ) : inputs.img ? (
              <Picture
                src={inputs.img}
                alt="Devon Hunt"
                className="object-cover h-40 w-40 bg-zinc-950 rounded-md"
              />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 mb-1">
                  <FontAwesomeIcon
                    icon={faCloudArrowUp}
                    className="fa-lg flex justify-center items-center text-gray-200"
                  />
                </div>
                <p className="text-sm underline text-gray-500">
                  Click to add photo
                </p>
              </div>
            )}
          </label>
        </div>
      </div>
      <div className="h-[1px] w-full bg-zinc-800 my-12"></div>
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-6">
        <div className="col-span-12 md:col-span-5">Testimonial details</div>
        <div className="col-span-12 md:col-span-7 grid gap-y-10 md:gap-x-6">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-xs text-zinc-300 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleInput}
              value={inputs.title || ""}
              className="border-zinc-800 border-[1px] px-3 text-white bg-transparent h-10 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="desc" className="text-xs text-zinc-300 mb-1">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows={7}
              value={inputs.desc || ""}
              onChange={handleInput}
              aria-label="Enter description"
              className="border-zinc-800 border-[1px] p-3 text-white bg-transparent focus:outline-none input-box"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs text-zinc-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={inputs.name || ""}
              className="border-zinc-800 border-[1px] px-3 text-white bg-transparent h-10 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="type" className="text-xs text-zinc-300 mb-1">
              Type
            </label>
            <input
              type="text"
              name="type"
              onChange={handleInput}
              value={inputs.type || ""}
              className="border-zinc-800 border-[1px] px-3 text-white bg-transparent h-10 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-zinc-800 my-12"></div>
      <button
        onClick={handleSubmit}
        className="whitespace-nowrap w-full md:w-fit px-10 duration-200 hover:no-underline text-center flex justify-center items-center font-Matter-Medium bg-[#38656a] text-sm text-white py-2.5 font-bold uppercase self-end"
      >
        {(loadingCreate || loadingUpdate) && (
          <span className="mr-2">
            <Spinner fill="fill-white" />
          </span>
        )}
        {isEditMode
          ? `Updat${loadingUpdate ? "ing..." : "e"}`
          : `Creat${loadingCreate ? "ing..." : "e"}`}
      </button>
    </form>
  );
};

export default TestimonialForm;
