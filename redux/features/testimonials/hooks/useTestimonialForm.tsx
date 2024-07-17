import { useEffect, useState } from "react";

const useTestimonialForm = (data: any) => {
  const [inputs, setInputs] = useState({
    img: "",
    title: "",
    desc: "",
    name: '',
    type: ''
  });

  useEffect(() => {
    if (data) {
      setInputs((prev: any) => ({
        ...prev,
        img: data?.img,
        title: data?.title,
        desc: data?.desc,
        name: data?.name,
        type: data?.type,
      }));
    }
  }, [data]);

  const handleInput = (e: any) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? +value : value;

    setInputs((prev: any) => ({
      ...prev,
      [name]: val,
    }));
  };

  return { handleInput, inputs, setInputs };
};

export default useTestimonialForm;