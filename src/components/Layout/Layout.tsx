import React, { useState, useLayoutEffect } from "react";
import { HomeLayout } from "./Layout.styles";

type LayoutProps = {
  children: React.ReactChild;
};

const backgroundThemes = "anime,japan,sweden,sverige,italy,italia,sexy,space";

export const Layout = ({ children }: LayoutProps) => {
  const [backgroundImage, setImage] = useState("");

  useLayoutEffect(() => {
    const getImage = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      fetch(
        `https://source.unsplash.com/random/${width}x${height}?${backgroundThemes}`
      ).then((response) => {
        setImage(response?.url);
      });
    };

    setInterval(getImage, 1800000);

    getImage();
  }, []);

  return <HomeLayout Image={backgroundImage}>{children}</HomeLayout>;
};
