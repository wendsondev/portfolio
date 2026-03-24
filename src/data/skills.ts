export type Skill = {
	imageUrl: string;
	skill: string;
	iconBg?: boolean;
};

export type SkillCategory = {
	key: string;
	skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
	{
		key: "skill-frontend",
		skills: [
			{ imageUrl: "/skill/typescript.svg", skill: "TypeScript" },
			{ imageUrl: "/skill/react.svg", skill: "React" },
			{ imageUrl: "/skill/nextjs.svg", skill: "Next.js", iconBg: true },
			{ imageUrl: "/skill/react.svg", skill: "React Native" },
			{ imageUrl: "/skill/vitejs.svg", skill: "Vite" },
			{ imageUrl: "/skill/tailwindcss.svg", skill: "TailwindCSS" },
			{ imageUrl: "/skill/radix-ui.svg", skill: "Radix UI", iconBg: true },
			{
				imageUrl: "/skill/react-query.svg",
				skill: "React Query",
				iconBg: true,
			},
			{ imageUrl: "/skill/react-hook-form.svg", skill: "React Hook Form" },
			{ imageUrl: "/skill/styled-components.svg", skill: "Styled Components" },
			{ imageUrl: "/skill/html5.svg", skill: "HTML5/CSS3" },
		],
	},
	{
		key: "skill-backend",
		skills: [
			{ imageUrl: "/skill/nodejs.svg", skill: "Node.js" },
			{ imageUrl: "/skill/nestjs.svg", skill: "NestJS" },
			{ imageUrl: "/skill/express-js.svg", skill: "Express.js", iconBg: true },
			{ imageUrl: "/skill/python.svg", skill: "Python" },
			{ imageUrl: "/skill/fastapi.svg", skill: "FastAPI", iconBg: true },
			{ imageUrl: "/skill/socket-io.svg", skill: "Socket.io", iconBg: true },
			{ imageUrl: "/skill/swagger.svg", skill: "Swagger" },
			{ imageUrl: "/skill/postgresql.png", skill: "PostgreSQL" },
			{ imageUrl: "/skill/mongodb.svg", skill: "MongoDB" },
			{ imageUrl: "/skill/redis.svg", skill: "Redis" },
			{ imageUrl: "/skill/typeorm.png", skill: "TypeORM" },
		],
	},
	{
		key: "skill-infra",
		skills: [
			{ imageUrl: "/skill/docker.png", skill: "Docker" },
			{ imageUrl: "/skill/aws.svg", skill: "AWS", iconBg: true },
			{ imageUrl: "/skill/github.svg", skill: "GitHub Actions", iconBg: true },
			{ imageUrl: "/skill/vercel.svg", skill: "Vercel", iconBg: true },
			{ imageUrl: "/skill/openai.svg", skill: "OpenAI", iconBg: true },
		],
	},
];
