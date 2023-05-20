import React from 'react';

function BlogPost(props) {
  /* Router */
  /* State */
  const { postSrc, authSrc, delay = 0, blogTitle, blogDesc, blogAuth } = props;

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <article
      className="h-full flex flex-col space-y-5"
      data-aos="fade-down"
      data-aos-delay={delay}
    >
      {/* Image */}
      <a className="block group overflow-hidden" href="#0">
        <img
          className="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out"
          src={postSrc}
          width={347}
          height={198}
          s
          alt="img"
        />
      </a>
      {/* Content */}
      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
            <a
              className="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              href="#0"
            >
              {blogTitle}
            </a>
          </h3>
        </header>
        <p className="text-gray-500 grow">{blogDesc}</p>
        <footer className="flex items-center text-sm mt-4">
          <a href="#0">
            <img
              className="rounded-full shrink-0 mr-3"
              src={authSrc}
              width={32}
              height={32}
              alt="img"
            />
          </a>
          <div>
            <span className="text-gray-500">By</span>{' '}
            <a
              className="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              href="#0"
            >
              {blogAuth}
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
``;
export default BlogPost;
