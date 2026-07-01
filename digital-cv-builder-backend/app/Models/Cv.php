<?php

// app/Models/Cv.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cv extends Model
{
    use HasFactory;

    // Columns that can be mass-assigned via JSON payload
    protected $fillable = [
        'full_name',
        'role',
        'skills',
    ];

    // Automatically convert the JSON string from DB into a PHP Array
    protected $casts = [
        'skills' => 'array',
    ];
}