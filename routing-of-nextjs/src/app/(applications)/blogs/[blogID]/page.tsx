import { notFound } from "next/navigation";

// export async function generateMetadata({params}) {
//   const {blogID} = await params;
//   console.log(blogID)
//   return {
//     title : `Blog ${blogID}`
//   }
// }

export default async function Blog({ params }) {
  const { blogID } = await params;
  console.log(await params);
  if(!/^\d+$/.test(blogID)){
    notFound();
  }
  return <div>Blog {blogID}</div>;
}
