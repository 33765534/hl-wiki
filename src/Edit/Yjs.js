/** Yjs 主函数 */
import * as Y from "yjs";
/** Yjs Quill 光标信息 */
import { QuillBinding } from "y-quill";
/** web RTC 连接 */
import { WebrtcProvider } from "y-webrtc";
/** 导入创建光标函数 */
import { createAwareness } from "@/util/awareness";

export class myYjs {
  // 需要传入绑定对象
  constructor(quill) {
    this.ydoc = new Y.Doc();
    // Define a shared text type on the document（这个是拿到需要协同的 Delta 数据）
    const ytext = this.ydoc.getText("quill");

    // 使用 webrtc 实现链接
    const provider = new WebrtcProvider("quill-demo", this.ydoc);

    // 绑定 quill 与 YJS
    const binding = new QuillBinding(ytext, quill.quill, createAwareness(provider));
  }
}

