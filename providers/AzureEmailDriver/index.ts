import { EmailClient, EmailMessage } from '@azure/communication-email';
import { MailDriverContract, MessageNode } from '@ioc:Adonis/Addons/Mail';

export type AzureEmailConfig = {
  driver: 'azure';
  auth: {
    endpoint: string;
    accessKey: string;
    senderAddress: string;
  }
};

export class AzureEmailDriver implements MailDriverContract {
  private client: EmailClient;

  constructor(private config: AzureEmailConfig) {
    const connectionString = this.getConnectionString();

    this.client = new EmailClient(connectionString);
  }

  public async send(message: MessageNode) {
    try {
      const emailMessage = this.getEmailMessage(message);
      const poller = await this.client.beginSend(emailMessage);
      const result = await poller.pollUntilDone();

      return result;
    } catch (error) {
      throw error;
    }
  }

  public close() {}

  private getEmailMessage(message: MessageNode): EmailMessage {
    if (!message.to || message.to.length === 0) {
      throw new Error('No recipients defined');
    }

    const emailMessage = {
      senderAddress: this.config.auth.senderAddress,
      content: {
        subject: message.subject ?? '',
        plainText: message.text ?? '',
        html: message.html,
      },
      recipients: {
        to: message.to.map((recipient) => ({ address: recipient.address })),
      },
    };

    return emailMessage;
  }

  private getConnectionString(): string {
    return `endpoint=${this.config.auth.endpoint};accesskey=${this.config.auth.accessKey}`;
  }
}