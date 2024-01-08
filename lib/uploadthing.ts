import { generateComponents } from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/webhook/clerk/uploadthing/core";
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();