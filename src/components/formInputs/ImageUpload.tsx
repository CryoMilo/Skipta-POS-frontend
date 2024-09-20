import { FormValues } from "@/types/form";
import { Control, Controller } from "react-hook-form";

interface ImageInputProps {
	// eslint-disable-next-line no-unused-vars
	onChange: (file: File | null) => void;
	onBlur?: () => void;
	value?: File | null | undefined | string;
}

interface ImageUploadProps {
	id: string;
	control: Control<FormValues>;
}

const ImageInput: React.FC<ImageInputProps> = ({ onChange }) => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;
		onChange(file);
	};

	return (
		<div>
			<input type="file" accept="image/*" onChange={handleFileChange} />
		</div>
	);
};

const ImageUpload: React.FC<ImageUploadProps> = ({ control }) => (
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
);

export default ImageUpload;
