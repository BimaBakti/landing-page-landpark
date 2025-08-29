import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
  LayoutDashboard, 
  Activity, 
  Image, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title = 'Admin Dashboard' }: AdminLayoutProps) {
  const { url } = usePage();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Activities', href: '/admin/activities', icon: Activity },
    { name: 'Gallery', href: '/admin/gallery', icon: Image },
    { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    return url === href || (href !== '/admin' && url.startsWith(href));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          role="button"
          aria-label="Close sidebar"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-red-600 to-red-700">
          <h1 className="text-white font-bold text-lg">Quantum Landpark</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white lg:hidden hover:bg-red-500 rounded-md p-1 transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="mt-8" role="navigation" aria-label="Admin navigation">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 group
                  ${isActive(item.href)
                    ? 'bg-red-50 text-red-700 border-r-4 border-red-600 shadow-sm'
                    : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                  }
                `}
              >
                <Icon size={20} className={`mr-3 transition-colors duration-200 ${isActive(item.href) ? 'text-red-600' : 'group-hover:text-red-500'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-200">
          <Link
            href="/logout"
            method="post"
            as="button"
            className="flex items-center w-full text-gray-600 hover:text-red-600 text-sm font-medium transition-colors duration-200 group"
          >
            <LogOut size={20} className="mr-3 group-hover:text-red-500" />
            Logout
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-500 hover:text-gray-700 lg:hidden hover:bg-gray-100 rounded-md p-2 transition-colors duration-200"
                aria-label="Open sidebar"
              >
                <Menu size={20} />
              </button>
              <h2 className="ml-4 text-xl font-semibold text-gray-800 lg:ml-0">{title}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Admin</span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}