import { AzureEmailConfig } from '../providers/AzureEmailDriver'

declare module '@ioc:Adonis/Addons/Mail' {
  interface MailDrivers {
    azure: {
      config: AzureEmailConfig,
      implementation: MailDriverContract
    }
  }
}