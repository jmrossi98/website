deploy: build
	sudo docker stop website; exit 0;
	sudo docker build -t website .
	sudo docker run -p 3000:80 -d --name website --rm website

run: build
	npm start

build: git
	npm run build

git: .PHONY
	git pull

.PHONY:
