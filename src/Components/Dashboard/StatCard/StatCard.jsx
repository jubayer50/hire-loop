import { Card } from "@heroui/react";

export default function StatCard({ title, value, icon: Icon }) {
  return (
    <Card
      className="bg-[#18181b] border border-neutral-800 rounded-2xl w-full max-w-[320px] p-6 flex flex-col gap-5 items-start"
      variant="default"
    >
      {/* Icon Wrapper */}
      <div className="bg-[#27272a] p-2 rounded-xl flex items-center justify-center border border-neutral-700/50">
        {Icon && <Icon className="w-5 h-5 text-neutral-300" />}
      </div>

      {/* Content Section utilizing the correct HeroUI v3 API */}
      <Card.Content className="p-0 m-0 flex flex-col gap-2 w-full">
        <p className="text-xs text-neutral-400 font-medium tracking-wide">
          {title}
        </p>
        <h2 className="text-3xl font-semibold text-white tracking-tight">
          {value}
        </h2>
      </Card.Content>
    </Card>
  );
}
