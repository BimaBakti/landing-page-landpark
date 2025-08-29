import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Plus, Minus } from 'lucide-react';

interface Activity {
  id?: number;
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

interface ActivityFormProps {
  activity?: Activity;
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
}

export default function ActivityForm({ activity, onSubmit, isSubmitting }: ActivityFormProps) {
  const { data, setData, processing, errors } = useForm({
    name: activity?.name || '',
    description: activity?.description || '',
    price: activity?.price || '',
    duration: activity?.duration || '',
    location: activity?.location || '',
    is_active: activity?.is_active ?? true,
    order: activity?.order || 0,
    image: activity?.image || '',
    features: activity?.features || [''],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredFeatures = data.features.filter(feature => feature.trim() !== '');
    onSubmit({ ...data, features: filteredFeatures });
  };

  const addFeature = () => {
    setData('features', [...data.features, '']);
  };

  const removeFeature = (index: number) => {
    setData('features', data.features.filter((_, i) => i !== index));
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...data.features];
    newFeatures[index] = value;
    setData('features', newFeatures);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Activity Name *
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price (IDR) *
          </label>
          <input
            type="number"
            id="price"
            min="0"
            step="1000"
            value={data.price}
            onChange={(e) => setData('price', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            required
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration *
          </label>
          <input
            type="text"
            id="duration"
            value={data.duration}
            onChange={(e) => setData('duration', e.target.value)}
            placeholder="e.g., 3-4 hours"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            required
          />
          {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={data.location}
            onChange={(e) => setData('location', e.target.value)}
            placeholder="e.g., Riverside Point A"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="order" className="block text-sm font-medium text-gray-700">
            Display Order
          </label>
          <input
            type="number"
            id="order"
            min="0"
            value={data.order}
            onChange={(e) => setData('order', parseInt(e.target.value) || 0)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
          />
          {errors.order && <p className="mt-1 text-sm text-red-600">{errors.order}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            value={data.image}
            onChange={(e) => setData('image', e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
          />
          {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description *
        </label>
        <textarea
          id="description"
          rows={4}
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
          required
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Features
        </label>
        {data.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => updateFeature(index, e.target.value)}
              placeholder="Enter a feature"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="text-red-600 hover:text-red-800"
              disabled={data.features.length <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="inline-flex items-center text-sm text-red-600 hover:text-red-800"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Feature
        </button>
        {errors.features && <p className="mt-1 text-sm text-red-600">{errors.features}</p>}
      </div>

      <div className="flex items-center">
        <input
          id="is_active"
          type="checkbox"
          checked={data.is_active}
          onChange={(e) => setData('is_active', e.target.checked)}
          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
        />
        <label htmlFor="is_active" className="ml-2 block text-sm text-gray-700">
          Active (visible to visitors)
        </label>
      </div>

      <div className="flex items-center justify-end space-x-4 pt-6 border-t">
        <a
          href={route('admin.activities.index')}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Cancel
        </a>
        <button
          type="submit"
          disabled={processing || isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
        >
          {processing || isSubmitting ? 'Saving...' : activity ? 'Update Activity' : 'Create Activity'}
        </button>
      </div>
    </form>
  );
}