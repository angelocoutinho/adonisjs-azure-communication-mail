import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {}

  public async boot() {
    const { AzureEmailDriver } = await import('../providers/AzureEmailDriver')
    const Mail = this.app.container.use('Adonis/Addons/Mail')

    Mail.extend('azure', (_mail, _mapping, config) => {
      console.log('AppProvider', { config });

      return new AzureEmailDriver(config)
    })
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
