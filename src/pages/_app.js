import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import theme from "configs/theme";
import AdminLayout from "@admin/Components/AdminLayout/AdminLayout";
import { AuthProvider, ProtectRoute } from "contexts/Auth.context";

function MyApp({ Component, router, pageProps }) {
  // Remove the server-side injected CSS Material-ui.
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  if (router.pathname.startsWith("/admin/categories")) {
    return (
      <>
      <Head>
        <title>Admin Panel</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ProtectRoute>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </ProtectRoute>
      </AuthProvider>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>E-Shop</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>         
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
