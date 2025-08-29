import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Edit, ArrowLeft, MapPin, Clock, DollarSign } from 'lucide-react';

interface Activity {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  location?: string;
  is_active: boolean;
  order?: number;
  image?: string;
  features?: string[];
  created_at: string;
  updated_at: string;
}

interface ShowProps {
  activity: Activity;
}

export default function Show({ activity }: ShowProps) {
  return (
    <AdminLayout title="Activity Details">
      <Head title={`${activity.name} - Admin`} />
      
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href={route('admin.activities.index')}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Activities
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{activity.name}</h1>
            <p className="text-gray-600">Activity details and information</p>
          </div>
        </div>
        <Link
          href={route('admin.activities.edit', activity.id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Activity
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Information</h2>
            
            {activity.image && (
              <div className="mb-6">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Description</h3>
                <p className="mt-1 text-gray-900">{activity.description}</p>
              </div>

              {activity.features && activity.features.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {activity.features.map((feature, index) => (
                      <li key={index} className="text-gray-900">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">Rp {parseFloat(activity.price).toLocaleString('id-ID')}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{activity.duration}</p>
                </div>
              </div>

              {activity.location && (
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{activity.location}</p>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    activity.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {activity.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                {activity.order !== undefined && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">Display Order</span>
                    <span className="font-medium">{activity.order}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Timestamps</h2>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Created</p>
                <p className="text-sm font-medium">
                  {new Date(activity.created_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="text-sm font-medium">
                  {new Date(activity.updated_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}