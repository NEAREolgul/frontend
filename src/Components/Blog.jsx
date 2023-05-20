import Post01 from '../assets/images/blog-01.jpg';
import Post02 from '../assets/images/blog-02.jpg';
import Post03 from '../assets/images/blog-03.jpg';
import PostAuthor01 from '../assets/images/blog-author-01.jpg';
import PostAuthor02 from '../assets/images/blog-author-02.jpg';
import PostAuthor03 from '../assets/images/blog-author-03.jpg';
import BlogPost from './Swiper/BlogPost';

const Blog = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-center md:text-left">
              From our blog
            </h2>
          </div>
          {/* Posts */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {/* 1st Post */}
            <BlogPost
              postSrc={Post01}
              authSrc={PostAuthor01}
              blogTitle="Concept Art &amp; Illustrations by Stef Euphoria"
              blogDesc="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore."
              blogAuth="Hanho"
            />

            {/* 2nd Post */}
            <BlogPost
              postSrc={Post02}
              authSrc={PostAuthor02}
              delay="100"
              blogTitle="Patrick Chen's Branding by Thought &amp; Found Studio"
              blogDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore."
              blogAuth="Hanho"
            />

            {/* 3rd Post */}
            <BlogPost
              postSrc={Post03}
              authSrc={PostAuthor03}
              delay="200"
              blogTitle="Soma Brewing Branding &amp; Packaging by Quim Martin"
              blogDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore."
              blogAuth="Hanho"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
