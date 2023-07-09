import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { GoUnverified } from "react-icons/go";
import "./style.scss";

export const Posts = [
    {
      title: "Healthy Eating Habits for a Balanced Lifestyle",
      excerpt:
        "Discover simple tips for maintaining a healthy diet and lifestyle. Use a common date for demonstration purposes.",
      author: "John Smith",
      minutes: 10,
      author_image: "https://source.unsplash.com/random/800x600?lifestyle",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?lifestyle",
      verified: true,
      date_posted: "Dec 01",
      category: "Lifestyle",
    },
    // Object 2
    {
      title: "The Future of Technology: Exploring Artificial Intelligence",
      excerpt:
        "Learn about the advancements and potential applications of AI. Use a common date for demonstration purposes.",
      author: "Emily Johnson",
      minutes: 15,
      author_image: "https://source.unsplash.com/random/800x600?lifestyle",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: false,
      date_posted: "Dec 20",
      category: "Technology",
    },
    {
      title: "Balancing work and life in the tech industry",
      excerpt:
        "Maintaining a healthy work-life balance. Use a common date for demonstration purposes.",
      author: "John Doe",
      minutes: 5,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: true,
      date_posted: "May 10",
      category: "Tech",
    },
    {
      title: "Sustainable living: A comprehensive guide",
      excerpt:
        "Making your lifestyle eco-friendly. Use a common date for demonstration purposes.",
      author: "Jane Smith",
      minutes: 7,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: true,
      date_posted: "May 27",
      category: "Lifestyle",
    },
    {
      title: "AI: Transforming the tech world",
      excerpt:
        "The future of tech with AI. Use a common date for demonstration purposes.",
      author: "Jack Johnson",
      minutes: 6,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: false,
      date_posted: "May 02",
      category: "Tech",
    },
    {
      title: "Mindfulness in daily life",
      excerpt:
        "The impact of mindfulness on lifestyle. Use a common date for demonstration purposes. ",
      author: "Emily Brown",
      minutes: 8,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: false,
      date_posted: "May 10",
      category: "Lifestyle",
    },
    {
      title: "Adapting to remote work",
      excerpt:
        "Remote work in the tech industry. Innovative startups shaping the future. Innovative startups shaping the future.",
      author: "Robert Black",
      minutes: 7,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: true,
      date_posted: "May 19",
      category: "Tech",
    },
    {
      title: "Healthy eating: Simple steps to success",
      excerpt:
        "Embrace a healthier lifestyle. Innovative startups shaping the future. Remote work in the tech industry.",
      author: "Lisa White",
      minutes: 6,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: false,
      date_posted: "May 25",
      category: "Lifestyle",
    },
    {
      title: "Tech startups to watch in 2023",
      excerpt:
        "Innovative startups shaping the future. Innovative startups shaping the future. Remote work in the tech industry.",
      author: "Michael Green",
      minutes: 8,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: true,
      date_posted: "May 30",
      category: "Tech",
    },
    {
      title: "Meditation: A journey to the self",
      excerpt:
        "Exploring the benefits of meditation. Innovative startups shaping the future. Remote work in the tech industry.",
      author: "Sarah Yellow",
      minutes: 5,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: false,
      date_posted: "May 07",
      category: "Lifestyle",
    },
    {
      title: "The era of quantum computing",
      excerpt:
        "Diving into the realm of quantum tech. Innovative startups shaping the future. Remote work in the tech industry.",
      author: "David Blue",
      minutes: 7,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: true,
      date_posted: "May 25",
      category: "Tech",
    },
    {
      title: "The art of minimal living",
      excerpt:
        "Simplicity is the essence of happiness. Use a common date for demonstration purposes. Innovative startups shaping the future.",
      author: "Linda Purple",
      minutes: 6,
      author_image: "https://source.unsplash.com/random/800x600?technology",
      post_coverImage:
        "https://source.unsplash.com/random/800x600?technology",
      verified: false,
      date_posted: "May 30",
      category: "Lifestyle",
    },
  ];


export default function FeaturedPosts() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const generatePostData = () => {
      setPostData(Posts);
    };

    generatePostData();
  }, []);

  const popularPost = postData.length > 0 ? postData[0] : null;

  return (
    <section className="featured__component">
      <div className="featured__content">
        {popularPost && (
          <div className="popular__post">
            <img
              src={popularPost.post_coverImage}
              className="popular__post_image"
              alt="Featured"
            />
            <div className="popular__post_body">
              <h2 className="popular__post_title">{popularPost.title}</h2>
              <p className="popular__post_text">{popularPost.excerpt}</p>
              <div className="post__author_info">
                <div className="post__author">
                  <img
                    src={popularPost.author_image}
                    className="post__author_image"
                    alt="Author"
                  />
                  <p className="post__author_name">{popularPost.author}</p>
                  {popularPost.verified === true ? (
                    <MdVerified
                      className="post__verified_icon"
                      fill="#05a512"
                    />
                  ) : (
                    <GoUnverified
                      className="post__verified_icon"
                      fill="#f5a623"
                    />
                  )}
                  <BsDot />
                  <p className="post__category">{popularPost.category}</p>
                  <BsDot fill="#9d9d9d" />
                  <div className="post__details">
                    <p className="post__minutes">{popularPost.minutes} min </p>
                    <p className="post__date">{popularPost.date_posted}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="featured__posts">
          {postData.map((post, index) => (
            <div className="post" key={index}>
              <img
                src={post.post_coverImage}
                className="post__image"
                alt="Post"
              />
              <div className="post__body">
                <h2 className="post__title">{post.title}</h2>
                <p className="post__text">{post.excerpt}</p>
                <div className="post__wrap">
                  <img
                    src={post.author_image}
                    className="post__author_image"
                    alt="Author"
                  />
                  <div className="post__info">
                    <div className="post__author">
                      <p className="post__author_name">{post.author}</p>
                      {post.verified === true ? (
                        <MdVerified
                          className="post__verified_icon"
                          fill="#05a512"
                        />
                      ) : (
                        <GoUnverified
                          className="post__verified_icon"
                          fill="#f5a623"
                        />
                      )}
                      <BsDot />
                      <p className="post__category">{post.category}</p>
                    </div>
                    <div className="post__details">
                      <p className="post__minutes">{post.minutes} min read</p>
                      <BsDot />
                      <p className="post__date">{post.date_posted}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Generate 28 additional posts with random data
// for (let i = 12; i < 30; i++) {
//   posts.push({
//     title: `Title alternate between true and false`,
//     excerpt: `Excerpt alternate between true and false. Use a common date for demonstration purposes. `,
//     author: `Author Doe`,
//     minutes: Math.floor(Math.random() * 20) + 1,
//     author_image: `https://source.unsplash.com/random/800x600?image=${i}`,
//     post_coverImage: `https://source.unsplash.com/random/800x600?image=${i}`,
//     verified: i % 2 === 0, // Alternate between true and false
//     date_posted: "Dec 22", // Use a common date for demonstration purposes
//     category: i % 2 === 0 ? "Lifestyle" : "Technology", // Alternate between categories
//   });
// }