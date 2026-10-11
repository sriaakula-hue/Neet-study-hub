# Neet-study-hub
Website for neet students

Free revision website with 72 lesson pages, 720 practice questions, student login, saved progress and full mock tests.

## Cloudflare automatic deployment

Connect the existing `neetstudyhub` Worker to this repository in Settings → Builds.

- Production branch: `main`
- Root directory: repository root
- Build command: leave blank (static files are already built)
- Deploy command: `npx wrangler@4 deploy`

The `public` directory contains the complete deployable website. `wrangler.json` points to that directory and the existing Worker name. Commits to the connected production branch trigger deployment.

Google verification, robots.txt and the 73-URL sitemap are included. Browser configuration contains only a Supabase publishable key; database access must remain protected with Row Level Security. Do not put server secrets or API tokens in this repository.
