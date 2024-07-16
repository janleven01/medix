import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("flex-center py-2  gap-2 rounded-full", {
        "bg-green-900": status === "scheduled",
        "bg-blue-900": status === "pending",
        "bg-red-900": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-sm font-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-600": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};