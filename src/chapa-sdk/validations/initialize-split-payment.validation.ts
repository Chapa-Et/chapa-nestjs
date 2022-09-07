import * as yup from 'yup';
import { InitializeOptions } from '../interfaces/initialize.interface';

export const validateInitializeSplitPaymentOptions = async (
  initializeOptions: InitializeOptions,
) => {
  const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email(),
    currency: yup.string().required(),
    amount: yup.string().required(),
    tx_ref: yup.string().required(),
    callback_url: yup.string().url().optional(),
    customization: yup
      .object()
      .shape({
        title: yup.string().optional(),
        description: yup.string().optional(),
        logo: yup.string().optional(),
      })
      .optional(),
    subaccounts: yup
      .object()
      .shape({
        id: yup.string().required(),
      })
      .required(),
  });

  return await schema.validate(initializeOptions);
};