<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'image',
        'description',
        'due_date',
    ];

    // public function getImageAttribute($value){
    //     return asset('storage/' . $value);
    // }
}
