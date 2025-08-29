<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::ordered()->get();

        return Inertia::render('admin/activities/Index', [
            'activities' => $activities,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/activities/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration' => 'required|string',
            'features' => 'nullable|array',
            'location' => 'nullable|string',
            'is_active' => 'boolean',
            'order' => 'nullable|integer|min:0',
        ]);

        Activity::create($validated);

        return redirect()->route('admin.activities.index')
            ->with('success', 'Activity created successfully.');
    }

    public function show(Activity $activity)
    {
        return Inertia::render('admin/activities/Show', [
            'activity' => $activity,
        ]);
    }

    public function edit(Activity $activity)
    {
        return Inertia::render('admin/activities/Edit', [
            'activity' => $activity,
        ]);
    }

    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration' => 'required|string',
            'features' => 'nullable|array',
            'location' => 'nullable|string',
            'is_active' => 'boolean',
            'order' => 'nullable|integer|min:0',
        ]);

        $activity->update($validated);

        return redirect()->route('admin.activities.index')
            ->with('success', 'Activity updated successfully.');
    }

    public function destroy(Activity $activity)
    {
        $activity->delete();

        return redirect()->route('admin.activities.index')
            ->with('success', 'Activity deleted successfully.');
    }
}
