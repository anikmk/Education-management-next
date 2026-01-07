'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function ShareNoticeBtn({ url, title }) {
  return (
    <div className="flex items-center gap-3">

      <FacebookShareButton url={url} quote={title}>
        <div className="">
          <FacebookIcon size={32} round />
        </div>
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <div className="">
          <TwitterIcon size={32} round />
        </div>
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <div className="">
          <WhatsappIcon size={32} round />
        </div>
      </WhatsappShareButton>

    </div>
  );
}
