## Setup

1. Run following scripts in terminal/command prompt to install dependencies.
    ```sh
      npm install
      npm run build
    ```
## Testing

1. To test on your local server, run the following command:
    ```sh
      npm run dev
    ```

2. Open the browser to http://localhost:3000/

### Deploy to \jamuupolyy.github.io/portfolio

Simply you just need to commit and push your changes to github. And [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#overview) will take care of the deployment. The site will be available at `https://jasonpolyy.github.io/portfolio`

### Deploy to \jasonpolyy.github.io

Create a new repository with the username as `jasonpolyy.github.io`. And let the following command do the job for you.

```sh
  npm run predeploy
  node scripts/cname.js <custom-url>
  node scripts/pages.js <your-username> master
```

The site will be available at `https://jasonpolyy.github.io`
