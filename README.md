# Elevate2020_ReactUI Draft
Steps To run the Elevate2020_ReactUI:


    Step1: git clone <Elevate2020_ReactUI Repo>
    Step2: cd <Elevate2020_ReactUI Repo>
    step3: rm -rf node_modules [If Present]
    Step4: npm install
    Step5: npm start

Setting The Proxy for the use of springboot API:

    Step1: Open the package.json [vi Elevate2020_ReacUI/package.json]

    Step2: Add

           "proxy": "http://localhost:8080" [For local testing]

      If deployed in Kuberneetes,

            "proxy": "<service-name>:<PORT>"


To run the react app NodeJs should be installed in system:
If NodeJs NOT installed follow the below Steps:

Install NodeJs package:

        https://nodejs.org/en/



For Docker Containerization of ReactAPP:
Step1: Write the dockerfile in root of App

        FROM node:9-slim
        # WORKDIR specifies the directory our
        # application's code will live within
        WORKDIR /app
        # We copy our package.json file to our
        # app directory
        COPY package.json /app
        # We then run npm install to install
        # express for our application
        RUN npm install
        # We then copy the rest of our application
        # to the app direcoty
        COPY . /app
        # We start our application by calling
        # npm start.
        CMD ["npm", "start"]

Step2: Build the docker image

        docker build -t ss-react-ui .

Step3: run the image:

        docker run -it -p 3000:3000 ss-react-ui

Step4: Validate the same in localhost:3000
