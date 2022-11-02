/* eslint-disable comma-dangle */
import * as notificationapi from 'notificationapi-node-server-sdk';
import { Channels } from 'notificationapi-node-server-sdk/lib/interfaces';

const HelloNotification = async () => {
  notificationapi.default.init(
    process.env.clientId as string,
    process.env.clientSecret as string
  );

  await notificationapi.default.send({
    notificationId: 'test',
    user: {
      id: 'NotificationAPIPublicExampleTS',
      email: 'test@test.com',
      number: '+15005550006'
    },
    mergeTags: { firstName: 'test' },
    replace: { Hey: 'Hello' },
    forceChannels: [Channels.EMAIL],
    // secondaryId: 'NotificationAPIPublicExampleTS_secondaryId', deprecated
    templateId: 'a7426c81-2722-4b46-839e-80c909df938f',
    subNotificationId: 'NotificationAPIPublicExampleTS_subNotificationId',
    options: {
      email: {
        replyToAddresses: [
          'test+replyToNotificationAPIPublicExampleTS@test.com'
        ],
        ccAddresses: ['test+ccNotificationAPIPublicExampleTS@test.com'],
        bccAddresses: ['test+bccNotificationAPIPublicExampleTS@test.com'],
        attachments: [
          {
            filename: 'sample.pdf',
            url: 'https://docs.notificationapi.com/lorem-ipsum.pdf'
          }
        ]
      }
    }
  });
  return 'hello, world!';
};
export default HelloNotification;
