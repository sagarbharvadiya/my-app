import React from "react";
import data from "../data.json";
const SomeOfOurWork = () => {
  return (
    <>
      <div className="commonWidth">
        <div className="technologies_text commonTitleFontSize">
          Some Of Our Work
        </div>
        <section className="some_work">
          {data.some_work.map((d, i) => {
            return (
              <>
                <a href={d.link} className="work_main">
                  <div className="work" key={i}>
                    <div className="image">
                      <img src={d.img} alt="mockup-saata" />
                    </div>
                    <div className="page">
                      <h4>{d.title}</h4>
                      <a href={d.link} target="_blank" rel="noreferrer">
                        Read Case Study
                      </a>
                    </div>
                  </div>
                </a>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default SomeOfOurWork;
