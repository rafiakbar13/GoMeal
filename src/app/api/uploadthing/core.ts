import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  MenuImageUpload: f({ image: { maxFileSize: "2MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadBy: "RA" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
