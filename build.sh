rm public -rfd
mkdir public

sass css/main.scss:public/css/main.css 
cp -r index.html script.js images audio video node_modules public/
