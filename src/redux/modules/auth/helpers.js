export const formCredentials = (state, field, value) => ({
  ...state,
  redirect: true,
  loading: false,
  credentials: {
    ...state.credentials,
    [field]: value,
  },
});

export const fn = () => {};
