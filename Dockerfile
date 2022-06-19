FROM mysql:latest
LABEL key="docker-image-for-etho-bootcamp"
RUN apt-get update 
VOLUME ["/backup/backup-teste"]
