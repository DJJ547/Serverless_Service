# Serverless_Service
This is a simple serverless application.
## Steps to run this application
1. install serverless globally
```
npm install -g serverless
```
2. Create your AWS IAM user add to it the "Administrator Access" policy, in serverless.yml, under provider, change the   profile name to profile:<your aws user name>
3. From the user you just created, create an access key for it.
4. Configure your AWS credentials using terminal
```
serverless config credentials --provider aws --key <your aws key> --secret <your aws secret> --profile <your aws IAM user name>
```
5. In terminal run:
```
serverless deploy
```
6. copy paste the link in 'endpoint: GET - https://jk86t89x3k.execute-api.us-west-1.amazonaws.com/dev/get-user/{ID}'
change id to our student id, then we will see our first and last name displayed.
