import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";

import { WEBSITE_URL } from "utils/configuration";

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();

  const featuredImage = {
    url: `${WEBSITE_URL}${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Noah Fleischmann`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Noah Fleischmann"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Noah Fleischmann"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
