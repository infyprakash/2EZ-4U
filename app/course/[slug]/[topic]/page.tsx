// // import "@/app/course/[slug]/[topic]/content.css";
// // import fetchMaterials from "@/app/course/data/fetchMaterials";
// // import fetchTopics from "@/app/course/data/fetchTopics";
// // import Link from "next/link";
// // export const revalidate = 600;

// // function stripInlineStyles(html: any) {
// //   const cheerio = require("cheerio");
// //   const $ = cheerio.load(html);

// //   $("*[style]").removeAttr("style");

// //   $("li").each((i: any, el: any) => {
// //     const content = $(el)
// //       .html()
// //       .replace(/\u00A0|&nbsp;/g, "")
// //       .trim();
// //     if (!content) {
// //       $(el).remove();
// //     }
// //   });

// //   return $("body").html();
// // }

// // const page = (props: any) => {
// //   return <Content {...props} />;
// // };

// // export default page;

// // const Content = async (props: any) => {
// //   const params =
// //     props.params instanceof Promise ? await props.params : props.params;
// //   const { slug, topic } = params;

// //   const topicContent = await fetchMaterials(topic);

// //   const pdf_file = topicContent.pdf;

// //   const base_url = process.env.NEXT_PUBLIC_BASE_URL;
// //   const pdf_link = base_url + pdf_file;

// //   const cleanedHtml = topicContent.content
// //     ? stripInlineStyles(topicContent.content)
// //     : "";
// //   const title = topicContent.title;

// //   const chapters = await fetchTopics(slug);

// //   const { previousTopic, nextTopic } = findAdjacentTopics(chapters, topic);

// //   return (
// //     <>
// //       <h1 className="font-bold px-8 text-2xl underline underline-offset-2 text-center my-4">
// //         {title}
// //       </h1>

// //       <div className="flex justify-center items-center">
// //         <div></div>
// //         <div
// //           className="prose text-justify lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm px-4 py-8 md:px-12 sm:w-screen
// //           content
// //           [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
// //           [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
// //           dangerouslySetInnerHTML={{ __html: cleanedHtml }}
// //         />
// //       </div>

// //       <div className="block md:flex md:justify-evenly md:items-center w-full px-0 py-6 border-t">
// //         <div className="prev mb-4 md:mb-0 text-left">
// //           {previousTopic && (
// //             <Link
// //               href={`/course/${slug}/${previousTopic.slug}`}
// //               className="flex flex-col items-start px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
// //             >
// //               <span className="text-sm text-gray-600 mb-1">
// //                 {previousTopic.chapterTitle}
// //               </span>
// //               <span className="font-medium">← {previousTopic.title}</span>
// //             </Link>
// //           )}
// //         </div>

// //         <div className="next flex justify-end md:justify-start text-right">
// //           {nextTopic && (
// //             <Link
// //               href={`/course/${slug}/${nextTopic.slug}`}
// //               className="flex flex-col items-end px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
// //             >
// //               <span className="text-sm text-gray-600 mb-1">
// //                 {nextTopic.chapterTitle}
// //               </span>
// //               <span className="font-medium">{nextTopic.title} →</span>
// //             </Link>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // function findAdjacentTopics(chapters: any[], currentTopicSlug: string) {
// //   let previousTopic = null;
// //   let nextTopic = null;
// //   let foundCurrent = false;

// //   const allTopics: Array<{
// //     id: string;
// //     title: string;
// //     slug: string;
// //     chapterTitle: string;
// //     chapterId: string;
// //   }> = [];

// //   chapters.forEach((chapter) => {
// //     chapter.topics.forEach((topic: any) => {
// //       allTopics.push({
// //         id: topic.id,
// //         title: topic.title,
// //         slug: topic.slug,
// //         chapterTitle: chapter.title,
// //         chapterId: chapter.id,
// //       });
// //     });
// //   });

// //   const currentIndex = allTopics.findIndex(
// //     (topic) => topic.slug === currentTopicSlug
// //   );

// //   if (currentIndex > 0) {
// //     previousTopic = allTopics[currentIndex - 1];
// //   }

// //   if (currentIndex < allTopics.length - 1) {
// //     nextTopic = allTopics[currentIndex + 1];
// //   }

// //   return { previousTopic, nextTopic };
// // }
// import "@/app/course/[slug]/[topic]/content.css";
// import fetchMaterials from "@/app/course/data/fetchMaterials";
// import fetchTopics from "@/app/course/data/fetchTopics";
// import Link from "next/link";
// export const revalidate = 600;

// function stripInlineStyles(html: any) {
//   const cheerio = require("cheerio");
//   const $ = cheerio.load(html);

//   $("*[style]").removeAttr("style");

//   $("li").each((i: any, el: any) => {
//     const content = $(el)
//       .html()
//       .replace(/\u00A0|&nbsp;/g, "")
//       .trim();
//     if (!content) {
//       $(el).remove();
//     }
//   });

//   return $("body").html();
// }

// const page = (props: any) => {
//   return <Content {...props} />;
// };

// export default page;

// const Content = async (props: any) => {
//   const params =
//     props.params instanceof Promise ? await props.params : props.params;
//   const { slug, topic } = params;

//   const topicContent = await fetchMaterials(topic);

//   const pdf_file = topicContent.pdf;
//   const base_url = process.env.NEXT_PUBLIC_BASE_URL;
//   const pdf_link = pdf_file ? base_url + pdf_file : null;

//   const cleanedHtml = topicContent.content
//     ? stripInlineStyles(topicContent.content)
//     : "";
//   const title = topicContent.title;

//   const chapters = await fetchTopics(slug);

//   const { previousTopic, nextTopic } = findAdjacentTopics(chapters, topic);

//   return (
//     <>
//       <h1 className="font-bold px-8 text-2xl underline underline-offset-2 text-center my-4">
//         {title}
//       </h1>

//       {/* PDF Viewer Section - Only display if PDF exists */}
//       {pdf_link && (
//         <div className="w-full px-4 py-6">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               Course Material (PDF)
//             </h2>

//             {/* Mobile-responsive PDF container */}
//             <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
//               {/* PDF Embed for larger screens */}
//               <div className="hidden md:block">
//                 <iframe
//                   src={pdf_link}
//                   className="w-full h-[600px] lg:h-[700px] border-0"
//                   title={`${title} - PDF`}
//                   loading="lazy"
//                 />
//               </div>

//               {/* Mobile fallback with download option */}
//               <div className="md:hidden">
//                 <div className="p-6 text-center">
//                   <div className="mb-4">
//                     <svg
//                       className="w-16 h-16 mx-auto text-red-500 mb-2"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">
//                       PDF Document
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-4">
//                       View or download the course material
//                     </p>
//                   </div>

//                   <div className="space-y-3">
//                     {/* View in browser button */}
//                     <a
//                       href={pdf_link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
//                     >
//                       View PDF
//                     </a>

//                     {/* Download button */}
//                     <a
//                       href={pdf_link}
//                       download
//                       className="inline-block w-full px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition duration-200"
//                     >
//                       Download PDF
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Alternative: Simple embed for mobile (uncomment if you prefer iframe on mobile too) */}
//             {/*
//             <div className="md:hidden">
//               <iframe
//                 src={pdf_link}
//                 className="w-full h-96 border-0 rounded"
//                 title={`${title} - PDF Mobile`}
//                 loading="lazy"
//               />
//             </div>
//             */}
//           </div>
//         </div>
//       )}

//       {/* Content Section */}
//       <div className="flex justify-center items-center">
//         <div></div>
//         <div
//           className="prose text-justify lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm px-4 py-8 md:px-12 sm:w-screen
//           content
//           [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
//           [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
//           dangerouslySetInnerHTML={{ __html: cleanedHtml }}
//         />
//       </div>

//       {/* Navigation Section */}
//       <div className="block md:flex md:justify-evenly md:items-center w-full px-0 py-6 border-t">
//         <div className="prev mb-4 md:mb-0 text-left">
//           {previousTopic && (
//             <Link
//               href={`/course/${slug}/${previousTopic.slug}`}
//               className="flex flex-col items-start px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
//             >
//               <span className="text-sm text-gray-600 mb-1">
//                 {previousTopic.chapterTitle}
//               </span>
//               <span className="font-medium">← {previousTopic.title}</span>
//             </Link>
//           )}
//         </div>

//         <div className="next flex justify-end md:justify-start text-right">
//           {nextTopic && (
//             <Link
//               href={`/course/${slug}/${nextTopic.slug}`}
//               className="flex flex-col items-end px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
//             >
//               <span className="text-sm text-gray-600 mb-1">
//                 {nextTopic.chapterTitle}
//               </span>
//               <span className="font-medium">{nextTopic.title} →</span>
//             </Link>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// function findAdjacentTopics(chapters: any[], currentTopicSlug: string) {
//   let previousTopic = null;
//   let nextTopic = null;
//   let foundCurrent = false;

//   const allTopics: Array<{
//     id: string;
//     title: string;
//     slug: string;
//     chapterTitle: string;
//     chapterId: string;
//   }> = [];

//   chapters.forEach((chapter) => {
//     chapter.topics.forEach((topic: any) => {
//       allTopics.push({
//         id: topic.id,
//         title: topic.title,
//         slug: topic.slug,
//         chapterTitle: chapter.title,
//         chapterId: chapter.id,
//       });
//     });
//   });

//   const currentIndex = allTopics.findIndex(
//     (topic) => topic.slug === currentTopicSlug
//   );

//   if (currentIndex > 0) {
//     previousTopic = allTopics[currentIndex - 1];
//   }

//   if (currentIndex < allTopics.length - 1) {
//     nextTopic = allTopics[currentIndex + 1];
//   }

//   return { previousTopic, nextTopic };
// }

import "@/app/course/[slug]/[topic]/content.css";
import fetchMaterials from "@/app/course/data/fetchMaterials";
import fetchTopics from "@/app/course/data/fetchTopics";
import Link from "next/link";
export const revalidate = 600;

function stripInlineStyles(html: any) {
  const cheerio = require("cheerio");
  const $ = cheerio.load(html);

  $("*[style]").removeAttr("style");

  $("li").each((i: any, el: any) => {
    const content = $(el)
      .html()
      .replace(/\u00A0|&nbsp;/g, "")
      .trim();
    if (!content) {
      $(el).remove();
    }
  });

  return $("body").html();
}

const page = (props: any) => {
  return <Content {...props} />;
};

export default page;

const Content = async (props: any) => {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const { slug, topic } = params;

  const topicContent = await fetchMaterials(topic);

  const pdf_file = topicContent.pdf;
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const pdf_link = pdf_file ? base_url + pdf_file : null;

  const cleanedHtml = topicContent.content
    ? stripInlineStyles(topicContent.content)
    : "";
  const title = topicContent.title;

  const chapters = await fetchTopics(slug);

  const { previousTopic, nextTopic } = findAdjacentTopics(chapters, topic);

  return (
    <>
      <h1 className="font-bold px-8 text-2xl underline underline-offset-2 text-center my-4">
        {title}
      </h1>

      {/* Content Section */}
      <div className="flex justify-center items-center">
        <div></div>
        <div
          className="prose text-justify lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm px-4 py-8 md:px-12 sm:w-screen
          content
          [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
          [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        />
      </div>

      {/* PDF Viewer Section - Only display if PDF exists */}
      {/* PDF Viewer Section - Only display if PDF exists */}
      {pdf_link && (
        <div className="w-full px-4 py-6">
          <div className="max-w-6xl mx-auto">
            {/* Mobile-responsive PDF container */}
            <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              {/* PDF Embed for all screen sizes */}
              <div className="relative">
                <iframe
                  src={pdf_link}
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] border-0"
                  title={`${title} - PDF`}
                  loading="lazy"
                />

                {/* Fullscreen button overlay */}
                <div className="absolute top-2 right-2 z-10 mt-2 mr-2 md:mt-12 md:mr-3">
                  <a
                    href={pdf_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded hover:bg-opacity-90 transition duration-200"
                    title="Open fullscreen"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Optional: Fallback message for very small screens or if iframe fails */}
              <div className="hidden">
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 mx-auto text-red-500 mb-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      PDF Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      View or download the course material
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={pdf_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      View PDF
                    </a>

                    <a
                      href={pdf_link}
                      download
                      className="inline-block w-full px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition duration-200"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Section */}
      <div className="block md:flex md:justify-evenly md:items-center w-full px-0 py-6 border-t">
        <div className="prev mb-4 md:mb-0 text-left">
          {previousTopic && (
            <Link
              href={`/course/${slug}/${previousTopic.slug}`}
              className="flex flex-col items-start px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
            >
              <span className="text-sm text-gray-600 mb-1">
                {previousTopic.chapterTitle}
              </span>
              <span className="font-medium">← {previousTopic.title}</span>
            </Link>
          )}
        </div>

        <div className="next flex justify-end md:justify-start text-right">
          {nextTopic && (
            <Link
              href={`/course/${slug}/${nextTopic.slug}`}
              className="flex flex-col items-end px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
            >
              <span className="text-sm text-gray-600 mb-1">
                {nextTopic.chapterTitle}
              </span>
              <span className="font-medium">{nextTopic.title} →</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

function findAdjacentTopics(chapters: any[], currentTopicSlug: string) {
  let previousTopic = null;
  let nextTopic = null;
  let foundCurrent = false;

  const allTopics: Array<{
    id: string;
    title: string;
    slug: string;
    chapterTitle: string;
    chapterId: string;
  }> = [];

  chapters.forEach((chapter) => {
    chapter.topics.forEach((topic: any) => {
      allTopics.push({
        id: topic.id,
        title: topic.title,
        slug: topic.slug,
        chapterTitle: chapter.title,
        chapterId: chapter.id,
      });
    });
  });

  const currentIndex = allTopics.findIndex(
    (topic) => topic.slug === currentTopicSlug
  );

  if (currentIndex > 0) {
    previousTopic = allTopics[currentIndex - 1];
  }

  if (currentIndex < allTopics.length - 1) {
    nextTopic = allTopics[currentIndex + 1];
  }

  return { previousTopic, nextTopic };
}
