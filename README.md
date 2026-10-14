# Website Optimization Assignment

This is a self-contained **example project** for practicing an SEO-friendly HTML page, safe JavaScript number conversion, Jasmine tests, and a Webpack production build. It is **not** claimed to be the course's original starter project.

## Set up (PowerShell in VS Code)

```powershell
npm install
```

## Task 3: Capture the real "no specs found" output

Temporarily rename `spec/calculator.spec.js` to `spec/calculator.spec.js.disabled` (or run this command):

```powershell
Rename-Item spec/calculator.spec.js calculator.spec.js.disabled
npx jasmine 2>&1 | Tee-Object -FilePath no-spec.txt
```

**Important:** Keep the `spec/support/jasmine.mjs` configuration file. The command should report no specs; capture the **actual** output, not an invented transcript.

## Task 4: Capture both tests passing

```powershell
Rename-Item spec/calculator.spec.js.disabled calculator.spec.js
npx jasmine 2>&1 | Tee-Object -FilePath both-tests-passed.txt
```

Confirm the output says `2 specs, 0 failures` before submitting.

## Task 5: Capture Webpack output

```powershell
npx webpack 2>&1 | Tee-Object -FilePath dist-directory.txt
Get-ChildItem dist
```

Check that the output reports successful compilation and that `dist/bundle.js` exists.

## GitHub URLs for Tasks 1 and 2

```powershell
git init
git add .
git commit -m "Complete website optimization assignment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Create an **empty public GitHub repository** before adding its remote. Then submit:

- Task 1: `https://github.com/YOUR_USERNAME/YOUR_REPO/blob/main/index.html`
- Task 2: `https://github.com/YOUR_USERNAME/YOUR_REPO/blob/main/script.js`
- Tasks 3–5: Paste the **actual terminal content** of the three text files.

For an assessment based on a supplied starter repository, adapt these changes to the official starter files and the exact function/API names required by the course tests.
