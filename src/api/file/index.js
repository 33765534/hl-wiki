// import { fetch } from "@/core/index.js";

export const getAllFiles_API = (data) => {
  return { code: 200, msg: "成功", data: {} };
};

export const getFilesByFileId_API = (data) => {
  return { code: 200, msg: "成功", data: {} };
};

// 创建文件
export const createFile_API = (data) => {
  return { code: 200, msg: "成功", data: {} };
};

// 编辑页面上传图片文件
export const editUploadFile_API = (data) => {
  return { code: 200, msg: "成功", data: {} };
};

export const getShearFile_API = (userid) => {
  return { code: 200, msg: "成功", data: {} };
};

// 加入文件编辑
export const joinFile_API = (userid, fileid) => {
  return fetch({
    url: "/file/joinFile",
    method: "post",
    data: { userid, fileid },
  });
};

// 收藏 置顶文件
export const favorOrTopFile_API = (data) => {
  return updateFile_API;
};

// 更新文件信息（文件名、文件所属文件夹）
export const updateFile_API = (data) => {
  return updateFile_API;
};

// 保存文件
export const saveFile_API = (data) => {
  return { code: 200, msg: "成功", data: {} };
};

// 获取文件内容
export const getFileContent_API = (data) => {
  return updateFile_API;
};

// 放入回收站
export const putFileToRecycle_API = (data) => {
  return fetch({
    url: "/file/putFileToRecycle",
    method: "post",
    data,
  });
};
// 删除文件

// 文件的导入
export const exportFile_API = (data) => {
  return fetch({
    url: "/excel/uploadFile",
    method: "post",
    "Content-Type": "multipart/form-data",
    data,
  });
};
