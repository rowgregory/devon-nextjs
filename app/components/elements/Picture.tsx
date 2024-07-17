'use client'

import { Loading } from "@/public/images";
import Image from "next/image";
import React, { useState } from "react";

const Picture = ({ src, alt, className }: any) => {
  const [onLoad, setOnLoad] = useState(true);

  return (
    <Image
      src={onLoad ? Loading : src}
      alt={alt}
      className={className}
      width="0"
      height="0"
      sizes="100vw"
      onLoad={() => setOnLoad(false)}
    />
  );
};

export default Picture;
