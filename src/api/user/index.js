// 用户相关API

const users = [
  {
    token: 123,
    userid: "1",
    username: "1",
    userimg: "/static/img/user.png",
  },
  {
    token: 1234,
    userid: "2",
    username: "2",
    userimg: "/static/img/user.png",
  },
];
export const login_API = (data) => {
  const user = users.find((item) => item.userid === data.userid);
  return {
    code: 200,
    msg: "登陆成功！",
    data: user,
  };
};

export const register_API = (data) => {
  users.push({ ...data });
  return { code: 200, msg: "注册成功！" };
};
