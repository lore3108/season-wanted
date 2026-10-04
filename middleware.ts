@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f6f5fb;
  --foreground: #17163a;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), sans-serif;
}

* {
  box-sizing: border-box;
}

input,
textarea,
select,
button {
  font: inherit;
}

::selection {
  background: rgba(232, 51, 109, 0.15);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.02em;
}
