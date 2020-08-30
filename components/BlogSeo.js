import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";

import { WEBSITE_URL, AUTHOR } from "utils/configuration";

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();

  const featuredImage = {
    url: `${WEBSITE_URL}${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – ${AUTHOR}`}
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
          images: image ? [featuredImage] : null,
        }}
      />
      <ArticleJsonLd
        authorName={AUTHOR}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={AUTHOR}
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
