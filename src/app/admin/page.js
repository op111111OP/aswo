"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function Page() {
  const [flutters, setFlutters] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [fol, setFol] = useState(1);

  //   ----
  const [flutters1, setFlutters1] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setFol(1);
  };
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
    setFol(1);
  };
  const postPas = () => {
    setInputValue2(inputValue);
    setInputValue3(inputValue1);
    setFol(4);
  };
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: `${inputValue2}`,
          password: `${inputValue3}`,
          //  login: "max",
          //  password: "6HrFrdc*#?rx!8x",
        }),
      };

      try {
        const response = await fetch("/api/admin", options);
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [inputValue2, fol]);
  useEffect(() => {
    if (flutters.length === 1) {
      const fetchData = async () => {
        try {
          const response = await fetch(`api/or/adminOrder`);
          const data = await response.json();
          setFlutters1(data);
        } catch (error) {
          console.log("Что-то пошло не так...", error);
        } finally {
          console.log("пошло так...");
        }
      };
      fetchData();
    }
  }, [flutters]);

  const tId = async (id) => {
    try {
      const response = await fetch(`api/delit/${id}`);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    } finally {
      console.log("пошло так... delit");
    }
  };
  // ---штзге
  const handleSubmit1 = async (values) => {
    try {
      const response = await fetch(`api/delitAdmin/${values.article}`);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    } finally {
      console.log("пошло так... delit");
    }
  };
  const handleSubmit = async (values) => {
    console.log(values, "kk");
    try {
      const response = await fetch("/api/postCopy/ord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("");
      } else {
        console.error("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  console.log("inputValue2", flutters1);
  return (
    <div className={styles.box}>
      {flutters.length === 0 && (
        <div className={styles.box_input}>
          <input
            className={styles.input1}
            placeholder="логін"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input
            className={styles.input2}
            placeholder="пароль"
            type="text"
            value={inputValue1}
            onChange={handleInputChange1}
          />
          <div
            className={styles.input_but}
            onClick={() => {
              postPas();
            }}
          >
            зайти
          </div>
          {fol === 4 && flutters.length === 0 && (
            <div>логін або пароль некоректний</div>
          )}
        </div>
      )}
      {flutters.length === 1 && (
        <div className={styles.box_4_box}>
          <div className={styles.box_4_1}>
            <div className={styles.box_4_}>
              <Formik
                onSubmit={handleSubmit}
                initialValues={{
                  name: "",
                  article: "",
                  img: "",
                  price: "",
                  brand: "",
                  country: "",
                  description: "",
                }}
                validate={(values) => {
                  const errors = {};

                  return errors;
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={styles.box_f}>
                    <Field
                      type="text"
                      name="name"
                      placeholder="name"
                      className={styles.name1}
                      id="first_name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={`${styles.error} ${styles.error1}`}
                    />
                    <Field
                      type="text"
                      name="article"
                      placeholder="article"
                      className={styles.name1}
                      id="first_name"
                    />
                    <ErrorMessage
                      name="article"
                      component="div"
                      className={`${styles.error} ${styles.error1}`}
                    />

                    <Field
                      type="text"
                      name="img"
                      placeholder="img"
                      className={styles.email}
                    />

                    <ErrorMessage
                      name="img"
                      component="div"
                      className={`${styles.error} ${styles.error3}`}
                    />
                    <Field
                      type="number"
                      name="price"
                      placeholder="price"
                      className={styles.email}
                    />

                    <ErrorMessage
                      name="price"
                      component="div"
                      className={`${styles.error} ${styles.error3}`}
                    />

                    <Field
                      type="text"
                      name="brand"
                      placeholder="brand"
                      className={styles.name2}
                    />
                    <ErrorMessage
                      name="brand"
                      component="div"
                      className={`${styles.error} ${styles.error6}`}
                    />
                    <Field
                      type="text"
                      name="country"
                      placeholder="country"
                      className={styles.name2}
                    />
                    <ErrorMessage
                      name="country
                      "
                      component="div"
                      className={`${styles.error} ${styles.error6}`}
                    />
                    <Field
                      type="text"
                      name="description"
                      placeholder="description"
                      className={styles.name2}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className={`${styles.error} ${styles.error6}`}
                    />

                    <button
                      className={`${styles.issue_order} ${styles.issue_or}`}
                      disabled={isSubmitting}
                      type="submit"
                    >
                      Оформити
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className={styles.box_4_}>
              <Formik
                onSubmit={handleSubmit1}
                initialValues={{
                  article: "",
                }}
                validate={(values) => {
                  const errors = {};

                  return errors;
                }}
              >
                {({ isSubmitting1 }) => (
                  <Form className={styles.box_f}>
                    <Field
                      type="text"
                      name="article"
                      placeholder="article"
                      className={styles.name1}
                      id="first_name"
                    />
                    <ErrorMessage
                      name="article"
                      component="div"
                      className={`${styles.error} ${styles.error1}`}
                    />
                    <button
                      className={`${styles.issue_order} ${styles.issue_or}`}
                      disabled={isSubmitting1}
                      type="submit"
                    >
                      Видалити
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className={styles.box_4}>
            {Array.isArray(flutters1) &&
              flutters1.map((item, index) => (
                <div key={index}>
                  <div className={styles.box_0}>
                    <div className={styles.box_00}>
                      <div className={styles.box_}>
                        {item.first_name} {item.last_name}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}> Місто:</span> {item.city}
                      </div>

                      <div className={styles.box_}>
                        {" "}
                        <span className={styles.span}> email:</span>
                        {item.email}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}> Телефон:</span>{" "}
                        {item.phone}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}></span> {}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}>Дата замовлення:</span>{" "}
                        {item.day}
                      </div>
                    </div>

                    <div className={styles.box_00}>
                      <div className={styles.box_}>
                        {" "}
                        <span className={styles.span}> Адреса:</span>
                        {item.street}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}> Відділення:</span>
                        {item.department}
                      </div>

                      <div className={styles.box_}>
                        {" "}
                        <span className={styles.span}> Доставка:</span>
                        {item.courier}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}> Оплата:</span>
                        {item.card}
                      </div>
                      <div className={styles.box_}>
                        <span className={styles.span}> Всього:</span>
                        {item.someField}грн.
                      </div>
                    </div>
                  </div>
                  <div className={styles.box_1a1}>
                    {Array.isArray(item.numB1) &&
                      item.numB1.map((item, index) => (
                        <div key={index} className={styles.box_1ad}>
                          Кількість: {item} шт.
                        </div>
                      ))}
                  </div>
                  <div className={styles.box_1a2}>
                    {Array.isArray(item.numB) &&
                      item.numB.map((item, index) => (
                        <div key={index} className={styles.box_1ad}>
                          Вартість: {item}грн.
                        </div>
                      ))}
                  </div>
                  <div className={styles.box_11}>
                    {Array.isArray(item.userData) &&
                      item.userData.map((item, index) => (
                        <div key={index} className={styles.box_1d}>
                          <div className={styles.box_1}>
                            Артикль: {item.article}
                          </div>
                          <div className={styles.box_1}>{item.name}</div>

                          <div className={styles.box_1cc}>
                            Ціна: {item.price}грн.
                          </div>
                        </div>
                      ))}
                  </div>
                  <div
                    className={styles.box_but}
                    onClick={() => {
                      tId(item._id);
                    }}
                  >
                    Видалити.
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
