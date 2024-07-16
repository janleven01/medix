import Image from "next/image";

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className="flex flex-col gap-5 flex-1 p-5 rounded-xl border border-secondary bg-gradient-to-bl from-black from-50% to-secondary"
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="appointments"
          className="size-8 w-fit"
        />
        <h2 className="text-3xl font-bold text-white">{count}</h2>
      </div>

      <p className="text-sm">{label}</p>
    </div>
  );
};