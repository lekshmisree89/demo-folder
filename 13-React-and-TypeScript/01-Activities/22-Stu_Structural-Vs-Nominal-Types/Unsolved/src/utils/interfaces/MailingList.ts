export type MailingName = string & { __nameBrand: void };//this is a nominal type
//menaing that the type is a string but it is not the same as a string
//it is a string that has been branded with the __nameBrand property

export type MailingEmail = string & { __emailBrand: void };

interface MailingFormData {
  name: MailingName | '';
  email: MailingEmail | '';
}

export default MailingFormData;
