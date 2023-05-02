import Image from "next/image";
import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { CreateAddForm } from "@/components/CreateAddForm";

const cn = classNames.bind(cls);

export default function CreateAdvert() {
  return (
    <>
      <CreateAddForm />
    </>
  );
}
