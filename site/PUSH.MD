# Pushing Updates to GitHub

Use these commands from the `site` folder whenever you have made changes you want to upload.

## 1. Check what changed

```bash
git status
```

## 2. Add files to the commit

Add everything:

```bash
git add .
```

Or add specific files only:

```bash
git add path/to/file
```

## 3. Commit your changes

```bash
git commit -m "Short description of what you changed"
```

## 4. Push to GitHub

```bash
git push origin main
```

If your default branch is `master`, use:

```bash
git push origin master
```

## First-time setup (only once per repo)

If this repository is not linked to GitHub yet:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

After that, future pushes usually just need:

```bash
git add .
git commit -m "Update content"
git push
```
