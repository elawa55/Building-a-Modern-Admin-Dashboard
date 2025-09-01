import {
  Bell,
  Clock,
  CreditCard,
  Database,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";

const activities = [
  {
    id: 1,
    icon: User,
    title: "New user registered",
    description: "John Smith created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "New order received",
    description: "Order #3847 for $2,399",
    time: "5 minutes ago",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Payment processed",
    description: "Payment of $1,199 completed",
    time: "12 minutes ago",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 4,
    icon: Database,
    title: "System update",
    description: "Database backup completed",
    time: "1 hour ago",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    id: 5,
    icon: Bell,
    title: "Low stock alert",
    description: "iPhone 15 Pro stock is low",
    time: "2 hours ago",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
];

export default function Activityfeed() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Activity Feed
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Recent System Activities
            </p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Activities List */}
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div
                className={`p-2 rounded-lg ${activity.bgColor} ${activity.color}`}
              >
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {activity.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
