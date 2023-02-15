export default function errorHandler(error) {
  if (error) {
    if (error.response) {
      message = error.response.data.msg;

      return Promise.reject(error);
    }
  }
}
