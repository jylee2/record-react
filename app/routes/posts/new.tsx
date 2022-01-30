import { Link, redirect } from "remix";

export const action = async ({ request }: any) => {
  const form = await request.formData();
  console.log("--------form", form);

  return redirect("/posts");
};

function NewPost() {
  return (
    <>
      <Link to="/posts">Back</Link>
      <h1>New Post</h1>

      <div>
        <form method="POST">
          <div>
            <label>Title</label>
            <textarea name="title" id="title" />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
