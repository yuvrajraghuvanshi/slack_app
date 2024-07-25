## Prerequisite

1. Create a app from slack 
     - for creating a app: https://api.slack.com/apps
     - Select "Create New App" > "From scratch"
     - Give your app a name and select your workspace

2. after that add oAuth options from "OAuth & Permissions "
     - channels:join (For Joining a user in the channel)
     - chat:write (For Sending a message)

3. install the app in the workspace
4. then it'll show you a bot token in "OAuth & Permissions"
5. then copy that token and paste it in the .env file

- Note on Environment Variables:
The script requires a SLACK_TOKEN to be set in a .env file. For security reasons, I haven't included my personal .env file. Instead, users should create their own .env file in the project root with the following structure:

SLACK_TOKEN=xoxb-your-slack-bot-token-here

Please replace 'xoxb-your-slack-bot-token-here' with your actual Slack Bot User OAuth Token.


## Scripts 

1. Imports required modules: WebClient from @slack/web-api and dotenv for environment variable management.
2. retrieves the Slack token from environment variables.
3. Attempts to join the specified channel (ifnot already a member).
4. sends a message to the channel.
5. handles errors and provides feedback on the operation's success or failure.


## Run the script

1. Run the command: npm install
2. Modify `channelId` and `message` variables in the script to change the target channel and message content.
3. run the command: node server.js



## references

https://api.slack.com/quickstart
https://api.slack.com/concepts/token-types#bot
https://api.slack.com/apps