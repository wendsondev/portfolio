declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_SKILLS_URL: string;
      NEXT_PROJECTS_URL: string;
      NEXT_CONTENT_URL: string;
      NEXT_COVER_URL: string;
    }
  }
}

export {};
