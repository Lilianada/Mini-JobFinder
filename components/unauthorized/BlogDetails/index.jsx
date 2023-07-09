"use client"
import React from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
import { Posts } from "../BlogList";

const BlogDetails = () => {
//     const router = useRouter();
//   const { postId } = router.query;

//   // Find the corresponding blog post based on the postId
//   const post = postId ? Posts.find((post) => post.title === postId) : null;

//   if (!post || !postId) {
//     return <p>Post not found.</p>;
//   }

//   const {
//     title,
//     excerpt,
//     author,
//     minutes,
//     author_image,
//     post_coverImage,
//     date_posted,
//     category,
//   } = post;

  return (
    <div className="blogDetails__page">
      <div className="blogDetails__content">
        <h1 className="blogDetails__title">The art of minimal living</h1>

        <div className="blogDetails__meta">
          <span className="blogDetails__category">Category: Lifestyle</span>
          <span className="blogDetails__date">Date Posted: 22 May, 2022</span>
          <span className="blogDetails__author">By John Doe</span>
        </div>
        <p className="blogDetails__text">
          Making a decision to do something – this is the first step. We all
          know that nothing moves until someone makes a decision. The first
          action is always in making the decision to proceed. This is a
          fundamental step, which most people overlook.
        </p>
        <p className="blogDetails__text">
          Without clarity, you send a very garbled message out to the Universe.
          We know that the Law of Attraction says that we will attract what we
          focus on, so if we don’t have clarity, we will attract confusion.
        </p>
        <blockquote className="blogDetails__quote">
          “The sad thing is the majority of people have no clue about what they
          truly want. They have no clarity. When asked the question, responses
          will be superficial at best, and at worst.” – Alice Williams
        </blockquote>
        <div className="blogDetails__tags">
          <span className="blogDetails__tag">Career Advice</span>
          <span className="blogDetails__tag">Recruitment</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
