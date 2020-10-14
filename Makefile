deploy:
	npm install
	npm run build
	cdk deploy --profile as-devjan
