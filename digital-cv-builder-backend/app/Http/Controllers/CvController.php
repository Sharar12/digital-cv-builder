<?php

// app/Http/Controllers/CvController.php

namespace App\Http\Controllers;

use App\Models\Cv;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CvController extends Controller
{
    /**
     * Store a newly created CV in storage.
     */
    public function store(Request $request): JsonResponse
    {
        // 1. Validate the incoming JSON payload
        $validated = $request->validate([
            'fullName' => 'required|string|max:255',
            'role'     => 'required|string|max:255',
            'skills'   => 'required|array',
            'skills.*' => 'string|max:100',
        ]);

        // 2. Map frontend camelCase to database snake_case and save
        $cv = Cv::create([
            'full_name' => $validated['fullName'],
            'role'      => $validated['role'],
            'skills'    => $validated['skills'], // Automatically cast to JSON by Model
        ]);

        // 3. Return the saved data with a 201 Created status
        return response()->json([
            'message' => 'CV created successfully',
            'data'    => $cv
        ], 201);
    }

    public function index(): JsonResponse
    {
        $cvs = Cv::latest()->get();
        return response()->json($cvs);
    }
}