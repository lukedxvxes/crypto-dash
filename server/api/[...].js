export default defineEventHandler(async (event) => {
  console.log(event.node.req.url);
  const res = await $fetch(`https://api.coinlore.net${event.node.req.url}`);
  console.log(res);
  return res;
});
