import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Linkto, ThemeLink } from "@/ui/Link";
import { CategoryI } from "@/types/responses/HomepageResponse";

const cn = classNames.bind(cls);

interface indexProps {
  className?: string;
  categories: CategoryI[];
}

export const HomepageCategories: FC<indexProps> = (props) => {
  const { className, categories } = props;

  return (
    <div className={cn(cls.categories)}>
      <h2 className="title">Разделы</h2>

      <div className={cls.categories_list}>
        {categories.map((cat) => (
          <Linkto href="/search" theme={ThemeLink.FILL_WHITE_ON_YELLOW} key={cat.id}>
            {cat.name}
          </Linkto>
        ))}
      </div>
    </div>
  );
};
