// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js

export default {
    reactStrictMode: true,
    // ...
  
    async getStaticPaths() {
      const courses = await fetch('/api/courses.json');
      const paths = courses.map((course) => ({
        params: { courseId: course.id },
      }));
      return { paths, fallback: true }; // fallback handles unknown courses
    },
  
    // ...
  };
  