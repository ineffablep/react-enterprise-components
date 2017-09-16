import React from "react";
import uuid from "uuid";
import { Helmet } from "react-helmet";
import RenderJson from "../renderJson";

const RenderPage = ({ json, text, title, links, metas }) => {
  return (
    <div className="w3-row w3-padding-top">
      <Helmet>
        {title &&
          <title>
            {title}
          </title>}
        {metas &&
          metas.map(_ => {
            return <meta {..._} key={uuid.v4()} />;
          })}

        {links &&
          links.map(_ => {
            return <link {..._} key={uuid.v4()} />;
          })}
      </Helmet>
      {!json || json.length === 0
        ? <h2>
            {text}
          </h2>
        : <RenderJson json={json} />}
    </div>
  );
};

export default RenderPage;
