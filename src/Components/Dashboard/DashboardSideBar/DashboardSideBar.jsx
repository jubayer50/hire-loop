import {
  LayoutSideContentLeft,
  Bell,
  House,
  Magnifier,
  Briefcase,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashboardSideBar() {
  const navItems = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    {
      icon: Bell,
      href: "/dashboard/recruiter/jobs/new",
      label: "Post A Job",
    },
    {
      icon: Briefcase,
      href: "/dashboard/recruiter/company",
      label: "Company Profile",
    },
  ];

  const navbarContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 md:block">
        {navbarContent}
      </aside>

      <Drawer>
        <Button className={"md:hidden"} variant="secondary">
          <LayoutSideContentLeft />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navbarContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
