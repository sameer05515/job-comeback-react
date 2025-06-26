# Deploy reactjs+vite to github-pages
1. update vite.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/job-comeback-react"
})

```

2. install gh-pages dependency

```
npm install gh-pages --save-dev
```


3. add below in package.json

```
"homepage": "https://sameer05515.github.io/job-comeback-react/",
```

and below scripts

```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
```

4. commit main branch changes

5. deploy

```
npm run deploy
```

## References
[How To Deploy A React Vite App To Github Pages (Simple)](https://www.youtube.com/watch?v=hn1IkJk24ow)