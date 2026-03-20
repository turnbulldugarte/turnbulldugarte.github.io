# Stuart J. Turnbull-Dugarte - Academic Website

A modern, aesthetically pleasing academic website built with Hugo and the Apéro theme, featuring:

- **Publications** organized by research topic with collapsible sections
- **Altmetric badges** showing article-level metrics for each publication
- **Collapsible abstracts** for each paper
- **Social media integration** (Bluesky, LinkedIn, Google Scholar)
- **Supervision page** listing current and completed PhD students
- **Responsive design** that looks great on all devices
- **Clean, professional aesthetics** with smooth animations and transitions

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended, v0.112.0 or later)
- Git (for deployment)

### Installing Hugo

**macOS:**
```bash
brew install hugo
```

**Windows:**
```bash
choco install hugo-extended
```

**Linux:**
```bash
snap install hugo
```

Or download from [Hugo Releases](https://github.com/gohugoio/hugo/releases).

## Local Development

### Run Locally

From the `site` directory, run:

```bash
hugo server
```

The site will be available at `http://localhost:1313`.

For live reload with drafts:
```bash
hugo server -D
```

### Build Static Site

To generate the static site files:

```bash
hugo
```

This creates a `public/` directory with all static files ready for deployment.

## Project Structure

```
site/
├── content/
│   ├── _index.md           # Home page
│   └── publications/
│       └── _index.md        # Publications page
├── data/
│   └── publications.yaml    # Publications metadata (EDIT THIS)
├── layouts/
│   └── _default/
│       └── publications.html # Custom publications layout
├── static/
│   └── img/                 # Images (add avatar, logo, etc.)
├── themes/
│   └── hugo-apero/          # Apéro theme
├── hugo.toml                # Site configuration
└── README.md
```

## Editing Content

### Adding/Updating Publications

Edit `data/publications.yaml`. Structure:

```yaml
topic_key:
  title: "Topic Display Name"
  publications:
    - title: "Article Title"
      authors: "Author1, Author2"
      year: 2024
      journal: "Journal Name"
      volume: "12"      # optional
      issue: "3"        # optional
      pages: "1-20"     # optional
      doi: "10.xxxx/xxxxx"
      award: "Award name"  # optional
      abstract: "Full abstract text here..."  # optional
```

**Features:**
- Publications are organized under **collapsible topic sections** that can be expanded/collapsed
- Each **paper title is clickable** to reveal its abstract in a dropdown
- Only publications with a `doi` field will display Altmetric badges
- Abstracts are optional - if not provided, a link to the DOI will be shown instead

**Adding Abstracts:**
Simply add an `abstract:` field to any publication entry. See examples in the YAML file for the APSA award-winning paper and the snap elections paper.

### Topics/Sections

Topics are defined by top-level keys in `publications.yaml`:
- `lgbtq_politics`
- `social_identities`
- `far_right`
- `elections`

Add new topics by creating new top-level sections with `title` and `publications` fields.

### Home Page

Edit `content/_index.md` to update:
- Biography
- Research interests
- Current projects
- Institutional affiliation

### Site Configuration

Edit `hugo.toml` to update:
- Site title
- Author name
- Navigation menus
- Social media links (in `params.social` section)
- Base URL (for production deployment)

### Social Media Links

Social media icons appear on the home page. Configure them in `hugo.toml`:

```toml
[[params.social]]
  name = 'Bluesky'
  icon = 'bluesky'
  icon_pack = 'fab'
  url = 'https://bsky.app/profile/yourusername'

[[params.social]]
  name = 'LinkedIn'
  icon = 'linkedin'
  icon_pack = 'fab'
  url = 'https://www.linkedin.com/in/yourusername/'

[[params.social]]
  name = 'Google Scholar'
  icon = 'google-scholar'
  icon_pack = 'fab'
  url = 'https://scholar.google.com/citations?user=YOURUSER'
```

The site uses Font Awesome 6 icons. Available icon packs:
- `fab` = Font Awesome Brands (social media)
- `fas` = Font Awesome Solid
- `far` = Font Awesome Regular

### Supervision Page

Edit `content/supervision/_index.md` to update:
- Current PhD students
- Completed PhD students
- PhD examinations
- Areas of supervision interest

The supervision page is linked in the main navigation menu.

## Deployment to GitHub Pages

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### 2. Configure for GitHub Pages

Update `hugo.toml`:
```toml
baseURL = 'https://USERNAME.github.io/REPO-NAME/'
```

Or for custom domain:
```toml
baseURL = 'https://yourdomain.com/'
```

### 3. Set Up GitHub Actions

Create `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

### 4. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - site will auto-deploy

## Altmetric Badges

Altmetric donuts appear automatically for any publication with a `doi` field. The badges:
- Display article-level metrics (mentions, shares, citations)
- Are clickable and show detailed breakdowns
- Update automatically from Altmetric's service
- Require no API key or configuration

If a DOI is new or has no metrics yet, the badge may not display.

## Customization

### Adding Images

Place images in `static/img/`:
- `avatar.jpg` - Profile photo (referenced in config)
- `logo.png` - Site logo
- `favicon.ico` - Browser favicon

### Custom CSS

Create `static/css/custom.css` and add to `hugo.toml`:

```toml
[params]
  customCSS = ["css/custom.css"]
```

### Navigation

Edit `hugo.toml` `[[menu.header]]` sections to add/remove menu items:

```toml
[[menu.header]]
  name = 'Research'
  title = 'Research'
  url = '/research/'
  weight = 3
```

## Troubleshooting

**Hugo server won't start:**
- Check Hugo version: `hugo version`
- Ensure you're in the `site` directory
- Verify theme exists: `ls themes/hugo-apero`

**Publications not showing:**
- Validate YAML syntax in `data/publications.yaml`
- Check indentation (use spaces, not tabs)
- Ensure `doi` fields are correct

**Altmetric badges not appearing:**
- Check browser console for errors
- Verify DOIs are correct
- Some DOIs may have no metrics yet

**GitHub Pages not deploying:**
- Check Actions tab for build errors
- Verify `baseURL` in `hugo.toml`
- Ensure GitHub Pages is enabled in Settings

## Support

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Apéro Theme Docs](https://hugo-apero-docs.netlify.app/)
- [Altmetric Badges](https://www.altmetric.com/products/free-tools/altmetric-badges/)

## License

Content © Stuart J. Turnbull-Dugarte. Hugo Apéro theme © RStudio, PBC (MIT License).
