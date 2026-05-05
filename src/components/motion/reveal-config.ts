/** Single trigger, slightly early — matches scroll UX without constant re-fires */
export const revealViewport = {
  once: true,
  amount: 0.35,
  margin: "0px 0px -10% 0px",
} as const;

export const revealEase = [0.22, 1, 0.36, 1] as const;
