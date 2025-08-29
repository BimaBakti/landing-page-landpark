import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Activity, Image, MessageSquare, Users } from 'lucide-react';

interface DashboardProps {
  stats: {
    activities: number;
    gallery: number;
    testimonials: number;
    users: number;
  };
}

export default function Dashboard({ stats }: DashboardProps) {
  const cards = [
    {
      title: 'Activities',
      count: stats.activities,
      icon: Activity,
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      href: '/admin/activities'
    },
    {
      title: 'Gallery Images',
      count: stats.gallery,
      icon: Image,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      href: '/admin/gallery'
    },
    {
      title: 'Testimonials',
      count: stats.testimonials,
      icon: MessageSquare,
      color: 'bg-gradient-to-br from-pink-500 to-red-500',
      href: '/admin/testimonials'
    },
    {
      title: 'Users',
      count: stats.users,
      icon: Users,
      color: 'bg-gradient-to-br from-red-600 to-red-700',
      href: '/admin/users'
    }
  ];

  return (
    <AdminLayout title="Dashboard">
      <Head title="Admin Dashboard" />
      
      {/* Stats Cards */}
      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-red-200 transition-all duration-200 group"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-xl ${card.color} group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-red-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.count}</p>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/admin/activities/create"
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-white hover:shadow-md hover:border-red-200 transition-all duration-200 group"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors duration-200">
                <Activity className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900 group-hover:text-red-600">Add New Activity</p>
                <p className="text-sm text-gray-500">Create a new activity package</p>
              </div>
            </div>
          </Link>
          
          <Link
            href="/admin/gallery/create"
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-white hover:shadow-md hover:border-red-200 transition-all duration-200 group"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors duration-200">
                <Image className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900 group-hover:text-orange-600">Upload Images</p>
                <p className="text-sm text-gray-500">Add new gallery images</p>
              </div>
            </div>
          </Link>
          
          <Link
            href="/admin/testimonials/create"
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-white hover:shadow-md hover:border-red-200 transition-all duration-200 group"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-pink-50 group-hover:bg-pink-100 transition-colors duration-200">
                <MessageSquare className="h-8 w-8 text-pink-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900 group-hover:text-pink-600">Add Testimonial</p>
                <p className="text-sm text-gray-500">Create new customer review</p>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="flow-root">
              <ul className="-mb-8">
                <li className="relative pb-8">
                  <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                  <div className="relative flex space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-sm">
                      <Activity className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-600">
                        New activity <span className="font-semibold text-red-600">"River Rafting"</span> was added
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </li>
                <li className="relative pb-8">
                  <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                  <div className="relative flex space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-sm">
                      <Image className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-orange-600">5 new images</span> uploaded to gallery
                      </p>
                      <p className="text-xs text-gray-400 mt-1">4 hours ago</p>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="relative flex space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-500 shadow-sm">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-600">
                        New testimonial from <span className="font-semibold text-pink-600">Sarah Johnson</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">6 hours ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </AdminLayout>
  );
}