import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";

const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    progressColor: "from-emerald-500 to-teal-500",
    progress: 75,
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    progressColor: "from-blue-500 to-indigo-500",
    progress: 60,
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    progressColor: "from-purple-500 to-pink-500",
    progress: 55,
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
    progressColor: "from-orange-500 to-red-500",
    progress: 35,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mt-2">
                {stat.value}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs Last month
                </span>
              </div>
            </div>
            {/* Icon with hover effect */}
            <div
              className={`p-3 rounded-full ${stat.bgColor} flex items-center justify-center transition-transform duration-300 hover:scale-110`}
            >
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-3 bg-gradient-to-r ${stat.progressColor} rounded-full transition-all duration-700`}
              style={{ width: `${stat.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
