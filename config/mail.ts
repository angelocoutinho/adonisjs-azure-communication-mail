/**
 * Config source: https://git.io/JvgAf
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { mailConfig } from '@adonisjs/mail/build/config'

export default mailConfig({
  mailer: 'azure',
  mailers: {
    smtp: {
      driver: 'smtp',
      host: Env.get('SMTP_HOST'),
      port: Env.get('SMTP_PORT'),
			auth: {
				user: Env.get('SMTP_USERNAME'),
				pass: Env.get('SMTP_PASSWORD'),
				type: 'login',
			}
    },
    azure: {
      driver: 'azure',
      auth: {
        endpoint: Env.get('AZURE_ENDPOINT'),
        accessKey: Env.get('AZURE_ACCESS_KEY'),
        senderAddress: Env.get('AZURE_SENDER_ADDRESS')
      },
    },
  },
})
