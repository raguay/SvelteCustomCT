# Tasks for CustomCT

## build (message)

```bash
npm run build
rm -Rf launch/js launch/css launch/imgs launch/site
mkdir launch/css launch/js
cp public/*.js launch/js
cp public/*.css launch/css
cp -Rf public/imgs launch/
cp -Rf public/site launch
cp public/CNAME launch
cp public/*.xml launch
cp public/*.txt launch
cp public/feed.json launch
cp public/404.html launch

#
# upload the changes.
#
cd launch
git add *
git commit -am "$message"
git push
cd ..

```

## dev

```bash
echo "Compiling..."
npm run dev
```
