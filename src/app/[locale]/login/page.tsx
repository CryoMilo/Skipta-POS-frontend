"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { createCookie, revalidateUsers } from "../actions";
import { TextField } from "@/components/formInputs/TextField";
import { FormValues } from "@/types/form";
import { loginUser } from "@/services/users";
import { useRouter } from "next/navigation";

export const Login = () => {
	const { toast } = useToast();
	const router = useRouter();
	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: {
			email: "",
			password: ""
		}
	});
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			const checkedUser = await loginUser({
				email: data.email,
				password: data.password
			});
			console.log("User Login successful:", checkedUser);
			revalidateUsers();

			if (Object.hasOwn(checkedUser, "error")) {
				toast({
					variant: "destructive",
					title: checkedUser.error
				});
			} else {
				toast({
					title: "User Login Successful!"
				});
				localStorage.setItem("token", checkedUser?.user.token);
				createCookie(checkedUser?.user.token);
				router.push("/dashboard", { scroll: true });
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "An error occurred!"
			});
		}
	};

	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Login</h1>
					</div>
					<div className="grid gap-4">
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
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<Link
									href="/forgot-password"
									className="ml-auto inline-block text-sm underline">
									Forgot your password?
								</Link>
							</div>
							<TextField
								name="password"
								control={control}
								id="password"
								type="password"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Login
						</Button>
						{/* <Button variant="outline" className="w-full">
							Login with Google
						</Button> */}
					</div>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link href="/sign-up" className="underline">
							Sign up
						</Link>
					</div>
				</div>
			</form>
			<div className="hidden lg:block">
				<Image
					src="/images/login-illustration.svg"
					alt="Login image"
					width={1920}
					height={1080}
					className="h-full w-full p-40"
				/>
			</div>
		</div>
	);
};

export default Login;
