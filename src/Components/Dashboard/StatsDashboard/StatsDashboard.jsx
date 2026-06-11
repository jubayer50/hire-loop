import { FileText, Persons, Thunderbolt, CircleCheck } from "@gravity-ui/icons";
import StatCard from "../StatCard/StatCard";

export default function StatsDashboard() {
  const statsData = [
    {
      id: 1,
      title: "Total Job Posts",
      value: "48",
      icon: FileText,
    },
    {
      id: 2,
      title: "Total Applicants",
      value: "1,284",
      icon: Persons,
    },
    {
      id: 3,
      title: "Active Jobs",
      value: "18",
      icon: Thunderbolt,
    },
    {
      id: 4,
      title: "Jobs Closed",
      value: "32",
      icon: CircleCheck,
    },
  ];

  return (
    <div className="max-w-330 px-3 flex items-center justify-center mt-16">
      {/* Responsive layout matrix matching image_e70ce0.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
}
