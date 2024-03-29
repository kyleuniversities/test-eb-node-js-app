/**
 * Constant for debugging
 */
export const IS_DEBUGGING = false;

/**
 * Alerts if debugging
 */
export const debugAlert = (message) => {
  if (IS_DEBUGGING) {
    alert(message);
  }
};
