import React, {useState} from "react";
import  c from "./Network.module.scss"
import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
} from "react-share";
import FacebookImg from "../../../facebookIcon";
import TwitterImg from "../../../twittericon";
import PinterestImg from "../../../pinterestImg";
import LinkedinImg from "../../../linkedinImg";
import CopyLink from "../../../copiLink";

const Network =()=>{

    const [copied, setCopied] = useState(false);
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    return<div className={c.network}>
        <div className={c.share}>Share</div>
        <div className={c.network_item}>
            <FacebookShareButton url={"https://www.facebook.com/"}>
                <FacebookImg />
            </FacebookShareButton>
        </div>
        <div className={c.network_item}>
            <TwitterShareButton url={"https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicnUiLCJteCI6IjIifQ%3D%3D%22%7D"}>
                <TwitterImg/>
            </TwitterShareButton>
        </div>
        <div className={c.network_item}>
            <PinterestShareButton url={"https://www.pinterest.com/business/login/"} media={"https://www.pinterest.com/business/login/"}>
                <PinterestImg/>
            </PinterestShareButton>
        </div>
        <div className={c.network_item}>
            <LinkedinShareButton url={"https://www.linkedin.com/help/linkedin/answer/a545734"}>
                <LinkedinImg/>
            </LinkedinShareButton>
        </div>
        <div>
            <div onClick={copy}><CopyLink/></div>
        </div>
    </div>
}

export default Network;