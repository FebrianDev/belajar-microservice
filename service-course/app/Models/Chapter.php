<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chapter extends Model
{
    use HasFactory;

    protected $table = 'chapters';

    protected $fillable = ['name','course_id'];

    public function lessons(): HasMany
    {
        return $this->hasMany('App\Lesson')->orderBy('id', 'ASC');
    }
}
