export const metadata = {
  title: {
    absolute : "My Files"
  }
};

export default async function fileName({ params }) {
  console.log(await params);
  const { fileName } = await params;

  return (
    <>
      <h3>This is FileName Page</h3>
      <h4>
        {" "}
        File <i>/{fileName?.join("/")}</i>
      </h4>
    </>
  );
}
