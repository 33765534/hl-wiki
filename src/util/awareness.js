export function createAwareness(provider) {
  let { awareness } = provider;

  // 定义随机颜色
  let color = "#" + Math.random().toString(16).split(".")[1].slice(0, 6);
  awareness.setLocalStateField("user", { name, color });
  return awareness;
}
