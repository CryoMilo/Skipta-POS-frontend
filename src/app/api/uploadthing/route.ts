import { createRouteHandler } from "uploadthing/next";

import { imageUploadRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
	router: imageUploadRouter

	// Apply an (optional) custom config:
	// config: { ... },
});
