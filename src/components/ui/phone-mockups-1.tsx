import React from "react";
import {
  ImageItem,
  PhoneCarousel,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";

const batchImages: ImageItem[] = [
  {
    src: "/Batch (1).jpeg",
    alt: "Batch Classroom Session",
    title: "Interactive Smart Classroom",
    caption: "Engaging lectures with top faculty and real-time interaction.",
  },
  {
    src: "/Batch (3).jpeg",
    alt: "Dedicated Student Mentorship",
    title: "Personalized Mentorship",
    caption: "1-on-1 guidance & doubt resolution sessions for aspirants.",
  },
  {
    src: "/Batch (5).jpeg",
    alt: "Group Discussion & Practice",
    title: "Exam Strategy & Practice",
    caption: "Structured test series and mock paper analysis.",
  },
  {
    src: "/Batch (6).jpeg",
    alt: "Aspirant Study Centre Batch",
    title: "Top Officer Guidance",
    caption: "Preparation for SSC CGL, Banking, Railways & State PSC.",
  },
];

export default function PhoneMockupBasic() {
  return <PhoneCarousel images={batchImages} />;
}
