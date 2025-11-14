import { FaG } from "react-icons/fa6";
import { signIn } from "@/auth";

export const LoginGoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="flex justify-center items-center gap-6 w-full text-white bg-blue-700 font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer">
        <FaG className="size-6" />
        Sign With Google
      </button>
    </form>
  );
};
