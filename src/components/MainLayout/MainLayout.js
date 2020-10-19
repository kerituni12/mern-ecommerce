import React from "react";
import Link from "next/link";
class MainLayout extends React.Component {
  render() {
    console.log("re-render mainlayout");
    return (
      <h1>
        Mainlayout
        <input />
        <Link href="/admin/categories">
          <a>Admin</a>
        </Link>
        <Link href="/admin/categories/create">
          <a>categories</a>
        </Link>
        <Link href="/">
          <a>index</a>
        </Link>
        {this.props.children}
      </h1>
    );
  }
}

export default React.memo(MainLayout);
