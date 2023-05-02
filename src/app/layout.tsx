"use client";

import { Footer } from "@/components/Footer";
import { FooterMobile } from "@/components/FooterMobile/FooterMobile";
import { Header } from "@/components/Header";
import { SearchInputMobile } from "@/components/SearchInputMobile";
import { useSelectedLayoutSegment } from "next/navigation";
import "./globals.scss";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const activeLink = useSelectedLayoutSegment();
  const isAuthPage = activeLink === "auth";
  const isMobileSearch = activeLink === null || activeLink === "search";

  let contentModificator = isAuthPage ? " content_auth" : "";
  let cls = "content" + contentModificator;
  return (
    <html lang="ru">
      <body className={isAuthPage ? "auth" : ""}>
        {isMobileSearch && (
          <SearchInputMobile place={activeLink === "search" ? "search" : "main"} />
        )}

        <Header />
        <div className={cls}>
          {children}
          {!isAuthPage && <Footer />}
        </div>
        {!isAuthPage && <FooterMobile activeLink={activeLink} />}
      </body>
    </html>
  );
}