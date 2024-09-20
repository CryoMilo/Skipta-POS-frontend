export const convertToBase64 = async (
	data: File
): Promise<string | undefined> => {
	// If the image is already a string (Base64), return it as-is
	if (typeof data === "string") {
		return data;
	}

	// If the image is a File object, convert it to Base64
	if (data) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(data as Blob);
			reader.onload = () => {
				resolve(reader.result as string);
			};
			reader.onerror = (error) => {
				reject(error);
			};
		});
	}

	// If no image is provided, return undefined
	return undefined;
};
