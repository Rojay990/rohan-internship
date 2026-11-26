import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const { authorId } = useParams();
  const [loading, setLoading] = useState(true);
  const [authorData, setAuthorData] = useState([]);
  const [follow, setFollow] = useState(false);

  function followUser() {
    if (follow) {
      authorData.followers -= 1;
      setFollow(false);
    } else {
      authorData.followers += 1;
      setFollow(true);
    }
  }
  async function getAuthorInfo() {
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`,
      );
      setAuthorData(data);
    } catch (error) {
      console.error("Failed to load Author Information : ", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAuthorInfo();
  }, []);
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {loading ? (
                        <Skeleton
                          width={"150px"}
                          height={"150px"}
                          borderRadius={"50%"}
                        />
                      ) : (
                        <img src={authorData.authorImage} alt="" />
                      )}

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {loading ? (
                            <Skeleton width={"150px"} height={"20px"} />
                          ) : (
                            authorData.authorName
                          )}
                          <span className="profile_username">
                            {loading ? (
                              <Skeleton width={"80px"} height={"20px"} />
                            ) : (
                              <> @ {authorData.tag}</>
                            )}
                          </span>
                          <span id="wallet" className="profile_wallet">
                            {loading ? (
                              <Skeleton width={"200px"} height={"20px"} />
                            ) : (
                              authorData.address
                            )}
                          </span>
                          {loading ? (
                            <Skeleton width={"30px"} height={"20px"} style={{marginLeft: "10px"}}/>
                          ) : (
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          )}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {loading ? (
                          <Skeleton width={"100px"} height={"20px"} />
                        ) : (
                          <>{authorData.followers} followers </>
                        )}
                      </div>
                      <Link to="#" className="btn-main" onClick={followUser}>
                        {!follow ? "Follow" : "Unfollow"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  {loading ? (
                    <AuthorItems loading={loading} />
                  ) : (
                    <AuthorItems
                      nftCollections={authorData.nftCollection}
                      authorImageCollection={authorData.authorImage}
                      authorId={authorData.authorId}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
