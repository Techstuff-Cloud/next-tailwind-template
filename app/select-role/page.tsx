"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ROLES } from "@/lib/constants/roles";
import { useUserContext } from "@/lib/stores/users";
import Link from "next/link";

const SelectRole = () => {
  const { userState } = useUserContext();

  return (
    <>
      <div className="flex justify-center w-full"></div>
      <div className="flex flex-col justify-center items-center w-full min-h-screen gap-5">
        <h1 className="text-3xl font-bold">Select Role</h1>
        <div className="flex justify-center items-center gap-3">
          {userState.roles?.map((role) => (
            <Link href={ROLES[role]?.path} key={role} replace>
              <Card>
                <CardContent className="pt-6">{ROLES[role]?.label}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectRole;
