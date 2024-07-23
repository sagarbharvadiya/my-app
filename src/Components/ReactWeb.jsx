import React from 'react';
import guideData from '../ReactWebData.json'; 

const ReactWeb = () => {
  const data = guideData;

  return (
    <div className="container tw-mx-auto tw-pt-7">
      <div className="react-blog tw-pt-7">
        <div className="tw-container tw-flex tw-flex-wrap tw-items-center">
          {data && (
            <div className="blog-title tw-w-full md:tw-w-4/5 tw-mx-auto">
              <h1 className="tw-text-3xl tw-font-bold tw-mb-3">{data.title}</h1>
              <p className="tw-text-lg tw-mb-5">{data.introduction}</p>
              {/* <div className="title-img tw-pt-5">
                <img
                  src={data.image}
                  alt="Why Choose Drupal"
                  className="tw-w-full tw-h-full tw-object-cover tw-py-2]"
                />
              </div> */}
            </div>
          )}
          {data && data.steps && data.steps.map((step, index) => (
            <div key={index} className="react-post tw-m-auto tw-mt-7 tw-w-full md:tw-w-4/5">
              <h3 className="tw-text-2xl tw-font-bold tw-mb-2">{step.title}</h3>
              {step.content && step.content.map((item, idx) => {
                if (item.type === "code") {
                  return (
                    <pre key={idx} className="tw-bg-gray-100 tw-p-5 tw-rounded-lg tw-mb-5">
                      <code className={`tw-font-mono tw-text-sm ${item.language === "json" ? "tw-bg-gray-100" : ""}`}>
                        {item.code}
                      </code>
                    </pre>
                  );
                }
                if (item.type === "command") {
                  return (
                    <pre key={idx} className="tw-bg-gray-100 tw-p-5 tw-rounded-lg tw-mb-5">
                      <code className="tw-font-mono tw-text-sm">
                        {item.command}
                      </code>
                    </pre>
                  );
                }
                if (item.type === "link") {
                  return (
                    <a key={idx} href={item.text} className="tw-text-blue-500 tw-mb-5 tw-block">
                      {item.text}
                    </a>
                  );
                }
                return <p key={idx} className="tw-text-lg tw-mb-5">{item.text}</p>;
              })}
            </div>
          ))}
          {data && data.conclusion && (
            <div className="tw-pt-7 tw-pb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
              <h3 className="tw-text-2xl tw-font-bold tw-mb-2">Conclusion</h3>
              <p className="tw-text-lg tw-mb-5">{data.conclusion}</p>
              {data.link && (
                <a href={data.link} className="tw-text-blue-500 tw-block tw-mb-5">
                  Read more about this guide
                </a>
              )}
            </div>
          )}
        </div>
        {data && data.callToAction && (
            <div className="tw-pt-7 tw-pb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
              <div className="tw-text tw-text-lg tw-mb-5">
                <h3 className="tw-text-2xl tw-font-bold tw-mb-tw-py-2">
                  {data.callToAction.title}
                </h3>
                <p className="tw-text-lg tw-mb-5">
                  {data.callToAction.text}
                </p>
              </div>
              <a
                href={data.callToAction.link}
                target="_blank"
                rel="noreferrer"
                className="tw-bg-orange-500 !tw-text-white tw-font-bold tw-px-tw-mb-5 tw-py-2 tw-rounded-[5px] tw-p-3"
              >
                {data.callToAction.button}
              </a>
            </div>
          )}
        </div>
        <h5 className="tw-text-lg tw-mb-7 tw-w-full md:tw-w-4/5 tw-m-auto">
          Let's work together to create a website that drives growth and
          success. Click the button above to get started!
        </h5>
      </div>
    
  );
};

export default ReactWeb;
