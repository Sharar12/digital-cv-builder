<?php

namespace App\Http\Controllers;

use App\Models\Cv;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CvController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'fullName' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'skills' => 'required|array',
            'skills.*' => 'string|max:100',
        ]);

        $cv = Cv::create([
            'full_name' => $validated['fullName'],
            'role' => $validated['role'],
            'skills' => $validated['skills'],
        ]);

        return response()->json([
            'message' => 'CV created successfully',
            'data' => $cv,
        ], 201);
    }

    public function index(): JsonResponse
    {
        return response()->json(Cv::latest()->get());
    }

    public function show(int $id): JsonResponse
    {
        $cv = Cv::findOrFail($id);
        return response()->json($cv);
    }
}
