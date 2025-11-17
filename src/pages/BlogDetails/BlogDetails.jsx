import './BlogDetails.css';
import { useParams } from 'react-router-dom';
import { blogData } from '../../data/blogData';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => item.slug === slug);

  // 🟢 Scroll to top when opening blog
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-details container py-5">
        <h2>Blog not found</h2>
        <HashLink to="/#blogs" className="back-link" smooth>
          ← Back to Blogs
        </HashLink>
      </div>
    );
  }

  return (
    <section className="blog-details container py-5" id="top">

      <HashLink to="/#blogs" className="back-link" smooth>
        ← Back to Blogs
      </HashLink>

      <h1 className="blog-details-title">{blog.title}</h1>

      <div className="blog-meta">
        <span>📅 {blog.date}</span>
        <span> • </span>
        <span>⏱ {blog.readTime}</span>
        <span> • </span>
        <span>🏷 {blog.category}</span>
      </div>

      <img src={blog.image} alt={blog.title} className="blog-details-image" />

      <div
        className="blog-details-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>

      <div className="blog-details-footer">
        <p className="keywords-title">Keywords:</p>

        <div className="keyword-tags">
          {blog.keywords.map((key, idx) => (
            <span key={idx} className="keyword-tag">
              #{key}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
