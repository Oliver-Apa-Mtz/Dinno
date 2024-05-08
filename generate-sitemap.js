import { SitemapStream, streamToPromise } from "sitemap";

const sitemap = new SitemapStream({
	hostname: "https://www.dinno.com.mx/",
});
sitemap.write({ url: "/", changefreq: "daily", priority: 1 });
sitemap.write({ url: "/inicio", changefreq: "daily", priority: 1 });
sitemap.write({ url: "/caracteristicas", changefreq: "daily", priority: 0.9 });
sitemap.write({ url: "/precios", changefreq: "daily", priority: 0.8 });
sitemap.write({ url: "/contacto", changefreq: "daily", priority: 0.8 });
sitemap.write({ url: "/blog", changefreq: "weekly", priority: 0.7 });
sitemap.write({ url: "/nosotros", changefreq: "weekly", priority: 0.7 });
sitemap.write({
	url: "/gracias-por-contactarnos",
	changefreq: "monthly",
	priority: 0.6,
});
sitemap.write({
	url: "/aviso-de-privacidad",
	changefreq: "monthly",
	priority: 0.6,
});

sitemap.end();

streamToPromise(sitemap)
	.then((data) => {
		console.log("Sitemap generado correctamente", data.toString());
	})
	.catch((error) => {
		console.error("Error al generar el sitemap", error);
	});
