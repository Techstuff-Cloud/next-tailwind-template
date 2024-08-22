"use client";

import {
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon, current: false },
  { name: "Users", href: "/admin/users", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Calendar",
    href: "/admin/calendar",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Documents",
    href: "/admin/documents",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: ChartPieIcon,
    current: false,
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-surface-800 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Image
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
            height={32}
            width={32}
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        pathName.includes(item.name.toLowerCase())
                          ? "bg-indigo-700 text-white"
                          : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                      )}
                    >
                      <item.icon
                        className={classNames(
                          pathName.includes(item.name.toLowerCase())
                            ? "text-white"
                            : "text-indigo-200 group-hover:text-white",
                          "h-6 w-6 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-indigo-200">
                Your teams
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={classNames(
                        team.current
                          ? "bg-indigo-700 text-white"
                          : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
