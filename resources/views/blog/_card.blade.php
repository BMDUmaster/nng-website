{{-- One article as a card, in the reading-room design: cover with its category, reading time, title, summary. --}}
@php
    $cardMinutes = max(1, (int) ceil(str_word_count(strip_tags($post->content ?? '')) / 200));
    $cardImage = $post->image ? (Str::startsWith($post->image, ['http://', 'https://']) ? $post->image : asset($post->image)) : null;
@endphp
<article class="rr-card">
    <div class="rr-card-img">
        @if ($cardImage)
            <img class="rr-banner" src="{{ $cardImage }}" alt="{{ $post->title }}" width="1280" height="800" loading="lazy" decoding="async">
        @else
            <span class="bl-noimg" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 9c-3-2-7-3-11-2v18c4-1 8 0 11 2 3-2 7-3 11-2V7c-4-1-8 0-11 2Z"/><path d="M16 9v18"/></svg></span>
        @endif
        @if ($post->category)
            <span class="rr-chip">{{ $post->category }}</span>
        @endif
    </div>
    <div class="rr-card-body">
        <p class="rr-meta">{{ ($post->published_at ?? $post->created_at)->format('d M Y') }} · {{ $cardMinutes }} min read</p>
        <h3><a href="{{ route('blog.show', $post->slug) }}">{{ $post->title }}</a></h3>
        <p>{{ $post->excerpt ?: Str::limit(trim(strip_tags($post->content ?? '')), 130) }}</p>
        <span class="rr-read" aria-hidden="true">Read the article <span>→</span></span>
    </div>
</article>
