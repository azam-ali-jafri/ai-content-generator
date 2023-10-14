"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = ({ apiLimitCount = 0, isPro = false }: { apiLimitCount: number; isPro: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return false;
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
