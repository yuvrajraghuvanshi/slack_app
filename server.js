const { WebClient } = require('@slack/web-api');
require('dotenv').config()
const slackToken =process.env.SLACK_TOKEN
const web = new WebClient(slackToken);

async function sendSlackMessage(channelId, message) {
  try {
    try {
      await web.conversations.join({ channel: channelId });
      console.log('Joined the channel successfully');
    } catch (joinError) {
      console.log('Already in channel or cannot join:', joinError.message);
    }

    const result = await web.chat.postMessage({
      channel: channelId,
      text: message,
    });
    console.log('Message sent successfully:', result.ok);
    return result;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

const channelId = 'C07DV527WB0';
const message = 'Hello Team!';

sendSlackMessage(channelId, message)
  .then(() => console.log('Message sent successfully'))
  .catch(error => console.error('Failed to send message:', error));
