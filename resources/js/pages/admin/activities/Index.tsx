import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Edit, Eye, Plus, Trash2 } from 'lucide-react';

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

interface IndexProps {
  activities: Activity[];
}

export default function Index({ activities }: IndexProps) {
  const handleDelete = (activity: Activity) => {
    if (confirm(`Are you sure you want to delete "${activity.name}"?`)) {
      router.delete(route('admin.activities.destroy', activity.id));
    }
  };

  return (
    <AdminLayout title="Activities Management">
      <Head title="Activities - Admin" />
      
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Activities</h1>
        <Link
          href={route('admin.activities.create')}
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Activity
        </Link>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        {activities.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <Plus className="h-full w-full" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No activities</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new activity.</p>
            <div className="mt-6">
              <Link
                href={route('admin.activities.create')}
                className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Activity
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {activity.image && (
                          <img
                            className="h-10 w-10 rounded-lg object-cover mr-3"
                            src={activity.image}
                            alt={activity.name}
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {activity.name}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {activity.description}
                          </div>
                          {activity.location && (
                            <div className="text-xs text-gray-400">
                              📍 {activity.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        Rp {parseFloat(activity.price).toLocaleString('id-ID')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{activity.duration}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        activity.is_active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {activity.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <Link
                          href={route('admin.activities.show', activity.id)}
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          href={route('admin.activities.edit', activity.id)}
                          className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(activity)}
                          className="text-red-600 hover:text-red-900 transition-colors duration-200"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}