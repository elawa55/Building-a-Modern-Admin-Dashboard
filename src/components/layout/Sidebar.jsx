import React, { useState } from "react";
import {
  Zap,
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function Sidebar({
  collapsed,
  onToggle,
  currentPage,
  onPageChange,
}) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpand = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const menuItems = [
    { id: 1, icon: LayoutDashboard, label: "Dashboard", badge: "New" },
    {
      id: 2,
      icon: BarChart3,
      label: "Analytics",
      submenu: ["Overview", "Reports", "Insights"],
    },
    {
      id: 3,
      icon: Users,
      label: "Users",
      count: "2.4k",
      submenu: ["All Users", "Roles & Permissions", "User Activity"],
    },
    {
      id: 4,
      icon: ShoppingCart,
      label: "E-commerce",
      submenu: [
        { label: "Products", count: "120" },
        { label: "Orders", count: "87" },
        { label: "Customers", count: "56" },
      ],
    },
    { id: 5, icon: Package, label: "Inventory", count: "847" },
    { id: 6, icon: CreditCard, label: "Transactions" },
    { id: 7, icon: MessageSquare, label: "Messages", badge: "12" },
    { id: 8, icon: Calendar, label: "Calendar" },
    { id: 9, icon: FileText, label: "Reports" },
    { id: 10, icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col transition-all duration-300`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto space-y-1">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    toggleExpand(item.id);
                  } else {
                    onPageChange && onPageChange(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  {React.createElement(item.icon, {
                    className: `w-5 h-5 ${isActive ? "text-white" : ""}`,
                  })}
                  {!collapsed && (
                    <>
                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-white" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full ml-2">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full ml-2">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {!collapsed && item.submenu && !isActive && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedItems.has(item.id) ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.submenu.map((subitem, index) => {
                    const label =
                      typeof subitem === "string" ? subitem : subitem.label;
                    const count =
                      typeof subitem === "object" && subitem.count
                        ? subitem.count
                        : null;
                    const subActive = currentPage === `${item.id}-${label}`;

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          onPageChange && onPageChange(`${item.id}-${label}`)
                        }
                        className={`w-full flex items-center justify-between text-left p-2 text-sm rounded-lg transition-all
                          ${
                            subActive
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                          }`}
                      >
                        <span>{label}</span>
                        {count && (
                          <span className="px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1502685104226-1c2b0f8d3a4e?auto=format&fit=crop&w=200&q=60"
            alt="User Avatar"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Alex Johnson
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
