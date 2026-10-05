<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    public function run()
    {
        $sampleBlogs = [
            [
                'title' => 'Can POF Shrink Film Be Recycled? Understanding Its Environmental Impact',
                'category' => 'Packaging Trends',
                'tags' => 'pof shrink, recycling, packaging, environment',
                'author' => 'Dr. Narayani Garg',
                'status' => 'published',
                'published_at' => now()->subDays(5),
                'image' => '/images/testimonials/client-0.webp',
                'excerpt' => 'Discover the recyclable properties of POF shrink film and how modern manufacturing processes reduce environmental impact across industrial supply chains.',
                'content' => '<p>Polyolefin (POF) shrink film is widely considered one of the most versatile and eco-friendly packaging materials available today. Unlike traditional PVC films which release toxic fumes during sealing, POF film is 100% recyclable, non-toxic, and safe for direct food contact.</p><h3>Why POF Shrink Film is Recyclable</h3><p>POF is manufactured primarily from polyolefin resins, making it fully recyclable under plastic recycling Category #4 (LDPE). When collected in clean recycling streams, used POF film can be reprocessed into agricultural plastic sheeting, trash bags, or industrial plastic lumber.</p><h3>Key Benefits for Manufacturers</h3><ul><li>High clarity and tamper resistance</li><li>100% recyclable material structure</li><li>Puncture resistant with minimal waste</li></ul>',
                'meta_description' => 'Learn how POF shrink film can be recycled and its benefits for eco-friendly packaging.',
                'meta_keywords' => 'POF shrink film, plastic recycling, eco packaging',
                'focus_keyword' => 'POF Shrink Film',
                'is_active' => true,
                'is_featured' => true,
                'faqs' => [
                    ['question' => 'Is POF shrink film eco-friendly?', 'answer' => 'Yes, POF film is 100% recyclable and releases no chlorine fumes when sealed.'],
                    ['question' => 'Can it be used for food packaging?', 'answer' => 'Yes, POF shrink film is FDA approved for direct food contact.']
                ],
                'views' => 152,
            ],
            [
                'title' => 'PP Woven Bags vs BOPP Bags for Grain Packaging: What\'s the Difference?',
                'category' => 'PP Woven Bags',
                'tags' => 'pp woven, bopp bags, grain packaging',
                'author' => 'Dr. Narayani Garg',
                'status' => 'published',
                'published_at' => now()->subDays(15),
                'image' => '/images/testimonials/client-1.webp',
                'excerpt' => 'Compare structural strength, moisture barrier properties, and printing aesthetics of standard PP Woven Bags versus laminated BOPP bags for bulk grain storage.',
                'content' => '<p>Choosing the right bulk packaging material for grains, flour, and agricultural products is critical for preserving shelf life and preventing loss during transit.</p><h3>PP Woven Bags vs BOPP Laminated Bags</h3><p>Standard PP Woven bags offer superior tear strength and breathability, making them ideal for grains that require ventilation. On the other hand, BOPP bags feature a reverse-printed Biaxially Oriented Polypropylene layer that delivers photo-quality branding and total moisture resistance.</p>',
                'meta_description' => 'Complete guide comparing PP Woven Bags vs BOPP Bags for grain packaging and industrial storage.',
                'meta_keywords' => 'PP Woven Bags, BOPP Bags, grain packaging',
                'focus_keyword' => 'BOPP Bags',
                'is_active' => true,
                'is_featured' => false,
                'faqs' => [
                    ['question' => 'Which bag is better for moisture resistance?', 'answer' => 'BOPP laminated bags provide 100% moisture protection.']
                ],
                'views' => 98,
            ],
            [
                'title' => 'PP Woven Bags: Types, Uses, Benefits & Manufacturing Process',
                'category' => 'PP Woven Bags',
                'tags' => 'pp woven, manufacturing, industrial bags',
                'author' => 'Dr. Narayani Garg',
                'status' => 'published',
                'published_at' => now()->subDays(30),
                'image' => '/images/testimonials/client-2.webp',
                'excerpt' => 'An in-depth guide on PP woven sack extrusion, circular weaving, lamination, and wide-ranging applications in agriculture and construction.',
                'content' => '<p>Polypropylene (PP) woven sacks are the backbone of modern global supply chains. From cement to fertilizers and rice, these bags provide lightweight durability at minimal cost.</p><h3>The Manufacturing Process</h3><p>1. Polymer Extrusion<br>2. Circular Weaving<br>3. Optional Lamination<br>4. Cutting & Printing</p>',
                'meta_description' => 'Explore the complete manufacturing process and benefits of PP Woven Bags.',
                'meta_keywords' => 'PP Woven Sacks, Manufacturing, Bulk Packaging',
                'focus_keyword' => 'PP Woven Sacks',
                'is_active' => true,
                'is_featured' => true,
                'faqs' => [],
                'views' => 210,
            ],
            [
                'title' => 'Packaging Trends in India for Manufacturing Businesses in 2026',
                'category' => 'Packaging Trends',
                'tags' => 'packaging trends, india 2026, manufacturing',
                'author' => 'Dr. Narayani Garg',
                'status' => 'published',
                'published_at' => now()->subDays(45),
                'image' => '/images/testimonials/client-3.webp',
                'excerpt' => 'Key insights into sustainable packaging mandates, smart QR code tracking, and high-tensile lightweight materials transforming Indian manufacturing.',
                'content' => '<p>As India expands its industrial manufacturing footprint, sustainable and high-durability packaging has become a key competitive advantage.</p>',
                'meta_description' => 'Top packaging trends in India for manufacturing companies in 2026.',
                'meta_keywords' => 'Packaging Trends India, 2026 Manufacturing',
                'focus_keyword' => 'Packaging Trends',
                'is_active' => true,
                'is_featured' => false,
                'faqs' => [],
                'views' => 143,
            ]
        ];

        foreach ($sampleBlogs as $b) {
            $b['slug'] = Str::slug($b['title']);
            Blog::updateOrCreate(['slug' => $b['slug']], $b);
        }
    }
}
