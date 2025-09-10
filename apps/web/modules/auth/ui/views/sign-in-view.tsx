import { SignIn } from "@clerk/nextjs"

export const SigninView = () => {
  return (
    <div>
      <SignIn routing="hash" />
    </div>
  )
}

