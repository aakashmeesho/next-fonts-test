import { Headline4 } from "@/mesh-ui";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const CustomThemeProvider = dynamic(() =>
  import("../mesh-ui/components/CustomThemeProvider").then(
    (mod) => mod.CustomThemeProvider
  )
);

import { mierFontsBold, mierFontsBook, mierFontsDemi } from "../fonts/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mierFontsBook.className}`}>
      <CustomThemeProvider theme={{ isMobile: true, mierFontsBold: mierFontsBold.className, mierFontsDemi: mierFontsDemi.className }}>
        <>
          <Headline4 color="greyBase">Products For You test</Headline4>
          <Headline4 color="greyBase" className={mierFontsBook.className}>
            Products For You
          </Headline4>
          <Headline4 color="greyBase" className={mierFontsDemi.className}>
            Products For You
          </Headline4>
          <h4
            style={{
              color: "#333333",
              "fontSize": "21px",
              "lineHeight": "24px",
              // 'font-family': "Mier bold",
            }}
            className={mierFontsBold.className}
          >
            Products For Youuuu
          </h4>
          <h4
            style={{
              color: "#333333",
              "fontSize": "21px",
              "lineHeight": "24px",
              // 'font-family': "Mier bold",
            }}
            className={mierFontsBook.className}
          >
            Products For Youuuu
          </h4>
          <h4
            style={{
              color: "#333333",
              "font-size": "21px",
              "line-height": "24px",
              // 'font-family': "Mier bold",
            }}
            className={mierFontsDemi.className}
          >
            Products For Youuuu
          </h4>
        </>
      </CustomThemeProvider>
      <Component {...pageProps} />
    </main>
  );
}
