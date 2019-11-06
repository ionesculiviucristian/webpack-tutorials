## Docker Tutorial for Beginners - A Full DevOps Course on How to Run Applications in Containers
https://www.youtube.com/watch?v=fqMOX6JJhGo

CONTAINER = CONTAINER_ID | CONTAINER_NAME

#### download image and run container (exits immediately if the process inside stops)
docker run IMAGE_NAME
#### list running containers
docker ps
#### list all containers
docker ps -a
#### stop a running container
docker stop CONTAINER
#### remove container
docker rm CONTAINER
#### list images
docker images
#### remove image (must stop and delete containers before)
docker rmi CONTAINER
#### only download image
docker pull IMAGE_NAME
#### execute command inside container
docker exec CONTAINER COMMAND
#### run in detach mode (background mode)
docker run -d CONTAINER
#### run a specific version
docker run IMAGE_NAME:TAG
#### interactive and attached mode
docker run -it CONTAINER
#### specify docker host and container ports
docker run -p 80:5000 CONTAINER
#### map volumes to preserve data after running a rm command
docker run -v /opt/datadir:/var/lib/mysql CONTAINER
#### inspect container for more detailed information
docker inspect CONTAINER
#### view container logs
docker logs CONTAINER
#### pass an environment variable to the container (can be viewed when running inspect on the container)
docker run -e APP_NAME=MyApp CONTAINER
#### build the image from a Dockerfile
docker build Dockerfile -t IMAGE_NAME
#### and can be pushed to the docker registry
docker push IMAGE_NAME
### using commands and entry points
#### when running docker run CONTAINER sleep 10 it will override the command
CMD sleep 5 

CMD ["sleep", "5"]
#### when running docker run CONTAINER 10, 10 will be appended to the command
ENTRYPOINT ["sleep"]
#### the entry point can have a default value using
ENTRYPOINT ["sleep"]
CMD ["5"]
#### entry point can be overwritten
docker run --entrypoint COMMAND CONTAINER ARGUMENT
#### default networks
bridge - private internal network, created by docker, on the host where all the containers 
are attached by default

none - has no access to external networks or containers

host - removes the network isolation between the docker host and the docker container; the port is 
automatically mapped 
#### create user defined network
docker network create --driver bridge --subnet 182.18.0.0/16 custom-isolated-network
#### list networks
docker network ls
#### docker files  location
/var/lib/docker
#### creating and mounting / binding volumes
docker volume create data_volume // can be ignores as the following command already creates it

docker run -v data_volume:/var/lib/mysql CONTAINER
#### if the volume needs to be in a non-default location (/var/lub/docker/volumes)
docker run -v /data/mysql:/var/lib/mysql CONTAINER
#### using a newer method
docker run \\

--mount type=bind,source=/data/mysql,target=/var/lib/mysql CONTAINER
#### naming containers
docker run -d --name=redis redis
#### linking containers (--link is deprecated)
docker run -d --name=redis redis

docker run -d --name=vote -p 5000:80 --link redis:redis[container:host] voting-app

## Docker compose

#### bring up the entire application stack (must have a docker-compose.yml created)
docker-compose up
#### different versions of docker compose
in version 1 we use links

in version 2 links are named depends_on

















































