# My React TODO App

A beginner-friendly TODO app built with React and Vite. It supports adding tasks, marking tasks complete, deleting tasks, filtering tasks, clearing completed tasks, and saving tasks in the browser.

## Run on your Windows laptop

1. Install Node.js LTS from https://nodejs.org/en/download if you do not already have it.
2. Open this folder in VS Code.
3. In VS Code, choose **Terminal → New Terminal**.
4. Run these commands, one at a time:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local address shown in the terminal (usually http://localhost:5173/).

Keep the terminal open while testing the local website. Press `Ctrl+C` in the terminal to stop it.

## Publish to your own GitHub Pages

### 1. Create a GitHub repository

- Sign in to https://github.com
- Click **+** → **New repository**
- Repository name: `todo-app`
- Choose **Public**
- Do not add a README, `.gitignore`, or license (this project already has its own files)
- Click **Create repository**

### 2. Upload the project

In VS Code, open this project folder, then choose **Terminal → New Terminal**. Run each command one at a time:

```bash
git init
git add .
git commit -m "Create my React TODO app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/todo-app.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git is not installed, install Git for Windows from https://git-scm.com/download/win, then close and reopen VS Code.

If Git asks you to set your name and email, use the name and email you want associated with your commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then repeat the commit/push commands as needed. Sign in through the browser if GitHub asks you to authenticate.

### 3. Turn on GitHub Pages

1. Open your `todo-app` repository on GitHub.
2. Click **Settings**.
3. In the left sidebar, choose **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### 4. Wait for deployment

1. Click the **Actions** tab in your repository.
2. Open the latest **Deploy React TODO App** workflow.
3. Wait until the workflow finishes with a green check mark.

Your website will be:

`https://YOUR-USERNAME.github.io/todo-app/`

Replace `YOUR-USERNAME` with your GitHub username.

## Important

This project is configured for a repository named `todo-app`. If you choose a different repository name, update `base: '/todo-app/'` in `vite.config.js` to match it.

Task data is saved in the browser's local storage. It is not synced between different browsers or devices.
