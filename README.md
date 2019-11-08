This repo is intended to hold project sites in their development stage. 


My intention was to set up a personal live development server so that I can host websites before releasing them to production. This would allow me to test the site on multiple devices and observe how the site interacts live.


I decided to set up a simple EC2 instance and host an apache server running on an ubuntu platform from a docker container.
The AWS guides have very thorough step-by-step instructions, which made this quite easy.

******************************************************
This documentation could be incomplete or inaccurate. 
These are the recorded steps I took in deploying a project server instance. 
The purpose of this is to provide the writer of this guide future reference.
******************************************************
These steps were performed on Linux Mint 18.3 Sylvia.


To recreate, make an account with AWS (I went with the free tier).


Go to your dashboard and find services and select EC2

Launch an instance (I set up a type t2.micro Amazon Linux 2).

I would recommend making a folder in your projects directory to store a few files locally.**


After you configure your instance, set up ssh-key-pairs using the key-pair manager:
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair

  Save your key-pair as a *.pem file and change the permissions of the file via:
    chmod 400  testance.pem
  You will need to use this file when logging into your ec2 instance.
  Save this file in the folder you made earlier.


Go to your EC2 dashboard and find your instance details and get its Public DNS (IPv4)
  https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-viewing


Open up terminal and log into your instance vis ssh:
  ssh -i <path-to-your-ssh-file.pem> ec2-user@<public-dns>


For Amazon Linux 2 or the Amazon Linux AMI, the user name is `ec2-user`. If you used a different type, it may be different (or you may have configured it already).


If you weren't able to connect, you may need to enable inbound traffic or reconfigure your key-pairs. Go through the prerequisites and ssh guides:
  prereq - 
    https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html#connection-prereqs-get-info-about-instance
  connect via ssh -
    https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html#AccessingInstancesLinuxSSHClient


Install Docker on your instance the AWS way (it proved to be a bit tricky to do it manually):
  https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html#install_docker


Create a Docker file:
  https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html#docker-basics-create-image

Now to host our repo we are going to make a simple addition to the example Dockerfile and it should look something like this:


        FROM ubuntu:18.04

        RUN apt-get update && \
        apt-get -y install apache2

        RUN apt-get -y install git
        RUN git clone https://github.com/<github-handle>/<repo-name>.git /var/www/html/dev_serv 

        RUN echo '. /etc/apache2/envvars' > /root/run_apache.sh && \
        echo 'mkdir -p /var/run/apache2' >> /root/run_apache.sh && \
        echo 'mkdir -p /var/lock/apache2' >> /root/run_apache.sh && \
        echo '/usr/sbin/apache2 -D FOREGROUND' >> /root/run_apache.sh && \
        chmod 755 /root/run_apache.sh

        EXPOSE 80

        CMD /root/run_apache.sh

Just replace <github-handle> and  <repo-name> with the details that matche your project.

If you plan to serve a repo you have set to private, you may need to change the syntax of your clone command:
  git clone https://<handle>:<github-password>@github.com/<handle>/<repo-name>.git
    src:    https://github.community/t5/How-to-use-Git-and-GitHub/Clone-private-repo/td-p/12616


As stated in the guide to build a docker image, after you create your Dockerfile, run the build command:
  docker build -t <image-name> .


Once complete, you should be able to run your new docker container which will serve the specified repo:
  docker run -t -d -i -p 80:80 <image-name>


And visit it at the Public DNS we used to log in via ssh followed by our configured end-point:
  <public-dns>/dev_serv


If you can connect to your intance server via http but not https, you may need to enable inbound connections:
  https://docs.aws.amazon.com/cloudhsm/latest/userguide/ssl-offload-enable-traffic-and-verify-certificate.html#ssl-offload-add-security-group-linux



Great, now we are hosting a simple project site (supposing all the steps have been completed successfully up to this point). However, every time we make a change to our repo, even if we save, commit, and push to github, our docker container is still serving the image we built using the repo as it was when we ran docker build to create the image. So in order to have an updated live site, we need to scrap the old image and rebuild it.

For this, I wrote a Bash script that I called auto. It is not a package, so you will have to create a file called 'auto' in the same directory as the key-pair.pem file, copy the contents, and save it. 
Make the file executable with:
  chmod +x auto

Note: cluttering the bashrc file isn't recommended. There are various other options for setting your $PATH, but I am showing .bashrc for the sake of a simple example.**

You can set your PATH variable so that you can use the previous script without specifying it's full path.
  Supposing the folder you created was named 'dev_serv' and it was in a project folder named 'projects' in your home directory:
  Add to the bottom of your .bashrc or .profile:
    export PATH="$HOME/projects/dev_serv:$PATH"

  Then save and exit.
  Source the file and try it out with:
    auto --help
  You should see a short help message. If not, double check the path you entered matches the path to the file we created.


Now everytime you update your project and want your live site to reflect the changes, you can use:
  auto <key-pair.pem> <ec2-username>@<public-url>






