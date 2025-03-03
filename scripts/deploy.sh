npx tailwindcss -i ./src/input.css -o ./public/output.css
npx babel src/react --out-dir public/react --presets react-app/prod

node ./bin/www -p 8080