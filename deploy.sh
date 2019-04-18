#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# creates CNAME file for custom domain
echo 'kimlisa.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploying to gh-pages
git push -f git@github.com:kimlisa/personal-portfolio-v1.git master:gh-pages

cd -
