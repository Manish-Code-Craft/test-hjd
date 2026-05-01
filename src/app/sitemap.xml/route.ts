  import { NextResponse } from "next/server";

  const MAIN_URL = "https://www.highjumpdigital.com";

  function getCurrentTime() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * -1;

    const pad = (num: number) => (num < 10 ? "0" + num : num);

    const formattedTime = `${now.getFullYear()}-${pad(
      now.getMonth() + 1
    )}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(
      now.getMinutes()
    )}:${pad(now.getSeconds())}`;

    const timezoneOffset = `${offset >= 0 ? "+" : "-"}${pad(
      Math.floor(Math.abs(offset) / 60)
    )}:${pad(Math.abs(offset) % 60)}`;

    return formattedTime + timezoneOffset;
  }

  function generateSiteMap() {
    const routes = [
      "/", // Home

      "/about",
      "/ai-chatbots",
      "/blog",
      "/branding",

      "/contact-us-aus",
      "/contact-us-th",
      "/contact-us-uk",

      "/facebook-ads",
      "/google-ads",
      "/seo",
      "/web-design",

      "/geo-complete-guide",
      "/geo-contact",

      "/site-audit",

      "/privacy-policy",
      "/terms",
      "/thankyou",
      "/sitemap",
      "/our-work",
      "/our-work/chemdry",
      "/our-work/reef-group",
      "/our-work/rock-solid-doors",
      "/our-work/rv-parts-express",
      "/our-work/smart-security",
    ];

    const urls = routes
      .map((route) => {
        const priority =
          route === "/" ? "1.00" : route.includes("contact") ? "0.90" : "0.80";

        return `
      <url>
        <loc>${MAIN_URL}${route}</loc>
        <lastmod>${getCurrentTime()}</lastmod>
        <priority>${priority}</priority>
      </url>`;
      })
      .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap/style-sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`;
  }

  export async function GET() {
    const sitemap = generateSiteMap();

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }