<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;

class DashboardController extends Controller
{
    public function render()
    {
        $tasks = Task::all();
        return Inertia::render('dashboard', ['tasks' => $tasks]);
    }
}
