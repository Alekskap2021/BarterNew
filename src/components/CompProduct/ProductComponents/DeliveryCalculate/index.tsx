"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { DeliveryCalculateItem } from "../DeliveryCalculateItem";
import { Radio } from "@/ui/Radio";
import { Button, ThemeButton } from "@/ui/Button";
import { Textarea } from "@/ui/Textarea";
import { Form, Formik } from "formik";
import { ProductPageI } from "@/types/responses/ProductPageRespone";
import { UserProductsService } from "@/services/UserProductsService";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const cn = classNames.bind(cls);

interface DeliveryCalculateProps {
  className?: string;
  myAds?: ProductPageI[];
  id?: number;
  price?: number;
  style: object;
}

export const DeliveryCalculate: FC<DeliveryCalculateProps> = (props) => {
  const { className, myAds, id, price, style } = props;
  const { postExchange } = UserProductsService();
  const isAuth = useAuth();
  const { push } = useRouter();

  return (
    <section className={cn(cls.delivery, className)} style={style}>
      <Formik
        initialValues={{
          your_product: id.toString(),
          my_product: "",
          comment: "",
          delivery_type: "",
        }}
        onSubmit={async (values) => {
          if (!isAuth) push("/auth");
          else {
            console.log(values);
            const res = await postExchange(values);
            push("/cabinet/offers/waiting");
          }
        }}
      >
        {({ values, handleSubmit }) => (
          <Form>
            <h3 className={cn(cls.delivery_subtitle, cls.content_subtitle)} title="descr">
              Расчет доставки
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.6"
                  d="M9.066 11.92L9.052 9.26L9.43 9.246C9.75667 9.246 10.0413 9.176 10.284 9.036C10.536 8.896 10.732 8.70467 10.872 8.462C11.012 8.21933 11.082 7.94867 11.082 7.65C11.082 7.342 11.012 7.07133 10.872 6.838C10.7413 6.60467 10.55 6.42267 10.298 6.292C10.0553 6.16133 9.766 6.096 9.43 6.096C8.982 6.096 8.59467 6.208 8.268 6.432C7.94133 6.656 7.68 6.97333 7.484 7.384L6.56 6.614C6.83067 6.06333 7.218 5.634 7.722 5.326C8.23533 5.018 8.82333 4.864 9.486 4.864C10.0553 4.864 10.5593 4.98067 10.998 5.214C11.4367 5.438 11.7773 5.75533 12.02 6.166C12.2627 6.56733 12.384 7.034 12.384 7.566C12.384 8.05133 12.272 8.49467 12.048 8.896C11.8333 9.288 11.5253 9.61467 11.124 9.876C10.732 10.128 10.2653 10.2913 9.724 10.366L10.27 9.806L10.158 11.92H9.066ZM9.598 15.14C9.33667 15.14 9.11733 15.0513 8.94 14.874C8.772 14.6967 8.688 14.4773 8.688 14.216C8.688 13.9547 8.772 13.74 8.94 13.572C9.11733 13.3947 9.33667 13.306 9.598 13.306C9.85933 13.306 10.074 13.3947 10.242 13.572C10.4193 13.74 10.508 13.9547 10.508 14.216C10.508 14.4773 10.4193 14.6967 10.242 14.874C10.074 15.0513 9.85933 15.14 9.598 15.14Z"
                  fill="#373538"
                />
                <circle opacity="0.6" cx="10" cy="10" r="9.5" stroke="#373538" />
              </svg>
            </h3>
            <Accordion className={cls.productAccordion} alwaysOpen={true}>
              <AccordionItem>
                {({ open }: { open: boolean }) => (
                  <>
                    <AccordionHeader
                      className={cn(cls.productAccordion_btn, { productAccordion_btn_open: open })}
                      as="span"
                    >
                      <h3 className={cls.delivery_title}>Выберите товар для обмена</h3>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </AccordionHeader>

                    <AccordionBody
                      className={cn(cls.productAccordion_list, {
                        productAccordion_list_open: open,
                      })}
                    >
                      {myAds &&
                        myAds.map((ad) => (
                          <DeliveryCalculateItem
                            {...ad}
                            className={cn(cls.productAccordion_item, {
                              productAccordion_item_open: open,
                            })}
                            key={ad.id}
                          />
                        ))}
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ open }: { open: boolean }) => (
                  <>
                    <AccordionHeader
                      className={cn(cls.productAccordion_btn, { productAccordion_btn_open: open })}
                      as="span"
                    >
                      <h3 className={cls.delivery_title}>Кто платит за доставку </h3>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </AccordionHeader>

                    <AccordionBody
                      className={cn(cls.productAccordion_list, {
                        productAccordion_list_open: open,
                      })}
                    >
                      <Radio
                        value="0"
                        name="delivery_type"
                        className={cn(cls.productAccordion_item, {
                          productAccordion_item_open: open,
                        })}
                        checked={true}
                        onChange={() => {}}
                        textField="Оплачиваю сам"
                      />
                      <Radio
                        value="1"
                        name="delivery_type"
                        className={cn(cls.productAccordion_item, {
                          productAccordion_item_open: open,
                        })}
                        disabled={true}
                        textField="50 / 50"
                      />
                      <Radio
                        value="2"
                        name="delivery_type"
                        className={cn(cls.productAccordion_item, {
                          productAccordion_item_open: open,
                        })}
                        disabled={true}
                        textField="Оплачивает собственник"
                      />
                      <Radio
                        value="3"
                        name="delivery_type"
                        className={cn(cls.productAccordion_item, {
                          productAccordion_item_open: open,
                        })}
                        disabled={true}
                        textField="Каждый за себя"
                      />
                      <Radio
                        value="4"
                        name="delivery_type"
                        className={cn(cls.productAccordion_item, {
                          productAccordion_item_open: open,
                        })}
                        disabled={true}
                        textField="Оплата по договоренности"
                      />
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Textarea
              className={cls.delivery_comment}
              label="Комментарий:"
              placeholder="Введите комментарий"
              name="comment"
            />
            <div className={cls.delivery_price}>
              <h3 className={cls.delivery_title}>Стоимость доставки</h3>
              <span className={cls.delivery_cost}>{price} ₸</span>
              <div className={cls.delivery_btns}>
                <Button type="submit" disabled={!values.my_product}>
                  Предложить обмен
                </Button>
                <Button theme={ThemeButton.FILL_WHITE} type="button">
                  Купить этот товар
                </Button>
              </div>
            </div>
            <div className={cls.delivery_contacts}>
              <Button>
                Написать в Telegram
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4154_162527)">
                    <path
                      d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
                      fill="url(#paint0_linear_4154_162527)"
                    />
                    <path
                      d="M4.65521 13.1115C6.11646 12.3066 7.7476 11.6348 9.27166 10.9596C11.8936 9.85364 14.526 8.76687 17.185 7.7551C17.7023 7.5827 18.6319 7.41416 18.723 8.18083C18.673 9.26604 18.4678 10.3449 18.327 11.4237C17.9696 13.7962 17.5564 16.1606 17.1535 18.5253C17.0147 19.3129 16.028 19.7207 15.3967 19.2167C13.8794 18.1917 12.3504 17.1769 10.8525 16.1281C10.3619 15.6296 10.8169 14.9135 11.255 14.5575C12.5047 13.3259 13.83 12.2796 15.0144 10.9844C15.3339 10.2129 14.3899 10.8631 14.0785 11.0624C12.3677 12.2414 10.6987 13.4923 8.895 14.5284C7.97364 15.0356 6.89979 14.6022 5.97885 14.3191C5.15312 13.9773 3.94312 13.6328 4.6551 13.1116L4.65521 13.1115Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_4154_162527"
                      x1="16.6677"
                      y1="4.1675"
                      x2="10.4177"
                      y2="18.75"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37AEE2" />
                      <stop offset="1" stopColor="#1E96C8" />
                    </linearGradient>
                    <clipPath id="clip0_4154_162527">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
              <Button>
                Написать в WhatsApp
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4154_162533)">
                    <path
                      d="M24.999 18.6805C24.999 18.8174 24.9949 19.1142 24.9866 19.3436C24.9665 19.9046 24.922 20.6287 24.8548 20.9586C24.7537 21.4543 24.6011 21.9222 24.4021 22.3117C24.1667 22.7724 23.8664 23.1851 23.5095 23.5413C23.1535 23.8968 22.7412 24.1959 22.2812 24.4304C21.8897 24.6299 21.4188 24.7826 20.9202 24.8832C20.5936 24.9492 19.875 24.9928 19.3175 25.0126C19.0879 25.0208 18.791 25.025 18.6546 25.025L6.34443 25.023C6.20754 25.023 5.91072 25.0188 5.6814 25.0105C5.12029 24.9904 4.39626 24.9459 4.06636 24.8787C3.57061 24.7776 3.10266 24.625 2.71321 24.426C2.25247 24.1906 1.83979 23.8903 1.48362 23.5334C1.12815 23.1774 0.829028 22.7651 0.59458 22.3051C0.39502 21.9136 0.242334 21.4427 0.141675 20.9441C0.0757568 20.6175 0.0321289 19.8989 0.0122803 19.3414C0.00412598 19.1119 0 18.8149 0 18.6786L0.00195312 6.36834C0.00195312 6.23145 0.00612793 5.9346 0.0143555 5.70528C0.0344971 5.14417 0.0789551 4.42014 0.146216 4.09026C0.247314 3.59451 0.399902 3.12657 0.598901 2.73709C0.834326 2.27637 1.13464 1.86367 1.49146 1.5075C1.84751 1.15205 2.25981 0.852908 2.71985 0.618436C3.11138 0.418924 3.58225 0.266238 4.08081 0.165579C4.4074 0.0996368 5.12603 0.0560089 5.68355 0.0361847C5.91309 0.028006 6.21003 0.02388 6.34636 0.02388L18.6566 0.0258575C18.7935 0.0258575 19.0903 0.0300323 19.3197 0.0382599C19.8808 0.0584015 20.6048 0.102859 20.9347 0.17012C21.4304 0.271219 21.8984 0.423807 22.2878 0.622806C22.7486 0.858231 23.1612 1.15855 23.5174 1.51536C23.8729 1.87141 24.172 2.28369 24.4064 2.74375C24.606 3.13528 24.7587 3.60613 24.8594 4.10469C24.9253 4.4313 24.9689 5.1499 24.9887 5.70745C24.9969 5.93699 25.001 6.23391 25.001 6.37029L24.999 18.6805Z"
                      fill="url(#paint0_linear_4154_162533)"
                    />
                    <path
                      d="M19.1234 5.93863C17.4308 4.24461 15.1799 3.31121 12.7816 3.31026C7.84011 3.31026 3.81836 7.33047 3.81638 12.272C3.81575 13.8515 4.22856 15.3934 5.01309 16.7525L3.74121 21.3968L8.49377 20.1505C9.80325 20.8645 11.2775 21.2407 12.778 21.2414H12.7817C17.7227 21.2414 21.7448 17.2207 21.7468 12.2791C21.7477 9.8844 20.8161 7.63264 19.1234 5.93863ZM12.7817 19.7277H12.7786C11.4416 19.7272 10.1301 19.3681 8.98606 18.6894L8.71394 18.528L5.8937 19.2676L6.64648 16.5187L6.46926 16.2369C5.72336 15.0509 5.32942 13.68 5.33 12.2726C5.33162 8.16541 8.67437 4.82393 12.7846 4.82393C14.7748 4.82469 16.6458 5.60056 18.0526 7.00855C19.4595 8.41653 20.2338 10.2881 20.2331 12.2785C20.2315 16.386 16.8887 19.7277 12.7817 19.7277ZM16.869 14.1487C16.6449 14.0366 15.5436 13.4949 15.3383 13.4201C15.133 13.3454 14.9836 13.308 14.8343 13.5323C14.685 13.7564 14.2557 14.2608 14.125 14.4103C13.9943 14.5597 13.8636 14.5784 13.6396 14.4663C13.4156 14.3543 12.6938 14.1178 11.8382 13.3549C11.1723 12.7611 10.7227 12.0277 10.592 11.8035C10.4614 11.5793 10.5782 11.4582 10.6903 11.3465C10.791 11.2462 10.9143 11.0849 11.0263 10.9542C11.1383 10.8234 11.1756 10.73 11.2503 10.5805C11.325 10.4311 11.2876 10.3003 11.2316 10.1882C11.1756 10.0761 10.7276 8.97388 10.5409 8.52552C10.3591 8.08885 10.1744 8.14793 10.0369 8.14107C9.9064 8.13457 9.75691 8.13321 9.60759 8.13321C9.45828 8.13321 9.21558 8.18924 9.01025 8.41343C8.80493 8.63763 8.22625 9.1794 8.22625 10.2816C8.22625 11.3838 9.02891 12.4487 9.14092 12.5981C9.25293 12.7476 10.7205 15.0095 12.9676 15.9795C13.5021 16.2103 13.9193 16.348 14.2447 16.4513C14.7813 16.6217 15.2696 16.5976 15.6556 16.54C16.086 16.4757 16.9809 15.9983 17.1676 15.4752C17.3543 14.9521 17.3543 14.5037 17.2983 14.4103C17.2423 14.3169 17.093 14.2608 16.869 14.1487Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_4154_162533"
                      x1="12.5005"
                      y1="0.02388"
                      x2="12.5005"
                      y2="25.025"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#61FD7D" />
                      <stop offset="1" stopColor="#2BB826" />
                    </linearGradient>
                    <clipPath id="clip0_4154_162533">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
