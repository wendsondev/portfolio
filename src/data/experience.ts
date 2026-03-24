export type Experience = {
	company: string;
	roleKey: string;
	periodKey: string;
	descriptionKey: string;
	highlightsKey: string;
	techs: string[];
};

export const experiences: Experience[] = [
	{
		company: "Freelance / Contract",
		roleKey: "exp1-role",
		periodKey: "exp1-period",
		descriptionKey: "exp1-description",
		highlightsKey: "exp1-highlights",
		techs: [
			"Node.js",
			"NestJS",
			"Python",
			"React",
			"Next.js",
			"PostgreSQL",
			"Redis",
			"Docker",
			"AWS",
			"OpenAI",
		],
	},
	{
		company: "Freelance",
		roleKey: "exp2-role",
		periodKey: "exp2-period",
		descriptionKey: "exp2-description",
		highlightsKey: "exp2-highlights",
		techs: ["React", "Next.js", "TypeScript", "Styled Components", "Git"],
	},
];
