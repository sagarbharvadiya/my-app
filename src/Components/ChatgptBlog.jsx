import React from "react";

const ChatgptBlog = () => {
  const data = require("../ChatgptBlogData.json"); // Load the data from the JSON file

  return (
    <div className="container  tw-mx-auto tw-pt-7">
      <div className="react-blog tw-pt-7">
        <div className="tw-container tw-flex tw-flex-wrap tw-items-center">
          {data && data.data && (
            <div className="blog-title tw-w-full md:tw-w-4/5 tw-mx-auto">
              <h1 className="tw-text-3xl tw-font-bold tw-mb-3">
                {data.data.title}
              </h1>
              {/* <div className="title-img tw-pt-5">
                <img
                  src={data.data.image}
                  alt="Why Choose Drupal"
                  className="tw-w-full tw-h-full tw-object-cover tw-py-2]"
                />
              </div> */}
            </div>
          )}
          {data &&
            data.data &&
            data.data.content &&
            data.data.content.map((section, index) => (
              <div
                key={index}
                className="react-post tw-m-auto tw-mt-7 tw-w-full md:tw-w-4/5"
              >
                <h3 className="tw-text-2xl tw-font-bold tw-mb-2">
                  {section.title}
                </h3>
                <p className="tw-text-lg tw-mb-5">{section.text}</p>
                {section.list && (
                  <ul className=" tw-pl-4 md:tw-p-0 tw-list-none tw-m-0">
                    {section.list.map((item, index) => (
                      <li
                        key={index}
                        className="tw-mb-4 tw-text-left tw-list-decimal"
                      >
                        <b className="tw-text-lg tw-font-bold">{item.item}</b>
                        <p className="tw-text-lg tw-mb-0">{item.dis}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          <p className="tw-text-lg tw-mb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
            To leverage ChatGPT effectively, approach each generated solution
            with curiosity. Analyze the logic, experiment with modifications,
            and be sure you can explain how it works. This practice ensures that
            you’re enhancing your skills while saving time.
          </p>
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
                className="tw-bg-orange-500 !tw-text-white tw-font-bold tw-px-tw-mb-5 tw-py-2 tw-rounded-[5px] tw-p-3"
              >
                {data.data.callToAction.button}
              </a>
            </div>
          )}
        </div>
        <h5 className="tw-text-lg tw-mb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
          Let's work together to create a website that drives growth and
          success. Click the button above to get started!
        </h5>
      </div>
    </div>
  );
};

export default ChatgptBlog;
