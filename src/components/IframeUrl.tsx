"use client"

const IframeUrl = (props: { url: string }) => {
  const {url} = props;

  return (
    <iframe
      className="w-full h-full border"
      src={url}
    ></iframe>

  );
};

export default IframeUrl;
