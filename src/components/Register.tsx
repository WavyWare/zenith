import {ThemeProvider} from "@/components/ThemeProvider.tsx";
import {ItalicHeader} from "@/components/ui/italic-header.tsx";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator";
import {checkPasswordStrength, getStrengthDetails} from "@/components/passwordStrength.ts";
import React, {useState} from "react";
import {validateEmail} from "@/components/validateEmail.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {Eclipse, Undo2} from "lucide-react";

type PasswordStrength = "Weak" | "Medium" | "Strong";

function Register() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState<PasswordStrength>("Weak");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("You entered an invalid email");
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            // here i should enter some backend stuff :rofl: im a frontend dev
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(checkPasswordStrength(newPassword));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!validateEmail(newEmail)) {
            setEmailError("You entered not valid email")
        } else {
            setEmailError("");
        }
    }

    const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const newPassword = e.target.value;
        setConfirmPassword(newPassword);
        if (!(password === newPassword)) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    }

    const { color, width, label } = getStrengthDetails(strength);
    return (
        <>
            <ThemeProvider>
                <Button className={"fixed top-[1rem] left-[1rem]"}><Undo2 /><Link to={"/"}> Go to Home page</Link></Button>
                <div className="flex h-screen text-start container md:mx-auto justify-center items-center space-x-2">
                    <div className={"flex flex-col space-y-4"}>
                        <div className={"flex justify-center space-x-5"}>
                            <ItalicHeader size={"3rem"} className={"md:text-[5rem]"}>Register </ItalicHeader>
                            <h1 className="md:text-[5rem] block text-[3rem]">
                                to zenith!
                            </h1>
                        </div>
                        <div className="w-full max-w-sm items-center flex justify-center mx-auto">
                            <form className={"flex flex-col space-y-2"} onSubmit={handleSubmit}>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder="What's your name?"/>

                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Type your email"
                                       onChange={handleEmailChange}/>
                                <span
                                    className={"font-semibold text-red-500 transition-all block"}>{emailError ? emailError : ""}</span>

                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Type your password" value={password}
                                       onChange={handlePasswordChange}/>

                                <div
                                    className="relative w-full max-w-md h-4 bg-background border-accent border rounded-3xl overflow-hidden my-3">
                                    <div className="absolute top-0 left-1/3 h-full border-l-2 border-gray-300"></div>
                                    <div className="absolute top-0 left-2/3 h-full border-l-2 border-gray-300"></div>
                                    <div
                                        className={`h-full transition-all ease-in-out duration-500 ${color}`}
                                        style={{width}}
                                    ></div>
                                </div>
                                <div className="text-lg font-semibold">{label}</div>
                                <span className={"font-semibold"}>your password must meets requirements such as:</span>
                                <ul className={"list-disc list-inside"}>
                                    <li>at least 8 characters</li>
                                    <li>at least one digit, capital letter and special sign</li>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <li> variety of characters.</li>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>it means that it cannot include repeating characters like "aaaaa" or
                                                    only letters or digits.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ul>
                                <Separator/>

                                <Label htmlFor="confirm">Confirm password</Label>
                                <Input type="password" id="confirm" placeholder="Confirm your password"
                                       onChange={handlePasswordConfirmationChange}/>
                                <span
                                    className={"font-semibold text-red-500 transition-all block"}>{confirmPasswordError ? confirmPasswordError : ""}</span>
                                <div className={"flex justify-end"}>
                                    <Button type={"submit"}>Start using zenith! <Eclipse/></Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default Register;