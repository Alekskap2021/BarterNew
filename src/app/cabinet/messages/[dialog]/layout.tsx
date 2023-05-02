import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { ChatFooter } from "@/components/CompMessages/ChatFooter";
import { ChatHeader } from "@/components/CompMessages/ChatHeader";

const cn = classNames.bind(cls);

export default function DialogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cls.chat}>
      <ChatHeader />
      {children}
      <ChatFooter />
    </div>
  );
}
