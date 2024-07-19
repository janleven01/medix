import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <main className="flex-between container h-screen max-h-screen gap-6">
      <section className="relative max-h-[700px] lg:h-[95%] h-[90%] w-full rounded-[3rem] my-auto hidden md:block overflow-hidden text-start bg-gradient-to-tl from-white via-primary to-primary">
        <div className="xl:p-18 lg:p-10 p-4">
          <h1 className="lg:text-[55px] text-[44px] leading-tight font-bold">
            Start Booking Appointments Instantly
          </h1>
          <p className="lg:pt-10 pt-4 text-lg 2xl:max-w-[90%]">
            Experience a streamlined platform for effortless appointment
            scheduling.
          </p>
        </div>
        <Image
          src="/assets/images/appointment-img.png"
          alt="onboarding img"
          width={1200}
          height={1200}
          className="absolute  object-contain lg:-bottom-20 -bottom-14 h-[70%]"
          priority
        />
      </section>

      <section className="my-auto w-full py-5">
        <div className="max-w-[860px] mx-auto">
          <div className="flex-center gap-2 md:mb-10 mb-8">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-3xl tracking-wide font-bold">Medix</h1>
          </div>
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="text-muted-foreground xl:text-left text-sm mt-10">
            © 2024 Medix
          </p>
        </div>
      </section>
    </main>
  );
}
