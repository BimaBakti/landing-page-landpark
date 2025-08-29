import React from 'react';
import { Head } from '@inertiajs/react';
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
      color: 'bg-blue-500',
      href: '/admin/activities'
    },
    {
      title: 'Gallery Images',
      count: stats.gallery,
      icon: Image,
      color: 'bg-green-500',
      href: '/admin/gallery'
    },
    {
      title: 'Testimonials',
      count: stats.testimonials,
      icon: MessageSquare,
      color: 'bg-purple-500',
      href: '/admin/testimonials'
    },
    {
      title: 'Users',
      count: stats.users,
      icon: Users,
      color: 'bg-red-500',
      href: '/admin/users'
    }
  ];

  return (
    <AdminLayout title="Dashboard">
      <Head title="Admin Dashboard" />
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${card.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/admin/activities/create"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 group"
          >
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-500 group-hover:text-blue-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Add New Activity</p>
                <p className="text-sm text-gray-500">Create a new activity package</p>
              </div>
            </div>
          </a>
          
          <a
            href="/admin/gallery/create"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 group"
          >
            <div className="flex items-center">
              <Image className="h-8 w-8 text-green-500 group-hover:text-green-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Upload Images</p>
                <p className="text-sm text-gray-500">Add new gallery images</p>
              </div>
            </div>
          </a>
          
          <a
            href="/admin/testimonials/create"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 group"
          >
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-purple-500 group-hover:text-purple-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Add Testimonial</p>
                <p className="text-sm text-gray-500">Create new customer review</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                      <Activity className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-500">
                        New activity <span className="font-medium text-gray-900">"River Rafting"</span> was added
                      </p>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                </li>
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                      <Image className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">5 new images</span> uploaded to gallery
                      </p>
                      <p className="text-xs text-gray-400">4 hours ago</p>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="relative flex space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-500">
                        New testimonial from <span className="font-medium text-gray-900">Sarah Johnson</span>
                      </p>
                      <p className="text-xs text-gray-400">6 hours ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}