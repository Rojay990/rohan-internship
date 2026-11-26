import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import NftItem from "../NftItem";
import NftItemSkeleton from "../NftItemSkeleton";

const AuthorItems = ({
  nftCollections = [],
  authorImageCollection,
  authorId,
  loading,
}) => {

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading
            ? new Array(8).fill().map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <NftItemSkeleton />
                </div>
              ))
            : nftCollections.map((collection) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={collection.id}
                >
                  <NftItem
                    item={{ ...collection, authorImage: authorImageCollection, authorId: authorId }}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
