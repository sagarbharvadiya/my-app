import React from "react";
import { Helmet } from "react-helmet";
import blogimg from "../img/WhyChooseDrupal.png";
import dataJson from "../data.json";

const BlogPost = () => {
  const data = require("../ReactBlogData.json");
  const pageTitle =
    "Top 3 Reasons Why Drupal Should Be Considered for Your Business";
  const pageDescription =
    "Discover the top reasons why Drupal is an excellent choice for your business website, including flexibility, security, and content management excellence.";
  const pageUrl = "https://krushna53.com/blogs/why-drupal"; // Change this to your actual URL
  const pageImage = blogimg;

  return (
    <div className="container">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://krushna53.com/static/media/Why%20Choose%20Drupal.e2c2f3e0c9d933e06cfb.png"
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://krushna53.com/static/media/Why%20Choose%20Drupal.e2c2f3e0c9d933e06cfb.png"
        />
      </Helmet>
      <div className="blog-post">
        <div className="tw-container tw-mx-auto tw-pt-7">
          <div className="blog-title tw-w-full md:tw-w-4/5 tw-mx-auto">
            <h1 className="tw-text-3xl tw-font-bold tw-mb-3">{pageTitle}</h1>
            <div className="">
              <img
                src={pageImage}
                alt="Why Choose Drupal"
                loading="lazy"
                className="tw-w-full tw-h-full tw-object-cover tw-py-2]"
              />
            </div>
          </div>
          {dataJson.DrupalBlog.map((d, i) => {
            return (
              <React.Fragment key={d.id}>
                <div className="tw-w-full md:tw-w-4/5 tw-m-auto">
                  <div className="tw-py-4">
                    <h3 className="tw-font-bold" >{d.title}</h3>
                  </div>
                  <div className="">
                    <div className="">
                      <div className="">
                        <p>
                          <span>{d.tag}</span> {d.richtext}
                        </p>
                      </div>
                      <div className="">
                        <p>
                          <span>{d.tag1}</span> {d.richtext1}
                        </p>
                      </div>
                      <div className="">
                        <p>
                          <span>{d.tag2}</span> {d.richtext2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          {dataJson.BlogSummary.map((d, i) => {
            return (
              <React.Fragment key={d.id}>
                <div className="tw-w-full md:tw-w-4/5 tw-m-auto">
                  <div className="tw-py-4">
                    <h3 className="tw-font-bold">{d.title}</h3>
                  </div>
                  <div className="">
                    <p>{d.richtext}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          {data && data.data && data.data.callToAction && (
            <div className="tw-pt-7 tw-pb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
              <div className="tw-text tw-text-lg tw-mb-5">
                <h3 className="tw-text-2xl tw-font-bold tw-mb-tw-py-2">
                  {data.data.callToAction.title}
                </h3>
                <p className="tw-text-lg tw-mb-5">
                  {data.data.callToAction.text}
                </p>
              </div>
              <a
                href={data.data.callToAction.link}
                target="_blank"
                rel="noreferrer"
                className="tw-bg-orange-500 !tw-text-white tw-font-bold tw-mb-5 tw-py-1 md:tw-py-2 tw-rounded-[5px] tw-p-3"
              >
                {data.data.callToAction.button}
              </a>
            </div>
          )}
          <h5 className="tw-text-lg tw-mb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
            Let's work together to create a website that drives growth and
            success. Click the button above to get started!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
