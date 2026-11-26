import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "./UI/Skeleton";

const NftItemSkeleton = () => {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Link
          to="/author"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Creator: Monica Lucas"
        >
          <Skeleton width={"50px"} height={"50px"} borderRadius={"50%"} />
          <i className="fa fa-check"></i>
        </Link>
      </div>

      <div className="nft__item_wrap">
        <div className="nft__item_extra">
          <div className="nft__item_buttons">
            <button>Buy Now</button>
            <div className="nft__item_share">
              <h4>Share</h4>

              <i className="fa fa-facebook fa-lg"></i>

              <i className="fa fa-twitter fa-lg"></i>

              <i className="fa fa-envelope fa-lg"></i>
            </div>
          </div>
        </div>

        <Link to="/item-details">
          <Skeleton width={"100%"} height={"350px"} />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to="/item-details">
          <h4>
            <Skeleton width={"200px"} height={"30px"} />
          </h4>
        </Link>
        <div className="nft__item_price">
          <Skeleton width={"150px"} height={"20px"} />
        </div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>
            <Skeleton width={"30px"} height={"20px"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftItemSkeleton;
