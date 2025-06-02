import "@/styles/app.scss";

export const metadata = {
  title: "AVJ Tech & Partners – Coming Soon",
  description: "Join AVJ Tech's waitlist to shape the future of automotive innovation.",
  siteName: "AVJ Tech",
  url: "https://www.avjtechnology.com",
  type: "website",

  icons: {
    icon: "/favicon.png",
  },

  metadataBase: new URL("https://www.avjtechnology.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/ogimage.png",
  },
};

const AVJApp = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default AVJApp;
