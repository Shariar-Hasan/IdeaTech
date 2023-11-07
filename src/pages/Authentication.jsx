import { useForm } from "react-hook-form"
import TextInput from "../components/smallUI/FormElement/TextInput"
import { useState } from "react"
import { SubHeading } from "../components/smallUI/SubHeading"

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(false)
    const { register, handleSubmit, getValues, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="relative py-3 mx-10 w-[95%] sm:w-[500px] sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-8 py-10 backdrop-blur-[5px] shadow-lg sm:rounded-3xl  border border-green-400 w-full">
                    <SubHeading>{isLogin ? "Login Form" : "Registration Form"}</SubHeading>
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
                </div>
            </div>
        </div>
    )
}

export default Authentication