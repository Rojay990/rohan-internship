import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderCarosel from "../UI/SliderCarosel";
import NftItem from "../NftItem";
import NftItemSkeleton from "../NftItemSkeleton";

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getNewItems() {
    try {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
      );
      setNewItems(data);
    } catch (error) {
      console.error("Failed to load New Items: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNewItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade-in">New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12" data-aos="fade-right">
            <SliderCarosel>
              {loading ? (
                new Array(4)
                  .fill(0)
                  .map((_, index) => <div className="new-item-slide" key={index}>
                      <NftItemSkeleton />
                    </div>)
              ) : 
                  newItems.map((item) => (
                    <div className="new-item-slide" key={item.id}>
                      <NftItem item={item} />
                    </div>
                  ))}
            </SliderCarosel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
