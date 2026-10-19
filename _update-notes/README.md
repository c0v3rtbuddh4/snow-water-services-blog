# SNOW journal sections update

This is a **patch** for the existing SNOW Jekyll/GitHub Pages website, not a replacement for the whole repository.

## What changes
- `/journal/` opens directly to Section 1: Introduction.
- Sections 2–5 each have their own page.
- The homepage Journal area shows all five sections with transition descriptions.
- Each section has working links to the other sections and next-section navigation.
- Every destination link in Section 2's end navigation opens the group vlog first; the reader can then continue to the chosen section.
- The vlog can also be opened from the introduction and the final thank-you paragraph.
- The eight figures and captions in the supplied completed draft are included.
- The supplied references are appended to each section before the Continue the Story panel.
- The vlog popup includes its eight supplied references below the Continue / Close and stay here options.
- The right-side river navigation is hidden on Sections 2–5.

## Upload carefully
1. Download and extract this ZIP.
2. In your existing GitHub repository, upload the **contents** of this folder, preserving folder structure.
3. Replace the existing `index.html`, `_layouts/default.html`, `assets/css/style.css`, `assets/js/main.js`, and `journal/index.html` when prompted.
4. Add the new `_layouts/journal-section.html`, `_includes/vlog-modal.html` if present, the four new section folders under `journal/`, and the new image files under `assets/images/`.
5. **Do not replace `_config.yml`, `_posts`, `about.md`, `faq.md`, or any other files not included in this update.** This preserves your repository URL, personal email change and existing post edits.
6. Commit the changes to `main` and wait for GitHub Pages to rebuild.

The patch uses the existing Jekyll `relative_url` configuration, so it should continue to work with your repository's current `url` and `baseurl` settings.

## Content note
Section text and figure captions are drawn from `Group Wastewater Blog - Final Draft.docx`. In-text citations are retained as supplied. Section references are drawn from `Group Wastewater Blog - Final References.docx`; vlog references are reproduced from the supplied user message.
