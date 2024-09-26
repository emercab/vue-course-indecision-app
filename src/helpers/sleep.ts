export const sleep = (seconds: number) => {
  return new Promise(resolve => {
    return setTimeout(resolve, seconds * 1000);
  });
}