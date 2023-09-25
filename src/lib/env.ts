const createEnv = (name: string) => `process.env.NEXT_PUBLIC_${name}`;

export const baseUrl = createEnv('BASE_URL');
