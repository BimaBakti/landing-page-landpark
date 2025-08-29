import React from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/components/admin/AdminLayout';
import ActivityForm from '@/components/admin/ActivityForm';

export default function Create() {
  const handleSubmit = (data: any) => {
    router.post(route('admin.activities.store'), data);
  };

  return (
    <AdminLayout title="Create Activity">
      <Head title="Create Activity - Admin" />
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create New Activity</h1>
        <p className="text-gray-600">Add a new activity package for Quantum Landpark</p>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
        <ActivityForm onSubmit={handleSubmit} isSubmitting={false} />
      </div>
    </AdminLayout>
  );
}