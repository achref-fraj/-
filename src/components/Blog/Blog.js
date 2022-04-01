import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { BlogsWrraper, BlogsBackColor, H2, Div3 } from "./BlogStyles";
import moment from "moment";

const Blog = () => {
  new Swiper(".slider3", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 50,
        centeredSlides: true,
      },
    },
  });
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://fithub-tn-app.herokuapp.com/blogs`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );

        const data = await response.json();
        setDataBlog(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <BlogsBackColor id="blogs">
        <BlogsWrraper>
          <H2
            className="slider3-h2"
            style={{
              fontSize: "10rem",
              fontFamily: "Space Grotesk,sans-serif",
            }}
          >
            Blogs
          </H2>
          <Div3 className="swiper-slider3-container">
            <div className="swiper-container slider3">
              <div className="swiper-wrapper">
                {dataBlog?.map(({ blogTitle, content, author, date }, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div
                      className="slider3-card"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="number">{blogTitle}</p>
                      <p className="text">{content}</p>

                      <p className="text">
                       <div>{moment(date).format("LLL")}</div> 
                        <div>{author}</div>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Div3>
        </BlogsWrraper>
      </BlogsBackColor>
    </>
  );
};

export default Blog;
