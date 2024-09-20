// utils/getImageSrc.ts
export const getImageSrc = (
	image: string | File | undefined,
	placeholder: string = "/images/product-placeholder.png"
): string => {
	if (typeof image === "string") {
		// If it's already a string (URL or base64), return it
		return image;
	} else if (image instanceof File) {
		// If it's a File, create a URL for it
		return URL.createObjectURL(image);
	}
	// Fallback in case the image is undefined
	return placeholder;
};
