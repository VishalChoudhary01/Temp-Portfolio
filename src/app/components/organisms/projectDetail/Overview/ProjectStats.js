"use client";
import {  FaUser, FaCodeBranch } from "react-icons/fa";
import StatItem from "./StatItem";

export default function ProjectStats({ project, isDarkMode, primaryAccent }) {
  const stats = [
  {
    key: "status",
    visible: !!project.developmentInfo?.status,
    icon: FaCodeBranch,
    label: "Status",
    value: project.developmentInfo?.status,
    type: "status"
  },
  {
    key: "client",
    visible: !!project.client,
    icon: FaUser,
    label: "Client",
    value: project.client,
    type: "common"
  }
];


  return (
    <div className="flex flex-wrap justify-center items-start  md:max-w-4xl md:gap-x-16 gap-x-3  mx-auto font-poppins  ">
      {stats.map((stat) => {
        if (!stat.visible) return null;

        return (
          <StatItem
            key={stat.key}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            primaryAccent={primaryAccent}
          />
        );
      })}
    </div>
  );
}