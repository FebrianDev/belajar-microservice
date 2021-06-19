<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Mentor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    public function index(Request $request) {
        $courses = Course::query();

        $q = $request->query('q');
        $status = $request->query('status');

        $courses->when($q, function ($query) use ($q){
            return $query->whereRaw("name LIKE '%".strtolower($q)."%'");
        });

        $courses->when($status, function ($query) use ($status){
            return $query->where('status','=',$status);
        });

        return response()->json([
            'status'=>'success',
            'data'=>$courses->paginate(5)
        ]);
    }

    public function create(Request $request): \Illuminate\Http\JsonResponse
    {
        $rules = [
            'name' => 'required|string',
            'certificate' => 'required|boolean',
            'thumbnail' => 'string|url',
            'type' => 'required|in:free,premium',
            'status' => 'required|in:draft, published',
            'price' => 'integer',
            'level' => 'required|in:all-level,beginner,intermediate,advance',
            'mentor_id' => 'required|integer',
            'description' => 'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ]);
        }

        $mentorId = $request->input('mentor_id');
        $mentor = Mentor::find($mentorId);

        if(!$mentor){
            return response()->json([
                'status'=>'error',
                'message'=>'mentor not found'
            ],404);
        }

        $course = Course::create($data);
        return response()->json([
            'status'=>'success',
            'data'=>$course
        ]);

    }

    public function update(Request $request, $id) {
        $rules = [
            'name' => 'required|string',
            'certificate' => 'required|boolean',
            'thumbnail' => 'string|url',
            'type' => 'required|in:free,premium',
            'status' => 'required|in:draft, published',
            'price' => 'integer',
            'level' => 'required|in:all-level,beginner,intermediate,advance',
            'mentor_id' => 'required|integer',
            'description' => 'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if($validator->fails()){
            return response()->json([
                'status'=>'error',
                'message'=>$validator->errors()
            ]);
        }

        $course = Course::find($id);

        if(!$course){
            return response()->json([
                'status'=>'error',
                'message'=>'course not found'
            ],404);
        }

        $mentorId = $request->input('mentor_id');
        if($mentorId){
            $mentor = Mentor::find($mentorId);

            if(!$mentor){
                return response()->json([
                    'status'=>'error',
                    'message'=>'mentor not found'
                ],404);
            }
        }

        $course->fill($data);
        $course->save();

        return response()->json([
            'status'=>'success',
            'data'=>$course
        ]);
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $course = Course::find($id);

        if(!$course){
            return response()->json([
                'status'=>'error',
                'message'=>'course not found'
            ],404);
        }

        $course->delete();

        return response()->json([
            'status'=>'success',
            'message'=>'course deleted'
        ]);
    }
}
