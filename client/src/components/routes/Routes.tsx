import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { ArticleDetails, ArticleLists } from "../components";

export const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={ArticleLists} />
      <Route exact path="/:articleID" component={ArticleDetails} />
    </Fragment>
  );
};
