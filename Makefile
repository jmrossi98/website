deploy: build
	docker stop website; exit 0;
	docker build -t website .
	docker run -p 3000:80 -d --name website --rm website

run: build
	npm start

build: git
	npm run build

git: .PHONY
	git pull

.PHONY:
