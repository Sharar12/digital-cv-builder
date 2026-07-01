<?php

// routes/api.php

use App\Http\Controllers\CvController;
use Illuminate\Support\Facades\Route;

// POST /api/cvs -> CvController@store
Route::post('/cvs', [CvController::class, 'store']);

// GET /api/cvs -> CvController@index (Optional: to fetch all later)
Route::get('/cvs', [CvController::class, 'index']);

// GET /api/cvs/{id} -> CvController@show (Optional: to fetch a specific CV)
Route::get('/cvs/{id}', [CvController::class, 'show']); 