include ../infrastructure/deploy/makefile-static-vue.mk

webpack-dev:
	npm run dev

deploy-production:
	npm run deploy
