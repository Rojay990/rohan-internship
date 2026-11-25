import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NftItem from "../NftItem";
import NftItemSkeleton from "../NftItemSkeleton";
import axios from "axios";

const ExploreItems = ({ exploreData, setExploreData, loading, setLoading }) => {
  const [tempExploreData, setTempExploreData] = useState(exploreData);
  const [visibleData, setVisibleData] = useState(8);

  function updateSlice() {
    setVisibleData((prev) => Math.min(prev + 4, exploreData.length));
  }

  async function filter(filterValue) {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filterValue}`,
        );
        setExploreData(data);
      } catch (error) {
        console.error("Failed to load Filtered Data : ", error);
      } finally {
        setLoading(false);
      }
  }

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => filter(event.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {loading
        ? new Array(8).fill().map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NftItemSkeleton />
            </div>
          ))
        : exploreData.slice(0, visibleData).map((item) => (
            <div
              key={item.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NftItem item={item} />
            </div>
          ))}

      {!loading && exploreData.length > visibleData && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={updateSlice}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
