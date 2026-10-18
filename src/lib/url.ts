// Prefixes paths with the configured `base`, so links keep working if the site is deployed to a sub-folder.
export const url = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
