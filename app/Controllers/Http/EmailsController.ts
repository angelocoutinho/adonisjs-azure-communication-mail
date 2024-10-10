import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class EmailsController {
  public async send({ request, response }: HttpContextContract): Promise<void> {
    const { firstName, lastName, mailTo, subject, redirectUrl } = request.only(['firstName', 'lastName', 'mailTo', 'subject', 'redirectUrl']);
    const state = {
      user: {
        fullName: `${firstName} ${lastName}`
      },
      url: redirectUrl,
    };

    const result = await Mail.send((message) => {
      message
        .to(mailTo)
        .subject(subject)
        .htmlView('emails/welcome', state);
    })

    return response.send({ result });
  }
}
