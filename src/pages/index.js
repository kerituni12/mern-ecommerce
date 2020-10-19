import Link from "next/link";
const App = (props) => {
  console.log("index rerender");
  return (
    <>
      <h1>Hello</h1>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
      <Link href="/admin/categories/create">
        <a>categories</a>
      </Link>
      <Link href="/">
        <a>index</a>
      </Link>
    </>
  );
};
export default React.memo(App);
