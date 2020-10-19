import React from "react";
import Link from "next/link";

function Admin() {
  console.log('admin re')
  return (
    <>
      <h1>Dashboard</h1>
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
}

export default React.memo(Admin);
