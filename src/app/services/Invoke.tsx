import ApiClient from './AxiosConfig';

const Invoke = {
  postSignUp: async (email: string, password: string) => {
    return ApiClient.post(`/auth/v1/signup`, {
      email,
      password,
    });
  },

  postSignIn: async (email: string, password: string) => {
    return ApiClient.post(`/auth/v1/token?grant_type=password`, {
      email,
      password,
    });
  },
};

export default Invoke;
