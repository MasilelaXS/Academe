import "../styles/globals.css";
import "animate.css";
// require("../styles/variables.less");
require("../node_modules/antd/dist/antd.less");
require("../node_modules/antd/lib/style/themes/default.less");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
