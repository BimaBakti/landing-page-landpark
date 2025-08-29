import React from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/components/admin/AdminLayout';
import ActivityForm from '@/components/admin/ActivityForm';

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
}

interface EditProps {
  activity: Activity;
}

export default function Edit({ activity }: EditProps) {
  const handleSubmit = (data: any) => {
    router.patch(route('admin.activities.update', activity.id), data);
  };

  return (
    <AdminLayout title="Edit Activity">
      <Head title={`Edit ${activity.name} - Admin`} />
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Activity</h1>
        <p className="text-gray-600">Update the details for "{activity.name}"</p>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
        <ActivityForm 
          activity={activity} 
          onSubmit={handleSubmit} 
          isSubmitting={false} 
        />
      </div>
    </AdminLayout>
  );
}