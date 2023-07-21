import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
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
              <React.Fragment key={d.id}>
                <a href={d.link} className="work_main">
                  <div className="work">
                    <div className="image">
                      <img src={d.img} alt="mockup-saata" />
                    </div>
                    <div className="page">
                      <h4>{d.title}</h4>
                      {/* <Link data-item-id={d.id} to={`/work/${d.id}`}>
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </a>
              </React.Fragment>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default SomeOfOurWork;
