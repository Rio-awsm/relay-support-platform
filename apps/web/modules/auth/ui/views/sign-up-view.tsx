import { SignUp } from "@clerk/nextjs"

export const SignupView = () => {
  return (
    <div>
      <SignUp routing="hash" />
    </div>
  )
}


