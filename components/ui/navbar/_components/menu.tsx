"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
  {
    title: "Use Cases",
    menu: "use-cases",
    options: [
      {
        label: "Team Alignment",
        emoji: <UserPlus className="text-orange-500" />,
        href: "/team-alignment",
      },
      {
        label: "Sales",
        emoji: <DollarSign className="text-green-500" />,
        href: "/sales",
      },
      {
        label: "Engineering",
        emoji: <Code className="text-blue-500" />,
        href: "/engineering",
      },
      {
        label: "Design",
        emoji: <PaintBucket className="text-indigo-500" />,
        href: "/design",
      },
      {
        label: "Marketing",
        emoji: <BarChart className="text-rose-500" />,
        href: "/marketing",
      },
      {
        label: "Customer Support",
        emoji: <Headphones className="text-orange-500" />,
        href: "/customer-support",
      },
      {
        label: "Product Management",
        emoji: <Settings className="text-gray-500" />,
        href: "/product-management",
      },
      {
        label: "Education",
        emoji: <GraduationCap className="text-green-500" />,
        href: "/education",
      },
    ],
  },

  {
    title: "For Business",
    menu: "for-business",
    options: [
      {
        label: "Bird AI",
        emoji: <Sparkles className="text-indigo-500" />,
        href: "/bird-ai",
      },
      {
        label: "Enterprise",
        emoji: <Building2 className="text-green-500" />,
        href: "/enterprise",
      },
      {
        label: "Bird HQ",
        emoji: <Home className="text-blue-500" />,
        href: "/",
      },
      {
        label: "Customers",
        emoji: <Smile className="text-indigo-500" />,
        href: "/",
      },
      {
        label: "Security",
        emoji: <Lock className="text-rose-500" />,
        href: "/",
      },
      {
        label: "Video Hosting",
        emoji: <Camera className="text-orange-500" />,
        href: "/",
      },
      {
        label: "Video Library",
        emoji: <LibrarySquare className="text-amber-500" />,
        href: "/",
      },
    ],
  },
  {
    title: "Resources",
    menu: "resources",
    options: [
      {
        label: "Blog",
        emoji: <AlignJustify className="text-orange-500" />,
        href: "/",
      },
      {
        label: "Help & Support",
        emoji: <LifeBuoy className="text-green-500" />,
        href: "/",
      },
      {
        label: "Download",
        emoji: <Download className="text-blue-500" />,
        href: "/",
      },
      {
        label: "BirdSDK",
        emoji: <Code2Icon className="text-rose-500" />,
        href: "/",
      },
      {
        label: "Screen Recorder",
        emoji: <Headphones className="text-orange-500" />,
        href: "/screen-recorder",
      },
      {
        label: "Community",
        emoji: <GraduationCap className="text-green-500" />,
        href: "/",
      },
    ],
  },
  {
    title: "Company",
    menu: "company",
    options: [
      {
        label: "About Us",
        emoji: <Info className="text-red-500" />,
        href: "/about-us",
      },
      {
        label: "Careers",
        emoji: <UserCircle2 className="text-green-500" />,
        href: "/careers",
      },
      {
        label: "Newsroom",
        emoji: <Newspaper className="text-blue-500" />,
        href: "/newsroom",
      },
    ],
  },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-24">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        hidden
        text-md
        font-light
        space-x-4
        w-full 
        items-center
        xl:flex
        h-24
        
        "
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
