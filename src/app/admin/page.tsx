import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";

const AdminPage = async () => {

  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-5">
      <header className="sticky top-0 z-20  flex-between rounded-2xl px-[5%] py-10 xl:px-12 bg-background">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/assets/icons/logo.svg"
            height={40}
            width={40}
            alt="Logo"
            className="h-8 w-fit cursor-pointer"
          />
          <h1 className="text-2xl tracking-wide font-bold cursor-pointer">Medix</h1>
        </Link>
        <p className="font-semibold">Admin Dashboard</p>
      </header>

      <main className="flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12">
        <section className="w-full space-y-4">
          <h1 className="text-4xl font-semibold">Hello 👋</h1>
          <p className="text-sm text-muted-foreground">
          Begin your day by managing new appointments
          </p>
        </section>

        <section className="flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
 