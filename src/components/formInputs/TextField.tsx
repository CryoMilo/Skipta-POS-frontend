import { Control, Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { FormValues } from "@/types/form";

interface TextFieldProps {
	name: keyof FormValues;
	id: string;
	type: string;
	placeholder?: string;
	required?: boolean;
	defaultValue?: string | boolean | number | undefined;
	control: Control<FormValues>;
}

export const TextField: React.FC<TextFieldProps> = ({
	name,
	id,
	type,
	placeholder,
	required,
	control
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Input
					id={id}
					type={type}
					placeholder={placeholder}
					required={required}
					value={
						typeof field.value === "boolean"
							? field.value.toString()
							: field.value
					}
					onChange={field.onChange}
					onBlur={field.onBlur}
					name={field.name}
					ref={field.ref}
				/>
			)}
		/>
	);
};
