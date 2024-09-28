import { field, group } from "@nuxthq/studio/theme";
export default defineAppConfig({
	// Configure Content Wind here
	cover: "/cover.jpg",
	socials: {
		twitter: "Atinux",
		github: "Atinux/content-wind",
		mastodon: "@atinux@webtoo.ls",
	},
	appConfig: {
		parent: group({
			title: "UI",
			description: "UI configuration",
			icon: "i-ph-palette-fill",
			fields: {
				primary: field({
					type: "string",
					title: "Primary",
					description: "Primary color of your UI.",
					icon: "i-ph-palette",
					default: "sky",
					required: ["sky", "mint", "rose", "amber"],
				}),
			},
		}),
	},
});
