# SNOW — GitHub Pages + Jekyll

This is the static-blog version of SNOW. It keeps the dark water-inspired design and interactive details, but uses Jekyll to turn Markdown files into individual article pages, a homepage feed and a journal archive.

## 1. Before uploading

1. Create a **public** repository on GitHub, for example `snow-water-services-blog`.
2. Download and unzip this package.
3. Open `_config.yml`.
4. Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPOSITORY` with the repository name.

For example, if your username is `riverwriter` and the repository is `snow-water-services-blog`, use:

```yaml
url: "https://riverwriter.github.io"
baseurl: "/snow-water-services-blog"
```

If you name the repository exactly `YOUR-USERNAME.github.io`, set `baseurl: ""` instead.

## 2. Upload the files

Upload the **contents** of this folder to the root of your GitHub repository. The root should contain `_config.yml`, `index.html`, `_layouts/`, `_posts/`, `assets/`, `about.md`, `faq.md` and `journal/`.

Do not upload only the ZIP file. GitHub Pages needs the unzipped files in the repository.

## 3. Turn on GitHub Pages

1. Open the repository on GitHub.
2. Choose **Settings**.
3. In the left menu, open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch** if that option is available.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait a few minutes for the first build. The Pages screen will show the published URL.

The usual project-site URL is `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

## 4. Publish a new article

1. Open the `_posts` folder in your repository.
2. Choose **Add file → Create new file**.
3. Name the file using this pattern: `YYYY-MM-DD-short-title.md`. For example: `2026-11-02-water-reuse.md`.
4. Start with front matter like this:

```yaml
---
layout: post
title: "A clear article title"
date: 2026-11-02
category: "Reuse"
author: "Your name"
excerpt: "One sentence that introduces the article."
---
```

5. Under the second `---`, write the article in Markdown. Use `## Heading` for section headings, `- item` for bullet points and `[link text](https://example.com)` for links.
6. Commit the new file to `main`. GitHub Pages will rebuild the site and the article should appear on the homepage and journal archive.

**Important:** the date in the filename should match the date in the front matter. Jekyll uses the filename to recognise posts.

## 5. Edit existing pages

- Homepage: `index.html`
- About page: `about.md`
- FAQ page: `faq.md`
- Site-wide layout/navigation: `_layouts/default.html`
- Article layout: `_layouts/post.html`
- Colours, layout and responsive styling: `assets/css/style.css`
- Interactive effects: `assets/js/main.js`
- Site title, URL and settings: `_config.yml`

## 6. Add an image to an article

Upload an image into `assets/images/`. Then add this to the article's front matter:

```yaml
cover_image: /assets/images/your-image.jpg
cover_alt: "A useful description of the image"
```

The article template automatically displays a cover image when `cover_image` is provided. In article text, you can also use:

```markdown
![Description of image]({{ '/assets/images/your-image.jpg' | relative_url }})
```

## 7. Things to know

- **No WordPress or PHP is required.** GitHub Pages builds the site with Jekyll.
- The included three posts are starter examples to demonstrate the layout. They are not presented as fully researched features; add verified evidence, references and local context before treating them as finished articles.
- GitHub Pages is static hosting. It does not process email subscriptions or contact forms by itself. The About page has a `mailto:` link with a placeholder address: replace `YOUR-EMAIL@example.com` with an address you want to publish, or connect a third-party form/mailing-list service.
- Jekyll and the GitHub Pages build are case-sensitive about file and folder names. Keep `_posts`, `_layouts` and `assets` spelled exactly as supplied.
- When testing locally, changes to `_config.yml` may require restarting the Jekyll server.

## Folder map

```text
.
├── _config.yml
├── _layouts/
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts/
│   ├── 2026-10-07-who-pays-for-the-pipe.md
│   ├── 2026-10-08-designing-for-a-drier-future.md
│   └── 2026-10-09-last-kilometre-of-water.md
├── about.md
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── faq.md
├── index.html
└── journal/index.html
```
