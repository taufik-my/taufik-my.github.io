# Docker Cleanup & Reopen Guide

Personal reference notes. You can open this file on your Mac at:
`/Users/taufikmy/Code/taufik-my.github.io/DOCKER_CLEANUP.md`
(double-click to preview, or open in TextEdit — no need to launch the dev container).

> ✅ All your website work is committed and pushed to GitHub and is live at
> https://taufik-my.github.io — so closing the container is completely safe.

---

## 1. Close the container

In VS Code: press **⌘⇧P** → type and choose **"Close Remote Connection"**
(or just quit VS Code). This stops the running dev container.

## 2. Reclaim the disk space (pick ONE)

### Easiest — Docker Desktop app

1. Open **Docker Desktop**
2. Click the **🐞 bug / Troubleshoot** icon (top-right)
3. Click **"Clean / Purge data"** → confirm
4. This compacts Docker's disk image and recovers most of the ~34 GB

### Or — Terminal (run on the Mac, NOT inside the container)

```bash
docker system df                    # show current usage
docker system prune -a --volumes    # remove unused images, containers, cache, volumes
```

> Note: pruning alone often will NOT shrink the underlying `Docker.raw` disk file.
> If the space isn't freed, still use Docker Desktop's **Clean / Purge data**.

## 3. (Optional) Stop it filling up again

Docker Desktop → **Settings → Resources → Disk usage limit** → lower the cap.

---

## 4. How to reopen the project later ("Reopen in Container")

When you want to work on the site again:

1. Open **VS Code**.
2. **File → Open Folder…** → select the `taufik-my.github.io` folder
   (at `/Users/taufikmy/Code/taufik-my.github.io`).
3. VS Code detects the `.devcontainer` config and shows a small popup in the
   bottom-right: **"Reopen in Container"** — click it.
   - If you miss the popup: press **⌘⇧P** → choose
     **"Dev Containers: Reopen in Container"**.
4. **First time after a purge**, it rebuilds the container image
   (downloads the base image + installs tools). This takes a few minutes — normal.
5. When it finishes, your terminal, preview server, and Copilot Chat are all
   available again. You can reopen this chat, or start a new one and say
   _"continue the al-folio migration"_.

---

## Handy commands once you're back in the container

```bash
# preview the site locally (then open http://localhost:4000)
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# build once (production-style)
bundle exec jekyll build

# deploy a change: commit + push main (GitHub Actions rebuilds the live site)
git add -A && git commit -m "your message" && git push origin main
```

## Notes / leftovers for later (optional)

- **Blog comments (giscus):** already configured and working.
- **Merged branch:** the old `v1-migration` branch can be deleted on GitHub (harmless to leave).
- **Theme overrides:** the CV uses a few local overrides
  (`_includes/cv/experience.liquid`, `_includes/cv/education.liquid`,
  `assets/css/main.scss`, `_sass/_cv-fixes.scss`). If you ever update the
  al-folio gems, run `bundle exec al-folio upgrade overrides audit` to review them.
- **Editing `_pages/about.md`:** that one file resists automated edits in this
  setup — edit it by hand if needed.
