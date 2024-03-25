import Quill from "quill";
import QuillCursors from "quill-cursors";
import "quill/dist/quill.snow.css";

export class myQuill {
  constructor(selector) {
    // 使用 cursors 插件 添加用户光标
    Quill.register("modules/cursors", QuillCursors);

    // 初始化 quill 文档操作对象
    this.quill = new Quill(selector, {
      modules: {
        cursors: true,
      },
      theme: "snow", // 主题
      placeholder: "请输入内容",
    });
  }
}
