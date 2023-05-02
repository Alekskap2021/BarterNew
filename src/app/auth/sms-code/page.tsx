"use client";

import classNames from "classnames/bind";
import cls from "../page.module.scss";
import { SmsCode as SmsModal } from "@/components/SmsCode";

const cn = classNames.bind(cls);

export default function SmsCode() {
  return <SmsModal />;
}
