# neurobium.com domain sale landing page

Responsive Next.js site offering neurobium.com for acquisition. Inquiry buttons open a new email draft addressed to work.kaantha@gmail.com. The price is negotiable by email.

## Run locally
Install Node.js 20 or later. In a terminal opened in this folder run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Domain and email settings are in `src/config.ts`.

## Push to GitHub
Create an empty GitHub repository, then run these commands from this folder (replace the URL with your repository):

```bash
git init
git add .
git commit -m "Build domain-for-sale landing page"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If Git is already initialized here, skip `git init`.

## Deploy on free Vercel
1. Sign in at https://vercel.com and select **Add New → Project**.
2. Connect GitHub and import your repository.
3. Keep the detected Next.js defaults and select **Deploy**.
4. Vercel provides a `*.vercel.app` URL. New pushes to `main` deploy automatically.

## Optional custom website domain
In the Vercel project, open **Settings → Domains**, enter the domain to use for hosting, then set the DNS records Vercel displays at your registrar. DNS updates may take time. Only host this page on neurobium.com if you intend to use it as the website domain rather than transfer it to the buyer.

The site does not claim trademark rights, a broker, an existing escrow arrangement, or guaranteed domain performance. A registrar or trusted escrow service can be agreed for transfer.
