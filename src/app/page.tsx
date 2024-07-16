import PatientForm from "@/components/forms/PatientForm";
import PassKeyModal from "@/components/PassKeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home({searchParams}: SearchParamProps) {

  const isAdmin = searchParams.admin === 'true'
  
  
  return (
    <main className="flex-between container h-screen max-h-screen gap-6">

      {isAdmin && <PassKeyModal/>}
      
      <section className="my-auto w-full">
        <div className="max-w-[500px] mx-auto">
          <div className="flex items-center max-md:justify-center gap-2 mb-10">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-3xl tracking-wide font-bold">Medix</h1>
          </div>
          <PatientForm />
          <div className="flex justify-between text-sm mt-10">
            <p className="text-muted-foreground xl:text-left">
              © 2024 Medix
            </p>
            <Link href="/?admin=true" className="text-green-500 cursor-pointer">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative max-h-[750px] h-[95%] w-full rounded-[3rem] hidden md:block overflow-hidden text-start bg-gradient-to-tl from-white via-primary to-primary"
      >
        <div className="xl:p-16 lg:p-8 p-6">
          <h1 className="lg:text-6xl text-[45px] leading-tight font-bold">
            Get started with appointments
          </h1>
          <p className="lg:pt-10 pt-6 lg:text-lg text-base 2xl:max-w-[90%]">Navigate through a user-friendly platform designed to simplify the booking process</p>
        </div>
        <Image
          src="/assets/images/onboarding-img.png"
          alt="onboarding img"
          width={1200}
          height={1200}
          className="absolute lg:-bottom-40 -bottom-14 object-contain h-[80%]"
          priority
        />
      </section>
    </main>
  );
}
