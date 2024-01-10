import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "@/app/api/webhook/clerk/uploadthing/core";
 
export const { useUploadThing, uploadFiles } =
generateReactHelpers<OurFileRouter>();