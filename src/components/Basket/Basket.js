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
// ----------

export default function Basket({ fals }) {
  const { setCard, setOnCard, setNumBas, onCard, setNumB22 } = useUserContext();
  const [aa1, setAa1] = useLocalStorage("resAa1111", []);
  const [twoCard, setTwoCard] = useState(onCard);
  const [t, setT] = useState(true);
  const [truF, setTruF] = useState(false);
  const [numB, setNumB] = useState([]);
  const [numBd, setNumBd] = useState(0);
  const [numB2, setNumB2] = useState(0);
  const [numB1, setNumB1] = useState([]);
  const [n, setN] = useState([]);
  const [onIds, setOnIds] = useState("");
  const [numBas1, setNumBas1] = useState(0);
  const [eId, setEId] = useState("");
  const [onTrue, setOnTrue] = useState(false);

  useEffect(() => {
    setTwoCard(onCard);
  }, [onCard]);
  // jjj
  //   useEffect(() => {
  //     if (eId !== "") {
  //       twoId.map((item, index) =>
  //         Number(item) === Number(eId)
  //           ? setTwoCard([
  //               ...twoCard.slice(0, index),
  //               ...twoCard.slice(index + 1),
  //             ])
  //           : true
  //       );
  //       twoId.map((item, index) =>
  //         Number(item) === Number(eId)
  //           ? setTwoId([...twoId.slice(0, index), ...twoId.slice(index + 1)])
  //           : true
  //       );
  //       setOnTrue((a) => !a);
  //     }
  //   }, [eId]);
  useEffect(() => {
    if (eId !== "") {
      const addToArray = (newItem) => {
        setTwoCard((prevSenter) => {
          return prevSenter.filter((obj) => obj.id !== newItem);
        });

        setOnTrue((a) => !a);
      };
      addToArray(eId);
    }
  }, [eId]);

  useEffect(() => {
    if (eId !== "") {
      setCard(twoCard);
    }
  }, [onTrue]);

  //  jjj
  useEffect(() => {
    if (numBas1 !== 1 || n.length == 0) {
      setN(aa1);
    }
    if (numBas1 === 1) {
      setAa1(n);
      setNumB22(n);
    }
  }, [n, aa1]);

  const addOnesx = () => {
    const numbers = aa1.map((obj) => obj.price);
    setNumB(numbers);
    //  }
  };

  useEffect(() => {
    const sum = numB.reduce((total, num) => total + num, 0);
    setNumBd(sum);
  }, [numB]);

  useEffect(() => {
    //  if (numC > 0) {
    //    setMas(senterLoc);
    //    setNumB2(senterLoc.length);
    //  } else {
    //  setMas(senter);
    setNumB2(aa1.length);
    //  }
  }, [aa1]);
  useEffect(() => {
    //  if (numC > 0) {
    //    setNumB1(Array(numB2 + 1).fill(1));
    //  } else {
    setNumB1(Array(numB2 + 1).fill(1));
    //  }
    addOnesx();
  }, [aa1]);

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
  const handleRemov = (m) => {
    setNumBas(m);
  };
  //   console.log(senter, "b");
  return (
    <div className={styles.main}>
      <BsX size={20} className={styles.x} onClick={() => setT((t) => !t)} />
      <div className={styles.main1}>
        {twoCard.length === 0 ? (
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
              {twoCard.length === 0 ? (
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
              {Array.isArray(twoCard) &&
                twoCard.map((item, index) => (
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
                      onClick={(e) => {
                        setEId(item.id);
                      }}
                      id={item.id}
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
