import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FormValues } from "@/types/form";
import { Control, Controller } from "react-hook-form";
import Image from "next/image";

interface ImageInputProps {
	// eslint-disable-next-line no-unused-vars
	onChange: (file: File | null) => void;
	value?: File | null | undefined | string;
}

interface ImageUploadProps {
	id: string;
	control: Control<FormValues>;
}

const ImageInput: React.FC<ImageInputProps> = ({ onChange, value }) => {
	const [preview, setPreview] = useState<string | undefined>(undefined);

	// Generate preview when value changes
	useEffect(() => {
		if (typeof value === "string") {
			setPreview(value); // If it's a string (URL or base64), set it directly
		} else if (value instanceof File) {
			const objectUrl = URL.createObjectURL(value);
			setPreview(objectUrl);
			return () => URL.revokeObjectURL(objectUrl); // Clean up the object URL
		} else {
			setPreview(undefined); // Reset if no file is selected
		}
	}, [value]);

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			// Accepts only one file (the first one)
			onChange(acceptedFiles[0] || null);
		},
		[onChange]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false
	});

	return (
		<div
			{...getRootProps()}
			className={`border-2 border-dashed p-5 text-center ${
				isDragActive ? "border-blue-500" : "border-gray-400"
			}`}
			style={{ cursor: "pointer" }}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the image here...</p>
			) : (
				preview === undefined && (
					<Image
						src="/images/product-placeholder.png"
						alt="Preview"
						width={400}
						height={400}
						className="h-auto max-w-full"
						style={{ maxHeight: "300px" }}
					/>
				)
			)}
			{preview && (
				<div className="mt-4">
					<Image
						src={preview}
						alt="Preview"
						width={400}
						height={400}
						className="h-auto max-w-full"
						style={{ maxHeight: "300px" }}
					/>
				</div>
			)}
		</div>
	);
};

const ImageUpload: React.FC<ImageUploadProps> = ({ control }) => (
	<div className="p-8">
		<Controller
			name="image"
			control={control}
			render={({ field }) => (
				<ImageInput
					value={field.value}
					onChange={(file) => field.onChange(file)}
				/>
			)}
		/>
	</div>
);

export default ImageUpload;
