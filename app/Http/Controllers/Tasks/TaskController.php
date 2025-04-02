<?php

namespace App\Http\Controllers\Tasks;

use Inertia\Inertia;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
   protected $fillable = ['name', 'description', 'due_date'];
   // done
   public function render(){
      $tasks = Task::all();
      return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
   }

   // done
   public function delete(Task $task){
      $task->delete();
      return redirect()->back()->with('success', 'Task deleted successfully');
   }

   // done
   public function edit(Request $request){
     $task = Task::find($request->id);

     if(!$task){
      return redirect()->back()->with('error', 'Task not found');
     }

     $task->update([
      'name' => $request->name,
      'description' => $request->description,
      'due_date' => $request->due_date
     ]);
     
     return redirect()->route('tasks.index')->with('success', 'Task updated successfully');
   }

   // done
   public function loadEditForm($task_id){
      $task_details = Task::findorFail($task_id);
      return Inertia::render('Tasks/EditForm', ['task' => $task_details]);
   }

   public function loadAddForm(){
      return Inertia::render('Tasks/AddForm');
   }

   // done
   public function addData(Request $request) {
      $request->validate([
          'name' => 'required|string|max:255',
          'description' => 'nullable|string',
          'due_date' => 'nullable|date',
      ]);
  
      Task::create([
          'name' => $request->name,
          'description' => $request->description,
          'due_date' => $request->due_date,
      ]);  

      return redirect()->route('tasks.index')->with('success', 'Task added successfully');
  }
  

}