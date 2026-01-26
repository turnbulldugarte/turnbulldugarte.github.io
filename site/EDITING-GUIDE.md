# Website Editing Guide

A simple guide for editing your academic website and publishing changes.

**Your live website:** https://stuartjames1990.github.io/

**GitHub repository:** https://github.com/stuartjames1990/stuartjames1990.github.io

---

## Quick Start

### 1. Running the Site Locally

Open Terminal and navigate to the site directory:

```bash
cd /Users/stuart/Library/CloudStorage/OneDrive-UniversityofSouthampton/WEBSITE/site
hugo server
```

The site will be available at: **http://localhost:1313**

Press `Ctrl+C` to stop the server.

---

## Editing Content

### Home Page

**File**: `content/_index.md`

Edit this file to update:
- Your biography
- Research interests
- Current projects
- Background information

```markdown
## About

I am a quantitative political scientist whose research interests span...
```

### Publications

**File**: `data/publications.yaml`

Add or edit publications:

```yaml
lgbtq_politics:
  title: "LGBTQ+ Politics"
  publications:
    - title: "Your Paper Title"
      authors: "Author1, Author2"
      year: 2024
      journal: "Journal Name"
      volume: "12"
      issue: "3"
      pages: "1-20"
      doi: "10.xxxx/xxxxx"
      abstract: "Your abstract text here..."  # optional
      award: "Award name"  # optional
```

**Features**:
- Papers with a `doi` will show Altmetric badges automatically
- Click topic headers to collapse/expand sections
- Click paper titles to show/hide abstracts

**Adding new topics**:

```yaml
new_topic_key:
  title: "Your Topic Name"
  publications:
    - title: "First paper..."
```

### Supervision Page

**File**: `content/supervision.md`

Edit this file to update:
- Current PhD students
- Completed supervisions
- PhD thesis examinations

```markdown
## PhD supervision (ongoing)

**Student Name**, 2024-ongoing (co-sup. with Prof. X)
Thesis: Thesis title here
```

### Social Media Links

**File**: `hugo.toml`

Find the `[[params.social]]` sections and update URLs:

```toml
[[params.social]]
  name = 'Bluesky'
  icon = 'bluesky'
  icon_pack = 'fab'
  url = 'https://bsky.app/profile/yourusername'
```

---

## Compiling the Site

### For Local Development

While `hugo server` is running, changes are automatically rebuilt and refreshed in your browser. No manual compilation needed!

### Building for Deployment

1. **Stop the server** (Ctrl+C)

2. **Build the static site**:

```bash
cd /Users/stuart/Library/CloudStorage/OneDrive-UniversityofSouthampton/WEBSITE/site
hugo
```

This creates a `public/` folder with all the website files.

3. **Publish to GitHub Pages**:

Your site is published at: **https://stuartjames1990.github.io/**

After making changes, navigate to the main website folder and push your updates:

```bash
cd /Users/stuart/Library/CloudStorage/OneDrive-UniversityofSouthampton/WEBSITE
git add .
git commit -m "Describe your changes here"
git push
```

**What happens next:**
- GitHub Actions automatically builds your Hugo site
- The updated site is deployed to GitHub Pages
- Changes appear at https://stuartjames1990.github.io/ within 1-2 minutes

**Check deployment status:**
1. Go to https://github.com/stuartjames1990/stuartjames1990.github.io
2. Click the **Actions** tab
3. Look for a green checkmark ✓ (success) or red X (failed)

---

## Common Editing Tasks

### Adding a New Publication

1. Open `data/publications.yaml`
2. Find the appropriate topic section (or create a new one)
3. Add your publication:

```yaml
- title: "New Paper Title"
  authors: "You & Coauthors"
  year: 2026
  journal: "Journal Name"
  doi: "10.xxxx/xxxxx"
  abstract: "Your abstract..."
```

4. Save the file
5. If `hugo server` is running, refresh your browser
6. Otherwise, run `hugo server` to preview

### Updating Your Bio

1. Open `content/_index.md`
2. Edit the text under `## About` or other sections
3. Save the file
4. Refresh browser

### Adding a New Page

1. Create a new file in `content/`, e.g., `content/teaching.md`
2. Add front matter and content:

```markdown
---
title: "Teaching"
description: "My teaching experience"
---

## Courses

- Course 1
- Course 2
```

3. Add to navigation menu in `hugo.toml`:

```toml
[[menu.header]]
  name = 'Teaching'
  title = 'Teaching'
  url = '/teaching/'
  weight = 4
```

---

## File Structure

```
site/
├── content/               # Page content
│   ├── _index.md         # Home page
│   ├── supervision.md    # Supervision page
│   └── publications/
│       └── _index.md     # Publications page
│
├── data/
│   └── publications.yaml # Publications database
│
├── layouts/              # Page templates
│   ├── index.html       # Home page template
│   └── _default/
│       ├── baseof.html  # Base template
│       ├── single.html  # Single page template
│       └── publications.html
│
├── static/
│   ├── css/
│   │   └── custom.css   # Custom styles
│   └── img/             # Images
│
├── hugo.toml            # Site configuration
└── public/              # Built site (generated)
```

---

## Troubleshooting

### Server won't start

Check Hugo is installed:
```bash
hugo version
```

If not installed:
```bash
brew install hugo
```

### Changes not showing

1. **Hard refresh** your browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Stop and restart the server:
   ```bash
   # Press Ctrl+C to stop
   hugo server
   ```

### Publications not appearing

- Check YAML indentation (use spaces, not tabs)
- Ensure `doi:` field is present for Altmetric badges
- Verify file is saved

### Layout looks broken

Clear the public folder and rebuild:
```bash
rm -rf public
hugo
hugo server
```

---

## Tips

1. **Always preview locally** before deploying (`hugo server`)
2. **Use consistent YAML formatting** - spaces for indentation, no tabs
3. **Commit and push changes regularly** to keep your live site updated
4. **Test on mobile** - resize your browser window to check responsive design
5. **Wait for deployment** - after pushing, check the Actions tab on GitHub to ensure successful deployment

## Complete Workflow for Making Updates

**Step-by-step process for updating your live website:**

1. **Make your edits** in any text editor (VSCode, TextEdit, etc.)
   - Edit files in `content/`, `data/`, etc.

2. **Preview locally** (optional but recommended):
   ```bash
   cd /Users/stuart/Library/CloudStorage/OneDrive-UniversityofSouthampton/WEBSITE/site
   hugo server
   ```
   - View at http://localhost:1313
   - Press Ctrl+C when done

3. **Publish to GitHub**:
   ```bash
   cd /Users/stuart/Library/CloudStorage/OneDrive-UniversityofSouthampton/WEBSITE
   git add .
   git commit -m "Brief description of what you changed"
   git push
   ```

4. **Verify deployment**:
   - Go to https://github.com/stuartjames1990/stuartjames1990.github.io/actions
   - Wait for the green checkmark ✓
   - Visit https://stuartjames1990.github.io/ to see your changes

**Example commit messages:**
- `git commit -m "Add new publication to LGBTQ+ politics section"`
- `git commit -m "Update bio with new research interests"`
- `git commit -m "Add completed PhD supervision"`

---

## Getting Help

- **Hugo Documentation**: https://gohugo.io/documentation/
- **Apéro Theme Docs**: https://hugo-apero-docs.netlify.app/
- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/

---

## Quick Reference

| Task | Command |
|------|---------|
| Start local preview | `hugo server` |
| Stop server | `Ctrl+C` |
| Publish changes | `git add . && git commit -m "message" && git push` |
| View live site | https://stuartjames1990.github.io/ |
| Check deployment | https://github.com/stuartjames1990/stuartjames1990.github.io/actions |
| Build locally | `hugo` |
| Check Hugo version | `hugo version` |

---

**Need to make quick edits?**

1. Open the relevant file in any text editor
2. Make your changes
3. Save
4. Preview locally with `hugo server` (optional)
5. Publish with:
   ```bash
   cd /Users/stuart/Library/CloudStorage/OneDrive-UniversityofSouthampton/WEBSITE
   git add .
   git commit -m "Your change description"
   git push
   ```
6. Check https://stuartjames1990.github.io/ in a few minutes

That's it!
