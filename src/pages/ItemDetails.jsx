import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [nftData, setNftData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getItemData() {
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`,
      );
      setNftData(data);
    } catch (error) {
      console.error("Failed to load Item Data : ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                {loading ? (
                  <Skeleton width={"100%"} height={"100%"} />
                ) : (
                  <img
                    src={nftData.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                )}
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    {loading ? (
                      <Skeleton width={"300px"} height={"40px"} />
                    ) : (
                      <>
                        {nftData.title} #{nftData.tag}
                      </>
                    )}
                  </h2>

                  <div className="item_info_counts">
                    {loading ? (
                      <Skeleton width="80px" height="30px" borderRadius="4px" />
                    ) : (
                      <>
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          {nftData.views}
                        </div>
                      </>
                    )}

                    {loading ? (
                      <Skeleton
                        width={"80px"}
                        height={"30px"}
                        borderRadius="4px"
                      />
                    ) : (
                      <>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          {nftData.likes}
                        </div>
                      </>
                    )}
                  </div>
                  {loading ? (
                    <Skeleton width={"100%"} height={"80px"} />
                  ) : (
                    <>
                      <p>{nftData.description}</p>
                    </>
                  )}

                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${nftData.ownerId}`}>
                            {loading ? (
                              <Skeleton
                                width={"50px"}
                                height={"50px"}
                                borderRadius={"50%"}
                              />
                            ) : (
                              <>
                                <img
                                  className="lazy"
                                  src={nftData.ownerImage}
                                  alt=""
                                />
                              </>
                            )}

                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${nftData.ownerId}`}>
                            {loading ? (
                              <Skeleton width={"130px"} height={"30px"} />
                            ) : (
                              <>{nftData.ownerName}</>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${nftData.creatorId}`}>
                            {loading ? (
                              <Skeleton
                                width={"50px"}
                                height={"50px"}
                                borderRadius={"50%"}
                              />
                            ) : (
                              <>
                                <img
                                  className="lazy"
                                  src={nftData.creatorImage}
                                  alt=""
                                />
                              </>
                            )}

                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${nftData.creatorId}`}>
                            {loading ? (
                              <Skeleton width={"130px"} height={"30px"} />
                            ) : (
                              <>{nftData.creatorName}</>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <span>
                        {loading ? (
                          <Skeleton width={"100px"} height={"20px"} />
                        ) : (
                          <>
                            <img src={EthImage} alt="" />
                            {nftData.price}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
