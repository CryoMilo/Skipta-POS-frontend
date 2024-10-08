import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const imageUploadRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: f({ image: { maxFileSize: "16MB" } }).onUploadComplete(
		async ({ file }) => {
			// This code RUNS ON YOUR SERVER after upload

			console.log("file url", file.url);

			// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
			return { uploadedFile: file.url };
		}
	)
} satisfies FileRouter;

export type ImageUploadRouter = typeof imageUploadRouter;
