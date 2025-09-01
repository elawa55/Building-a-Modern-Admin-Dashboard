import { MoreHorizontal, TrendingUp } from "lucide-react";
import React from "react";

const recentOrders = [
  {
    id: "#3847",
    product: "MacBook Pro 16”",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3849",
    product: "AirPods Pro",
    amount: "$249",
    status: "completed",
    date: "2024-01-16",
  },
  {
    id: "#3850",
    product: "iPad Air",
    amount: "$599",
    status: "cancelled",
    date: "2024-01-14",
  },
];

// ✅ Top Products Data
const topProducts = [
  {
    name: "MacBook Pro 16”",
    revenues: "$45,200",
    sales: 120,
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    revenues: "$38,700",
    sales: 210,
    change: "+18%",
  },
  {
    name: "iPad Air",
    revenues: "$22,350",
    sales: 95,
    change: "+7%",
  },
  {
    name: "AirPods Pro",
    revenues: "$15,800",
    sales: 300,
    change: "+25%",
  },
  {
    name: "Apple Watch Ultra",
    revenues: "$12,400",
    sales: 85,
    change: "+5%",
  },
];

export default function TableSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow">
      {/* Recent Orders Section */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest customer orders
            </p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="text-left p-4 font-semibold text-slate-600">
                Order ID
              </th>
              <th className="text-left p-4 font-semibold text-slate-600">
                Product
              </th>
              <th className="text-left p-4 font-semibold text-slate-600">
                Amount
              </th>
              <th className="text-left p-4 font-semibold text-slate-600">
                Status
              </th>
              <th className="text-left p-4 font-semibold text-slate-600">
                Date
              </th>
              <th className="text-left p-4 font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <td className="p-4 font-medium text-blue-600">{order.id}</td>
                <td className="p-4 text-slate-800 dark:text-slate-200">
                  {order.product}
                </td>
                <td className="p-4 text-slate-800 dark:text-slate-200">
                  {order.amount}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {order.date}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-slate-400 hover:text-slate-600 dark:text-slate-300 dark:hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Products Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border-t border-slate-200 dark:border-slate-700 overflow-hidden mt-6">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Best performing products
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {product.sales} sales
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.revenues}
                </p>
                <div className="flex items-center space-x-1 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>{product.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
