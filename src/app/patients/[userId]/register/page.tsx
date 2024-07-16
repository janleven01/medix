import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <main className="container mt-16">
      {/* TODO: OTP Verification | PasskeyModal */}
      <section className="my-auto w-full">
        <div className="max-w-[1150px] max-md:max-w-[500px] mx-auto">
          <div className="flex items-center max-md:justify-center gap-2 mb-10">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-3xl tracking-wide font-bold">Medix</h1>
          </div>
          <RegisterForm user={user} />
          <div className="text-sm mt-20 mb-4">
            <p className="text-muted-foreground xl:text-left">© 2024 Medix</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
