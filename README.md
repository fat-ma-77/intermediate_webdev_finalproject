# intermediate_webdev_finalproject

Simple interest calculator using principal amount, annual percentage rate, and time in years.

## Run

```powershell
npm install
npx jasmine
npx webpack
```

The formula is `principal * (rate / 100) * time`. Input values are converted with `Number()`, validated, and displayed without crashing when an element is absent. The input IDs are `principal`, `rate`, and `time`.

`script.js` and `src/script.js` contain the same implementation. The root file is available at the assignment's required submission URL; Webpack bundles the source file in `src`. Keep both copies synchronized when editing.

Open `index.html` after building, or use the complete static site in `dist/index.html`. The distribution includes `index.html`, `main.js`, `favicon.ico`, and `style.css`.

The HTML includes a favicon, external stylesheet and deferred JavaScript, a descriptive title, meta description, viewport metadata, a heading, labels, and an accessible result announcement.

## Assignment evidence

- `no-spec.txt`: actual `npx jasmine` output while the spec file was temporarily disabled, including the command.
- `both-tests-passed.txt`: actual `npx jasmine` output with both specs restored and passing, including the command.
- `dist-directory.txt`: actual `npx webpack` output for the complete distribution, including the command.

This project was adapted to the requirements supplied in grading feedback. The original course starter was not available.
