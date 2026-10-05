<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'status',
        'published_at',
        'category',
        'tags',
        'author',
        'image',
        'excerpt',
        'content',
        'meta_description',
        'meta_keywords',
        'focus_keyword',
        'is_active',
        'is_featured',
        'faqs',
        'views',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
        'faqs' => 'array',
        'views' => 'integer',
    ];

    /**
     * Auto-generate unique slug from title if not provided.
     */
    public static function generateSlug($title, $id = 0)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (static::where('slug', $slug)->where('id', '!=', $id)->exists()) {
            $slug = "{$originalSlug}-{$count}";
            $count++;
        }

        return $slug;
    }
}
