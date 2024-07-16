import { jsxDEV } from "react/jsx-dev-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import * as pkg from "react-helmet-async";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
/* empty css                       */
function HomePage() {
  return /* @__PURE__ */ jsxDEV("div", { children: "test" }, void 0, false, {
    fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/pages/HomePage.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function App() {
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`${"https://sabkaqr.com"}/api/getdomains`, {
          headers: {}
        });
        const jsonResponse = await response.json();
        if (jsonResponse.status && jsonResponse.data) {
          setDomains(jsonResponse.data.domain);
          setPaths(jsonResponse.data.path);
        }
      } catch (err) {
        if (err instanceof Error)
          console.log(err.message);
        else
          console.log(String(err));
      }
    };
    fetchPageData();
  }, []);
  return (
    // <AuthProvider>
    //   <Suspense fallback={<div className="fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center bg-gray-100 bg-opacity-50">
    //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    // </div>}>
    /* @__PURE__ */ jsxDEV(Routes, { children: /* @__PURE__ */ jsxDEV(Route, { index: true, element: /* @__PURE__ */ jsxDEV(HomePage, {}, void 0, false, {
      fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/App.tsx",
      lineNumber: 116,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/App.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/App.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  );
}
console.log("pkg", pkg);
const { Helmet, HelmetProvider } = pkg.default;
function render(url, context) {
  const helmetContext = {};
  const appHtml = renderToString(
    /* @__PURE__ */ jsxDEV(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxDEV(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/entry-server.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/entry-server.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/entry-server.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  );
  console.log("helmetContext", helmetContext);
  const { helmet } = helmetContext;
  return {
    appHtml,
    helmet
  };
}
export {
  render
};
//# sourceMappingURL=entry-server.js.map
