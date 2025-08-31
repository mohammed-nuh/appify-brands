import { StaticImageData } from "next/image";

type ImageSource = string | StaticImageData;

export interface CardProps {
  title: string;
  description: string;
  image: {
    step1dark1: ImageSource;
    step1dark2: ImageSource;
    step1light1: ImageSource;
    step1light2: ImageSource;
    step2dark1: ImageSource;
    step2dark2: ImageSource;
    step2light1: ImageSource;
    step2light2: ImageSource;
    step3dark: ImageSource;
    step3light: ImageSource;
    step4light: ImageSource;
    alt: string;
  };
  step1img1Class?: string;
  step1img2Class?: string;
  step2img1Class?: string;
  step2img2Class?: string;
  step3imgClass?: string;
}
