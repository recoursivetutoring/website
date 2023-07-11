# Recoursive website

The website

## Development

To get started, cd into the folder and install the dependencies:

```bash
cd website
npm install
```

Then, run the development server:

```bash
npm run dev
```

For the most part, you should not need to work in the root of the `src` directory, except for minor tweaks to `index.css`. However, note that `index.css` will apply styles *globally* to the site. If you need to add styles to a specific page, you should create a new CSS file in the `src/css` directory and import it into the page's JSX file.

For more insight in how you can contribute, see the [CONTRIBUTING.md](CONTRIBUTING.md) file or open a new issue.