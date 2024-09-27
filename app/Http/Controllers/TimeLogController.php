<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TimeLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return hybridly(component: 'time.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return hybridly(component: 'time.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $message = sprintf('Successfully created Time Log');
        return redirect()->back()->with('success', $message);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return hybridly(component: 'time.edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $message = sprintf('Successfully updated %s', 'Time Log');

        return redirect()->back()->with('success', $message);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $message = sprintf('Successfully deleted %s', 'Time Log');

        return redirect()->back()->with('success', $message);
    }
}
