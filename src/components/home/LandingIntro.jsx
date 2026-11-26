import React from "react";
import LandingFeatureBox from "../UI/LandingFeatureBox";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
           <LandingFeatureBox icon={"icon_wallet"} 
          title={"Set up your wallet"}
          para={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."}/>
          <LandingFeatureBox icon={"icon_cloud-upload_alt"} 
          title={"Add your NFT's"}
          para={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."}/>
          <LandingFeatureBox icon={"icon_tags_alt"} 
          title={"Sell your NFT's"}
          para={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."}/>
         
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
