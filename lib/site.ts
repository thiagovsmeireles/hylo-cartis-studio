// Canonical site URL: brand domain by default, GitHub Pages project URL on Pages builds.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.GITHUB_PAGES === 'true'
    ? 'https://thiagovsmeireles.github.io/hylo-cartis-studio'
    : 'https://www.hylocartis.com.br');
