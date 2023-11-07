import { useForm } from "react-hook-form"
import TextInput from "../components/smallUI/FormElement/TextInput"
import { useState } from "react"
import { SubHeading } from "../components/smallUI/SubHeading"
import CheckboxInput from "../components/smallUI/FormElement/CheckboxInput"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookSquare } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true)
    const { register, handleSubmit, getValues, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-20">
            <div className="relative py-3 mx-10 w-[95%] sm:w-[500px] sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-8 py-10 backdrop-blur-[5px] shadow-lg sm:rounded-3xl  border border-green-400 w-full">
                    <SubHeading>{isLogin ? "Login Form" : "Registration Form"}</SubHeading>
                    {/* full form section  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {!isLogin &&
                            <TextInput
                                label={"Name"}
                                name={"name"}
                                type={"text"}
                                register={register("name", {
                                    required: isLogin ? false : "Name is Required"
                                })}
                                errors={errors}
                                placeholder={"Enter Your Name"}
                            />}
                        <TextInput
                            label={"Email"}
                            name={"email"}
                            type={"email"}
                            register={register("email", {
                                required: "Email Account is Required"
                            })}
                            errors={errors}
                            placeholder={"Enter Email Address"}
                        />
                        <TextInput
                            label={"Password"}
                            name={"password"}
                            type={"password"}
                            register={register("password", {
                                required: "Password is Required"
                            })}
                            errors={errors}
                            placeholder={"Enter Password"}
                        />
                        {!isLogin &&
                            <TextInput
                                label={"Confirm Password"}
                                name={"cpassword"}
                                type={"password"}
                                register={register("cpassword", {
                                    required: "You must confirm your password",
                                    validate: value => getValues("password") === value || "Password does not match"
                                })}
                                errors={errors}
                                placeholder={"Enter Your Name"}
                            />}
                        {!isLogin &&
                            <CheckboxInput
                                label={<span>I agree with the <span className="link-text">terms and conditions</span>.</span>}
                                name={"isTermsSelected"}
                                register={register("isTermsSelected", {
                                    validate: value => value || "You must agree Terms & Conditions"
                                })}
                                errors={errors}
                            />}
                        <div className="mt-4">
                            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-cyan-500">
                                {isLogin ? "SIGN IN" : "SIGN UP"}
                            </button>
                        </div>
                    </form>
                    <div className="text-center my-2">
                        <span className="relative px-2
                    after:absolute after:top-[50%] after:left-full after:h-[2px] after:w-[70px] after:bg-gray-500
                    before:absolute before:top-[50%] before:right-full before:h-[2px] before:w-[70px] before:bg-gray-500
                    ">OR</span>
                    </div>
                    {/* switch section  */}
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <span
                            onClick={() => setIsLogin(prev => !prev)}
                            className="link-text font-bold"
                        >{isLogin ? "Create Account" : "Sign In"}</span>
                        <span className="w-[1p x] h-[5p x] text-gray-600 mx-2">||</span>
                        <span className="link-text font-bold">Privacy Policy</span>
                    </div>

                    {/* other sign in methods  */}
                    <div className="flex flex-row flex-wrap justify-center mt-4">
                        <FcGoogle className="cursor-pointer mx-2 text-3xl" />
                        <FaFacebookSquare className="text-blue-600 cursor-pointer mx-2 text-3xl" />
                        <BsLinkedin className="text-blue-900 cursor-pointer mx-2 text-3xl" />
                        <BsTwitter className="text-blue-600 cursor-pointer mx-2 text-3xl" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Authentication