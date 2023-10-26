export default (client, user, channel = {}) => {
  client.dispatchEvent({
    channel,
    cid: channel.cid,
    type: 'user.presence.changed',
    user,
  });
};
