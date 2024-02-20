import GenerateSitemap from "react-router-sitemap-maker";
import MyRoutes from "../routes/routes";

const sitemapData = await GenerateSitemap(MyRoutes(), {
	baseUrl: "https://sykim-hanghae-project.github.io/commerce",
	hashrouting: true,
	changeFrequency: "monthly"
});

sitemapData.toFile("./public/sitemap.xml");