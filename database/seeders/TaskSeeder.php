<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) { 
            DB::table('tasks')->insert([
                'name' => 'Task ' . $i,
                'description' => 'Description ' . $i,
                'due_date' => Carbon::parse('2025-01-01')->addDays($i),
            ]);
        }
    }
}
