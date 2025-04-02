<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Tasks\TaskController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get('/', [DashboardController::class, 'render'])->name('dashboard');
    });
});

Route::prefix('dashboard')->group(function () {
    Route::prefix('tasks')->group(function () {
    Route::get('/', [TaskController::class, 'render'])->name('tasks.index');
    Route::delete('/{task}', [TaskController::class, 'delete'])->name('tasks.destroy');
    Route::post('/tasks/edit', [TaskController::class, 'edit'])->name('tasks.edit');
    Route::get('/edit/{task_id}', [TaskController::class, 'loadEditForm'])->name('tasks.EditForm');
    Route::post('/addData', [TaskController::class, 'addData'])->name('tasks.addData');
    Route::get('/add', [TaskController::class, 'loadAddForm'])->name('tasks.AddForm');
});
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';