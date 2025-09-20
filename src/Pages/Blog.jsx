import React from "react";
import { useTranslation } from "react-i18next";
import BlogHero from "../components/blog/BlogHero";
import BlogPosts from "../components/blog/BlogPosts";
import Newsletter from "../components/blog/Newsletter";
import "./Blog.css";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="blog-page">
      <BlogHero />
      <BlogPosts />
      <Newsletter />
    </div>
  );
};

export default Blog;
