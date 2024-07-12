import React from "react";
import BlogImg from "../img/BlogBanner1.png";
import { Link } from "react-router-dom";
import data from "../data.json";
// import drupalImg from "../img/person-front-computer-working-html.jpg";
// import ReactImg from "../img/react-programming.jpg"

function Blogs() {
  return (
    <>
      <section className="tw-container tw-m-auto" id="blog">
        <div className="blog-page">
          <div className="blog-title tw-w-full md:tw-w-[90%] tw-m-auto tw-pt-6 tw-pb-9">
            <h1 className="tw-hidden tw-text-center tw-pt-1 lg:tw-py-4">Blogs</h1>
            <img
                src={BlogImg}
                alt="job"
                loading="lazy"
                className="tw-w-full tw-object-cover"
              />
            {/* <h1 className="tw-text-[3.75rem] tw-font-bold tw-text-center">WebWorks: The Official <br /> Blog's of <b>Krushna53</b></h1> */}
          </div>
          <div className="blog-section tw-block lg:tw-flex tw-justify-between tw-gap-5 tw-my-9 tw-w-[90%] tw-mx-auto tw-border-t tw-border-solid tw-border-grey-500">
            <div className="tw-w-full lg:tw-w-[80%] tw-m-auto">
              {data.BlogPage.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <article className="tw-block lg:tw-flex tw-gap-2 tw-my-4 tw-border-solid tw-border-b tw-border-grey-500 tw-py-3 tw-box-border">
                      <div className="tw-my-4 lg:tw-my-0 tw-w-full lg:tw-w-[60%]">
                        <h3 className="tw-font-bold tw-text-[22px]">
                          {" "}
                          {item.title}
                        </h3>
                        <p className="!tw-text-17px tw-opacity-95 tw-break-normal tw-pt-2">
                          {item.description}
                        </p>
                        <div className="tw-flex tw-justify-between tw-items-center tw-mr-5">
                          <div className="date">
                            <p className="!tw-text-sm tw-break-normal tw-border-solid tw-border-b tw-border-yellow-400">
                              {item.date}
                            </p>
                          </div>
                          <Link
                            to={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="tw-bg-blue-700 tw-py-1 tw-px-2 tw-text-sm tw-rounded-md tw-text-white hover:tw-text-white"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                      <div className="post-image tw-w-full lg:tw-w-[40%]">
                        <img
                          src={item.img}
                          alt="job"
                          loading="lazy"
                          className="tw-rounded-lg tw-w-full"
                        />
                      </div>
                    </article>
                  </React.Fragment>
                );
              })}
            </div>
            <aside className="tw-w-full lg:tw-w-[20%] tw-block lg:tw-flex md:tw-mt-4 md:tw-justify-end lg:tw-items-start md:tw-text-right">
              <div className="slide-bar">
                <h4 className="tw-text-lg tw-font-bold tw-border-solid tw-border-b tw-border-grey-500">
                  Explore more topics
                </h4>
                <ul className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 md:tw-gap-2 tw-m-0 tw-mt-4 tw-p-0 md:tw-text-right">
                  {data.topics.map((list, i) => {
                    return (
                      <React.Fragment key={i}>
                        <li>
                          <Link
                            to={list.url}
                            className="tw-text-black tw-font-semibold tw-text-sm tw-bg-[#e9e9e9] tw-py-1 tw-px-4 tw-rounded-2xl"
                          >
                            {list.name}
                          </Link>
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
