import { Control, Controller } from "react-hook-form";
import { FormValues } from "@/types/form";
import { Checkbox } from "../ui/checkbox";

interface CheckboxFieldProps {
	name: keyof FormValues;
	id: string;
	required?: boolean;
	control: Control<FormValues>;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
	name,
	id,
	control
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Checkbox
					id={id}
					checked={field.value as boolean}
					onCheckedChange={(checked: boolean) => field.onChange(checked)}
					onBlur={field.onBlur}
					name={field.name}
					ref={field.ref}
				/>
			)}
		/>
	);
};
