"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Basket.module.css";
import { useLocalStorage } from "react-use";
import { BsTrash3 } from "react-icons/bs";
import { useUserContext } from "../../app/Context/store";
import { BsArrowLeft } from "react-icons/bs";
import { BsX } from "react-icons/bs";
// ----------
import { PiWechatLogoFill } from "react-icons/pi";
import { ImTruck } from "react-icons/im";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Cookies from "js-cookie";
// ----------

export default function Basket({ fals }) {
  const { id, setOnCard, setNumBas, numBas, setNumB22 } = useUserContext();
  const [aa1, setAa1] = useLocalStorage("resAa1111", []);

  const [t, setT] = useState(true);
  const [truF, setTruF] = useState(false);
  const [numB, setNumB] = useState([]);
  const [numBd, setNumBd] = useState(0);
  const [numB2, setNumB2] = useState(0);
  const [numB1, setNumB1] = useState([]);
  const [n, setN] = useState([]);
  const [nkk, setNkk] = useState([]);
  const [onIds, setOnIds] = useState(0);
  const [numBas1, setNumBas1] = useState(0);
  const [num1, setNum1] = useState(false);
  const [num2, setNum2] = useState(false);

  //   console.log("ccc", aa1, n, "n");
  //  var y = JSON.parse(Cookies.get("name"));
  //  const [a, setA] = useState(y);
  //   Cookies.set("ras", JSON.stringify([{ name: 1 }]), { expires: 1 });
  //   пол

  useEffect(() => {
    const y = Cookies.get("nam4");
    if (y !== undefined) {
      setNkk(JSON.parse(Cookies.get("nam4")));
      console.log(JSON.parse(Cookies.get("nam4")), "cn");
    }
    if (y === undefined) {
      setNkk([]);
    }
  }, []);
  useEffect(() => {
    setNkk((prevOnCard) => {
      const existingIndex = prevOnCard.findIndex((obj) => obj.name === id.name);
      if (existingIndex === -1) {
        return [...prevOnCard, id];
      } else {
        return prevOnCard;
      }
    });
  }, [id]);
  useEffect(() => {
    if (num1 && nkk.length !== 0) {
      Cookies.set("nam4", JSON.stringify(nkk), { expires: 1 });
    } else {
      setNum1(true);
    }
  }, [nkk, num1]);
  //   пол
  useEffect(() => {
    const y = Cookies.get("nam4");
    if (y !== undefined) {
      setNkk(JSON.parse(Cookies.get("nam4")));
    }
  }, [id]);
  //  мас 1
  useEffect(() => {
    setNumB2(nkk.length);
  }, [nkk]);
  useEffect(() => {
    setNumB1(Array(numB2 + 1).fill(1));
    addOnesx();
  }, [numB2]);
  const updateNumB22 = (index) => {
    setNumB1((prevNumB) => {
      const updatedNumB = [...prevNumB];
      updatedNumB[index] = updatedNumB[index] + 1;
      return updatedNumB;
    });
  };
  const updateNumBn22 = (index) => {
    if (numB1[index] > 0) {
      setNumB1((prevNumB) => {
        const updatedNumB = [...prevNumB];
        updatedNumB[index] = updatedNumB[index] - 1;
        return updatedNumB;
      });
    }
  };
  //  мас 1
  // ммас грн
  const addOnesx = () => {
    const numbers = nkk.map((obj) => obj.price);
    setNumB(numbers);
  };
  const updateNumB = (index, value) => {
    setNumB((prevNumB) => {
      const updatedNumB = [...prevNumB];
      updatedNumB[index] = updatedNumB[index] + value;
      return updatedNumB;
    });
  };
  const updateNumBn = (index, value) => {
    if (numB[index] >= value) {
      setNumB((prevNumB) => {
        const updatedNumB = [...prevNumB];
        updatedNumB[index] = updatedNumB[index] - value;
        return updatedNumB;
      });
    }
  };
  useEffect(() => {
    const sum = numB.reduce((total, num) => total + num, 0);
    setNumBd(sum);
  }, [numB]);
  //  ммас грн

  //  уд
  const handleRemoveItem = (m) => {
    setNkk((prevSenter) => {
      return prevSenter.filter((obj) => obj.id !== m);
    });

    Cookies.set("nam4", JSON.stringify(nkk), { expires: 1 });
  };
  //   уд фanl
  //   updateNumB(0, 11000);
  //   updateNumBn(2, 1);

  // Змінити перший елемент на 2
  //   __________________
  //   dddddddddd
  //   dddddddddd
  const handleSubmit = async (values) => {
    try {
      const response = await fetch("/api/post/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Замовленя прийнято. Дякую за покупку!");
      } else {
        console.error("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  // _______________________

  fals(t);

  return (
    <div className={styles.main}>
      <BsX size={20} className={styles.x} onClick={() => setT((t) => !t)} />
      <div className={styles.main1}>
        {nkk.length === 0 ? (
          <div className={styles.h1nov}>Ваш кошик пустий.</div>
        ) : (
          <div className={!truF ? styles.novB : styles.novBnov}>
            {/* ------------------------- */}
            {truF && (
              <Formik
                onSubmit={handleSubmit}
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  message: "",
                  street: "",
                  city: "",
                  someField: "",
                  userData: "",
                }}
                validate={(values) => {
                  values.userData = userData;
                  values.someField = externalValue;
                  const errors = {};
                  if (!values.first_name) {
                    errors.first_name = "Ім'я обов'язкове поле";
                  } else if (values.first_name.length > 20) {
                    errors.first_name =
                      "Ім'я не може бути довшим ніж 20 символів";
                  }
                  if (!values.last_name) {
                    errors.last_name = "Прізвище обов'язкове поле";
                  } else if (values.last_name.length > 20) {
                    errors.last_name =
                      "Прізвище не може бути довшим ніж 20 символів";
                  }
                  if (!values.email) {
                    errors.email = "Email обов'язкове поле";
                  } else if (
                    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                      values.email
                    )
                  ) {
                    errors.email = "Email некоректний";
                  }
                  if (!values.phone) {
                    errors.phone = "Телефон обов'язкове поле";
                  }
                  if (!values.street) {
                    errors.street = "Вулиця обов'язкове поле";
                  }
                  if (!values.city) {
                    errors.city = "Місто обов'язкове поле";
                  }
                  if (!values.message) {
                    values.message = "Коментарі відсутні";
                  }
                  return errors;
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={styles.box}>
                    <div className={styles.box_h4}>
                      <h4 className={styles.h4}>Оформлення замовлення</h4>
                    </div>
                    <div className={styles.box_сontacts}>
                      <div className={styles.box_h3}>
                        <div className={styles.h3_dox}>
                          <PiWechatLogoFill size="30px" />
                          <h3 className={styles.h3}>Контактні дані</h3>
                        </div>
                      </div>
                      <div className={styles.form_сontacts}>
                        <Field
                          type="text"
                          name="first_name"
                          placeholder="Ім'я"
                          className={styles.name1}
                          id="first_name"
                        />
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className={`${styles.error} ${styles.error1}`}
                        />
                        <Field
                          type="text"
                          name="last_name"
                          placeholder="Прізвище"
                          className={styles.name2}
                        />
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className={`${styles.error} ${styles.error2}`}
                        />
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className={styles.email}
                        />

                        <ErrorMessage
                          name="email"
                          component="div"
                          className={`${styles.error} ${styles.error3}`}
                        />
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Телефон"
                          className={styles.phone}
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className={`${styles.error} ${styles.error4}`}
                        />
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Коментарі до замовлення"
                          className={styles.textarea}
                        />
                      </div>
                    </div>
                    <div className={styles.box_сontacts}>
                      <div className={styles.box_h3}>
                        <div className={styles.h3_dox}>
                          <ImTruck size="30px" />
                          <h3 className={styles.h3}>Способи доставки</h3>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_сontacts} ${styles.form_delivery}`}
                      >
                        <div className={styles.form_delivery_text}>
                          Вартість доставки замовлень за тарифами перевізника
                          Нова пошта (оплачується окремо при отриманні).
                        </div>
                        <Field
                          type="text"
                          name="street"
                          placeholder="Адреса"
                          className={styles.name1}
                        />
                        <ErrorMessage
                          name="street"
                          component="div"
                          className={`${styles.error} ${styles.error5}`}
                        />
                        <Field
                          type="text"
                          name="city"
                          placeholder="Місто"
                          className={styles.name2}
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className={`${styles.error} ${styles.error6}`}
                        />
                        <div className={styles.price}>
                          до сплати:{" "}
                          <span className={styles.price_span}>{numBd}</span>
                          грн.
                        </div>
                        <div
                          className={`${styles.issue_order} ${styles.issue_or}`}
                        >
                          Оформити замовлення
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
            {/* ---------------------- */}

            <div className={styles.bas_ralac}>
              {nkk.length === 0 ? (
                <p></p>
              ) : (
                <div>
                  <div className={styles.h1}>Кошик</div>
                  <div className={styles.number_textN}>Назва</div>
                  <div className={styles.number_textP}>Ціна</div>
                  <div className={styles.number_text}>Кількість</div>
                  <div className={styles.price_box_h1}>Вартість</div>
                </div>
              )}
              {Array.isArray(nkk) &&
                nkk.map((item, index) => (
                  <div className={styles.swiper_slide} key={index}>
                    <div className={styles.image_box}>
                      <Image
                        className={styles.img}
                        src={item.img}
                        alt="Vercel Logo"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                        width={35}
                        height={35}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className={styles.text}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.priceB}>{item.price} грн.</div>
                    </div>
                    <div className={styles.number_box}>
                      <div className={styles.button_box}>
                        <div
                          className={styles.button1}
                          onClick={() => {
                            updateNumBn22(index);
                            updateNumBn(index, item.price);
                          }}
                        >
                          -
                        </div>
                        <div className={styles.button2}>{numB1[index]}</div>
                        <div
                          className={styles.button3}
                          onClick={() => {
                            updateNumB22(index);
                            updateNumB(index, item.price);
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className={styles.price_boxB}>
                      <div className={styles.price_spanB}>
                        {numB[index]} грн.
                      </div>
                    </div>
                    <BsTrash3
                      className={styles.dustbin}
                      size={20}
                      onClick={() => {
                        handleRemoveItem(item.id);
                        setNumBas1(1);
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className={styles.issue_box}>
          <div className={styles.issue_come}>
            <BsArrowLeft className={styles.issue_} size={20} />
            <div
              className={styles.issue_}
              onClick={() => {
                setT((t) => !t);
                setTruF(true);
              }}
            >
              Повернутись до покупок
            </div>
          </div>
          <div className={styles.issue_total}>
            <div className={styles.issue_price}>
              Всього:
              <span className={styles.issue_price_span}> {numBd} грн</span>
            </div>
            <div
              className={styles.issue_order}
              onClick={() => {
                setTruF(true);
              }}
            >
              Перейти до оформлення
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
