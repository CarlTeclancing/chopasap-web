import { useState } from "react";
import { COLORS } from "../constants/constants";
import BlogCard from "../components/BlogCard";
import FeaturedBlogCard from "../components/FeaturedBlogCard";
import { useBlogStore } from "../store/blogStore";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const posts = useBlogStore((state) => state.posts);

  const categories = ["All", "Stories", "Updates", "Tips", "News"];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter(
          (post) =>
            post.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="py-20 md:py-25 px-4 bg-fixed md:px-6 relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1920&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up">
            Blog & Stories
          </h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fade-up-delay-1">
            Insights, updates, and stories from the ChopaSap family. Stay tuned
            for the latest in food delivery and logistics innovation.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Category Filter */}
        <div className="flex gap-2 md:gap-4 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat.toLowerCase()
                  ? "text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
              style={
                selectedCategory === cat.toLowerCase()
                  ? { backgroundColor: COLORS.brown }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === "all" && featuredPost && (
          <FeaturedBlogCard {...featuredPost} />
        )}

        {/* Blog Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === "all" ? "Latest Articles" : "Articles"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
