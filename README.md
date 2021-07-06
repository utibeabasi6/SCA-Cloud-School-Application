# SCA-Cloud-School-Application
This is the repository for my SCA cloud school application

## Project details
### Dockerhub repo link
https://hub.docker.com/repository/docker/utibeabasi6/sca-application

### How to run
- Make sure you have docker installed by tying `docker --version` on the command line
- If not, download it here; https://docs.docker.com/get-docker/
- Make sure you have git installed
- Clone the github repo by running `git clone <REPO URL>`
- Navigate into the docker folder on the commandline and build the image from the dockerfile by running `docker build -t <YOUR IMAGE NAME> .` 
- Run `docker run -p 3000:3000 <YOUR IMAGE NAME>` to start a container that binds port 3000 of your pc to the container
- Visit http://localhost:3000 to view the webpage
- Also you can just pull the image from docker hub by typing `docker pull utibeabasi6/sca-application` then run the container by typing `docker run -p 3000:3000 utibeabasi6/sca-application`
