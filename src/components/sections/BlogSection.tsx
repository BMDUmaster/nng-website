import Link from "next/link";
import { homeBlogs } from "@/content/blogs";
import { asset } from "@/lib/assets";

export function BlogSection() {
  return (
    <section className="blogs-section section-space" aria-labelledby="blogs-title">
      <div className="section-wrap">
        {/* Section Header Matching Reference Image 2 */}
        <div className="blogs-header centered">
          <p className="blogs-kicker">Blogs</p>
          <h2 id="blogs-title" className="blogs-main-title">
            Explore our latest Blogs
          </h2>
          <p className="blogs-subtitle">
            Insights on Vedic wisdom, sacred festivals, auspicious muhurats, and practical life transformation.
          </p>
        </div>

        {/* 3-Column Blog Cards Grid Matching Reference Image 2 */}
        <div className="blogs-grid">
          {homeBlogs.map((blog) => (
            <article className="blog-card" key={blog.id}>
              {/* Card Top: Banner with Illustration & Overlay Text */}
              <div className="blog-card-media">
                <img
                  src={asset(blog.image)}
                  alt={blog.title}
                  className="blog-card-image"
                  loading="lazy"
                  width={640}
                  height={360}
                />
                <div className="blog-media-overlay">
                  {/* Top Author Tag */}
                  <div className="blog-author-tag">
                    <img
                      src={asset("/images/narayani-portrait-480.webp")}
                      alt={blog.author}
                      className="blog-author-avatar"
                      width={28}
                      height={28}
                    />
                    <span className="blog-author-name">{blog.author}</span>
                  </div>

                  {/* Banner Center Title */}
                  <div className="blog-banner-text">
                    <h3 className="blog-banner-heading">{blog.bannerTitle}</h3>
                    <p className="blog-banner-sub">{blog.bannerSubtitle}</p>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Content, Description & Link */}
              <div className="blog-card-body">
                <span className="blog-category-badge">{blog.category}</span>
                <h4 className="blog-post-title">
                  <Link href={`#blog-${blog.slug}`} className="blog-title-link">
                    {blog.title}
                  </Link>
                </h4>
                <p className="blog-post-desc">{blog.description}</p>

                <div className="blog-card-footer">
                  <span className="blog-read-time">{blog.readTime}</span>
                  <Link href={`#blog-${blog.slug}`} className="blog-read-more-btn">
                    <span>Read Article</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
