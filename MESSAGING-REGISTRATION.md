# Twilio and Vonage production registration

## Public URLs

- Website: `https://guillermotaysllc.com`
- Opt-in and opt-out: `https://guillermotaysllc.com/sms-consent`
- Privacy Policy: `https://guillermotaysllc.com/privacy`
- Terms and Conditions: `https://guillermotaysllc.com/terms`
- Detailed SMS Terms: `https://guillermotaysllc.com/sms-terms`

## Campaign description

GUIELLERMO TAYS LLC, doing business as Guillermo Tays IT Solutions, sends recurring customer-care text messages to existing clients who affirmatively enroll. Messages are limited to IT support ticket updates, troubleshooting appointment coordination, requested service information, and direct responses to support requests. No marketing, promotional, purchased-list, or automated bulk messages are sent.

## Opt-in flow

Users visit `https://guillermotaysllc.com/sms-consent`, enter their name and mobile number, choose a customer-care message category, and select a separate checkbox that is unchecked by default. The disclosure identifies the brand and program, describes message content, states that message frequency varies and message/data rates may apply, explains HELP and STOP, links the Terms and Privacy Policy, and states that consent is not a condition of purchase. The system stores the disclosure text/version, source URL, timestamp, hashed IP, user agent, policy versions, telephone number, and consent status. Contact and service-request forms do not create recurring SMS consent.

Do not list text-to-join keywords unless `ENABLE_START_KEYWORD=true` and the approved registration explicitly includes that mechanism. For the default website-only flow, leave opt-in keywords blank.

## Production confirmation message

> Guillermo Tays IT Solutions: You are subscribed to recurring customer-care messages for IT support, service coordination, and appointment updates. Message frequency varies. Message & data rates may apply. Reply HELP for help or STOP to opt out. https://guillermotaysllc.com/sms-terms

## Sample messages

> Guillermo Tays IT Solutions: Hi [Client Name], IT support ticket #[Ticket Number] was updated. Our technician can call today at [Time]. Reply STOP to opt out.

> Guillermo Tays IT Solutions: Hi [Client Name], this confirms your troubleshooting appointment on [Date] at [Time]. Reply HELP for help or STOP to opt out.

## Keyword responses

**STOP:** Guillermo Tays IT Solutions: You have been unsubscribed and will receive no further messages from this program.

**HELP:** Guillermo Tays IT Solutions: For help, contact sms@guillermotaysllc.com or +1 (512) 761-6455. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out.

## Webhook URLs

- Twilio inbound: `https://guillermotaysllc.com/api/webhooks/twilio/inbound`
- Vonage Messages inbound: `https://guillermotaysllc.com/api/webhooks/vonage/inbound`

The application validates Twilio request signatures and Vonage HS256 signed-webhook JWTs. Keep `MESSAGING_PROVIDER` unset until a brand, campaign, and sending number are approved. Then choose exactly one provider and add only that provider's production credentials.
