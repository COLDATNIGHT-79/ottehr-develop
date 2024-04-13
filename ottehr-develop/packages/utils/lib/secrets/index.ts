export interface Secrets {
  [secretName: string]: string;
}

export const getSecret = (secretKey: string, secrets: Secrets | null): string => {
  let value: string | undefined;
  if (secrets != null) {
    value = secrets[secretKey];
  } else {
    value = process.env[secretKey];
  }

  if (value == null) {
    throw new Error(`Secret or Environment Variable with key ${secretKey} was not set.`);
  }

  return value;
};

export enum SecretsKeys {
  AUTH0_ENDPOINT = 'AUTH0_ENDPOINT',
  URGENT_CARE_AUTH0_CLIENT = 'URGENT_CARE_AUTH0_CLIENT',
  URGENT_CARE_AUTH0_SECRET = 'URGENT_CARE_AUTH0_SECRET',
  URGENT_CARE_MESSAGING_DEVICE_ID = 'URGENT_CARE_MESSAGING_DEVICE_ID',
  URGENT_CARE_MESSAGING_M2M_CLIENT = 'URGENT_CARE_MESSAGING_M2M_CLIENT',
  URGENT_CARE_MESSAGING_M2M_SECRET = 'URGENT_CARE_MESSAGING_M2M_SECRET',
  AUTH0_AUDIENCE = 'AUTH0_AUDIENCE',
  FHIR_API = 'FHIR_API',
  PROJECT_API = 'PROJECT_API',
  PROJECT_ID = 'PROJECT_ID',
  ENVIRONMENT = 'ENVIRONMENT',
  SENDGRID_API_KEY = 'SENDGRID_API_KEY',
  URGENT_CARE_SENDGRID_EMAIL_BCC = 'URGENT_CARE_SENDGRID_EMAIL_BCC',
  URGENT_CARE_SENDGRID_CONFIRMATION_EMAIL_TEMPLATE_ID = 'URGENT_CARE_SENDGRID_CONFIRMATION_EMAIL_TEMPLATE_ID',
  URGENT_CARE_SENDGRID_CANCELLATION_EMAIL_TEMPLATE_ID = 'URGENT_CARE_SENDGRID_CANCELLATION_EMAIL_TEMPLATE_ID',
  URGENT_CARE_SENDGRID_ERROR_EMAIL_TEMPLATE_ID = 'URGENT_CARE_SENDGRID_ERROR_EMAIL_TEMPLATE_ID',
  URGENT_CARE_URG_VISIT_TYPE = 'URGENT_CARE_URG_VISIT_TYPE',
  URGENT_CARE_ONLINE_VISIT_TYPE = 'URGENT_CARE_ONLINE_VISIT_TYPE',
  URGENT_CARE_TESTING_VISIT_TYPE = 'URGENT_CARE_TESTING_VISIT_TYPE',
  ORGANIZATION_ID = 'ORGANIZATION_ID',
  WEBSITE_URL = 'WEBSITE_URL',

  //telemed

  TELEMED_CLIENT_ID = 'TELEMED_CLIENT_ID',
  TELEMED_CLIENT_SECRET = 'TELEMED_CLIENT_SECRET',

  TELEMED_MESSAGING_DEVICE_ID = 'TELEMED_MESSAGING_DEVICE_ID',
  TELEMED_SENDGRID_EMAIL_BCC = 'TELEMED_SENDGRID_EMAIL_BCC',
  TELEMED_SENDGRID_CONFIRMATION_EMAIL_TEMPLATE_ID = 'TELEMED_SENDGRID_CONFIRMATION_EMAIL_TEMPLATE_ID',
  TELEMED_SENDGRID_CANCELLATION_EMAIL_TEMPLATE_ID = 'TELEMED_SENDGRID_CANCELLATION_EMAIL_TEMPLATE_ID',
  TELEMED_SENDGRID_ERROR_EMAIL_TEMPLATE_ID = 'TELEMED_SENDGRID_ERROR_EMAIL_TEMPLATE_ID',

  // bh

  AUTH0_CLIENT = 'AUTH0_CLIENT',
  AUTH0_SECRET = 'AUTH0_SECRET',
  FHIR_SCHEDULE_INSURANCE_ID = 'FHIR_SCHEDULE_INSURANCE_ID',
  FHIR_SCHEDULE_SELF_PAY_ID = 'FHIR_SCHEDULE_SELF_PAY_ID',
  CHANGE_CLIENT = 'CHANGE_CLIENT',
  CHANGE_SECRET = 'CHANGE_SECRET',
  CHANGE_API_BASE_URL = 'CHANGE_API_BASE_URL',
  SENDGRID_EMAIL_TEMPLATE_ID = 'SENDGRID_EMAIL_TEMPLATE_ID',
  SENDGRID_SPANISH_EMAIL_TEMPLATE_ID = 'SENDGRID_SPANISH_EMAIL_TEMPLATE_ID',
  SENDGRID_ERROR_EMAIL_TEMPLATE_ID = 'SENDGRID_ERROR_EMAIL_TEMPLATE_ID',
  SENDGRID_EMAIL_BCC = 'SENDGRID_EMAIL_BCC',
}
