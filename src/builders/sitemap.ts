import GenerateSitemap from "react-router-sitemap-maker";
import MyRoutes from "../routes/routes";

const sitemapData = await GenerateSitemap(MyRoutes(), {
	baseUrl: "https://commerce-seven-chi-53.vercel.app",
	hashrouting: true,
	changeFrequency: "monthly"
});

sitemapData.toFile("./public/sitemap.xml");