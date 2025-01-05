declare module "@types" {
  interface ResponseWithData<T = unknown> {
    data: T;
  }
}
