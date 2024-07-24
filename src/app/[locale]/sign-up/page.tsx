"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { createUser } from "@/services/users";
import { revalidateUsers } from "../actions";
import { TextField } from "@/components/formInputs/TextField";
import { FormValues } from "@/types/form";

export const Signup = () => {
	const { toast } = useToast();
	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
		}
	});
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const currentDate = new Date().toISOString();
		try {
			const _id: string = crypto.randomUUID();

			const createdUser = await createUser({
				_id,
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
				createdAt: currentDate
			});
			console.log("User created successfully:", createdUser);
			revalidateUsers();

			if (Object.hasOwn(createdUser, "error")) {
				toast({
					title: createdUser.error
				});
			} else
				toast({
					title: "User Created!"
				});
		} catch (error) {
			toast({
				title: "An error occurred"
			});
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-xl">Sign Up</CardTitle>
					<CardDescription>
						Enter your information to create an account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="first-name">First name</Label>
									<TextField
										type="text"
										id="firstName"
										name="firstName"
										control={control}
										placeholder="Max"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="last-name">Last name</Label>
									<TextField
										id="lastName"
										type="text"
										name="lastName"
										control={control}
										placeholder="Robinson"
										required
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<TextField
									name="email"
									control={control}
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<TextField
									name="password"
									control={control}
									id="password"
									type="password"
									required
								/>
							</div>
							<Button type="submit" className="w-full">
								Create an account
							</Button>
							{/* <Button variant="outline" className="w-full">
								Sign up with GitHub
							</Button> */}
						</div>
						<div className="mt-4 text-center text-sm">
							Already have an account?{" "}
							<Link href="/login" className="underline">
								Sign in
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default Signup;
