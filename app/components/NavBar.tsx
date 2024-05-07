import { usePathname, useRouter } from "next/navigation";

import { Icon, IconButton } from "./common";

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={`flex flex-wrap px-2.5 ${className}`}>
      <IconButton
        icon={<Icon className="text-xl" icon="account_balance" />}
        text="Finance"
        active={pathname === "/finance"}
        onClick={() => router.push("/finance")}
      />

      <div className="grow" />
    </nav>
  );
}
