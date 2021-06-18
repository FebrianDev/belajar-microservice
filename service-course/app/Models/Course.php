<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Course extends Model
{

    use HasFactory;

    protected $table = 'courses';
    protected $fillable = [
        'name', 'certificate', 'thumbnail', 'type', 'status', 'price', 'level', 'description', 'mentor_id'
    ];

    public function mentor(): BelongsTo
    {
        return $this->belongsTo('App\Mentor');
    }

    public function chapters(): HasMany
    {
        return $this->hasMany('App\Chapters')->orderBy('id', 'ASC');
    }

    public function images(): HasMany
    {
        return $this->hasMany('App\ImageCourses')->orderBy('id', 'DESC');
    }
}
