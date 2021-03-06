<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ChapterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MentorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Mentors Route
Route::get('/mentors', [MentorController::class, 'index']);
Route::get('/mentors/{id}', [MentorController::class, 'getById']);
Route::post('/mentors', [MentorController::class, 'create']);
Route::put('/mentors/{id}', [MentorController::class, 'update']);
Route::delete('/mentors/{id}', [MentorController::class, 'destroy']);

//Courses Route
Route::get('/courses', [CourseController::class, 'index']);
Route::post('/courses', [CourseController::class, 'create']);
Route::put('/courses/{id}', [CourseController::class, 'update']);
Route::delete('/courses/{id}', [CourseController::class, 'destroy']);

//Chapter Route
Route::get('/chapters', [ChapterController::class, 'index']);
Route::get('/chapters/{id}', [ChapterController::class, 'show']);
Route::post('/chapters', [ChapterController::class, 'create']);
Route::put('/chapters/{id}', [ChapterController::class, 'update']);
Route::delete('/chapters/{id}', [ChapterController::class, 'destroy']);
