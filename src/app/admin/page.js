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
  const [fluta, setFluta] = useState([]);
  //   кн клік

  const [activeItems, setActiveItems] = useState({});

  const toggleActive = (itemId) => {
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [itemId]: !prevActiveItems[itemId],
    }));
  };

  //   кн клік
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

  const handleSubmit2 = async (values) => {
    try {
      const response = await fetch(`/api/articleAdmin/${values.article}`);
      const data = await response.json();
      setFluta(data);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    } finally {
      console.log("пошло так...");
    }
  };
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
  //   --put---
  const [fluttersPut, setFluttersPut] = useState(false);

  const handleSubmitPut = async (values) => {
    try {
      const response = await fetch(`api/put/put`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article: values.article,
          com: values.description,
        }),
      });
      const data = await response.json();
      setFluttersPut(data);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  //   --put---and

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
                  categori: fluta.categori === 1 ? fluta[0].categori : "",
                  name: fluta.length === 1 ? fluta[0].name : "",
                  article: fluta.length === 1 ? fluta[0].article : "",
                  img: fluta.length === 1 ? fluta[0].img : "",
                  price: fluta.length === 1 ? fluta[0].price : "",
                  brand: fluta.length === 1 ? fluta[0].brand : "",
                  country: fluta.length === 1 ? fluta[0].country : "",
                  com: fluta.length === 1 ? fluta[0].com : "",
                  description: fluta.length === 1 ? fluta[0].description : "",
                  novel: fluta.length === 1 ? false : "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (fluta.length === 1) {
                    values.categori = values.categori || fluta[0].categori;
                    values.name = values.name || fluta[0].name;
                    values.article = values.article || fluta[0].article;
                    values.img = values.img || fluta[0].img;
                    values.price = values.price || fluta[0].price;
                    values.brand = values.brand || fluta[0].brand;
                    values.country = values.country || fluta[0].country;
                    values.com = values.com || fluta[0].com;
                    values.description =
                      values.description || fluta[0].description;
                    values.novel = values.novel || false;
                  }
                  return errors;
                }}
              >
                {({ isSubmitting, values }) => (
                  <Form className={styles.box_f}>
                    <Field
                      type="text"
                      name="categori"
                      placeholder={
                        values.categori ||
                        (fluta.length === 1 ? fluta[0].categori : "categori")
                      }
                      className={styles.name1}
                      id="first_name"
                    />
                    <ErrorMessage
                      name="categori"
                      component="div"
                      className={`${styles.error} ${styles.error1}`}
                    />
                    <Field
                      type="text"
                      name="name"
                      placeholder={
                        values.name ||
                        (fluta.length === 1 ? fluta[0].name : "name")
                      }
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
                      placeholder={
                        values.article ||
                        (fluta.length === 1 ? fluta[0].article : "article")
                      }
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
                      placeholder={
                        values.img ||
                        (fluta.length === 1 ? fluta[0].img : "img")
                      }
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
                      placeholder={
                        values.price ||
                        (fluta.length === 1 ? fluta[0].price : "price")
                      }
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
                      placeholder={
                        values.brand ||
                        (fluta.length === 1 ? fluta[0].brand : "brand")
                      }
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
                      placeholder={
                        values.country ||
                        (fluta.length === 1 ? fluta[0].country : "country")
                      }
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
                      name="com"
                      placeholder={
                        values.com ||
                        (fluta.length === 1 ? fluta[0].com : "com")
                      }
                      className={styles.name2}
                    />
                    <ErrorMessage
                      name="com"
                      component="div"
                      className={`${styles.error} ${styles.error6}`}
                    />
                    {/* ----------- */}

                    <ErrorMessage
                      name="description"
                      component="div"
                      className={`${styles.error} ${styles.error6}`}
                    />
                    <Field
                      as="textarea"
                      name="description"
                      placeholder={
                        values.description ||
                        (fluta.length === 1
                          ? fluta[0].description
                          : "description")
                      }
                      className={styles.textarea}
                    />
                    {/* ----------- */}
                    <Field
                      type="text"
                      name="novel"
                      placeholder={
                        values.novel ||
                        (fluta.length === 1 ? fluta[0].novel : "novel")
                      }
                      className={styles.name2}
                    />
                    <ErrorMessage
                      name="novel"
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
            <div className={styles.box_5_}>
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
                    <Form className={styles.box_f1}>
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
              <div className={styles.box_4_}>
                <Formik
                  onSubmit={handleSubmit2}
                  initialValues={{
                    article: "",
                  }}
                  validate={(values) => {
                    const errors = {};

                    return errors;
                  }}
                >
                  {({ isSubmitting2 }) => (
                    <Form className={styles.box_f1}>
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
                        disabled={isSubmitting2}
                        type="submit"
                      >
                        Знайти
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* put */}
              <div className={styles.box_4_}>
                <Formik
                  onSubmit={handleSubmitPut}
                  initialValues={{
                    article: "",

                    description: "",
                  }}
                  validate={(values) => {
                    const errors = {};

                    return errors;
                  }}
                >
                  {({ isSubmitting11 }) => (
                    <Form className={styles.box_f1}>
                      <Field
                        type="text"
                        name="article"
                        placeholder="article"
                        className={styles.name1}
                        id="first_name22"
                      />
                      <ErrorMessage
                        name="article"
                        component="div"
                        className={`${styles.error} ${styles.error1}`}
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className={`${styles.error} ${styles.error6}`}
                      />
                      <Field
                        as="textarea"
                        name="description"
                        placeholder=""
                        className={styles.textarea}
                      />

                      <button
                        className={`${styles.issue_order} ${styles.issue_or}`}
                        disabled={isSubmitting11}
                        type="submit"
                      >
                        Змінити
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* put  and*/}
            </div>
          </div>
          <div className={styles.box_4}>
            {Array.isArray(flutters1) &&
              flutters1.map((item, index) => (
                <div key={index} className={styles.box_011}>
                  {index > 0 && (
                    <div className={styles.box_span}>{index}. замовлення.</div>
                  )}
                  {index > 0 && (
                    <div className={styles.box_0}>
                      <div className={styles.box_00}>
                        <div className={styles.box_}>{item.pib}</div>
                        <div className={styles.box_}>
                          <span className={styles.span}> Місто:</span>{" "}
                          {item.CitiesInput}
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
                          <span className={styles.span}>
                            {" "}
                            Відділення Нова Пошта:
                          </span>
                          {item.CitiesInput1}
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
                  )}
                  <div className={styles.box_aaaaaaa}>
                    {index > 0 && (
                      <div className={styles.box_11}>
                        {Array.isArray(item.userData) &&
                          item.userData.map((item, index) => (
                            <div key={index} className={styles.box_1k}>
                              <div className={styles.box_1d}>
                                <div className={styles.box_1}>
                                  Артикул: {item.article}
                                </div>
                                <div className={styles.box_1}>{item.name}</div>

                                <div className={styles.box_1}>
                                  Ціна: {item.price}грн.
                                </div>
                              </div>
                              <div className={styles.box_1}>{item.com}</div>
                            </div>
                          ))}
                      </div>
                    )}
                    <div className={styles.box_aaaaaaa_box_1a1}>
                      {index > 0 && (
                        <div className={styles.box_1a1}>
                          {Array.isArray(item.numB1) &&
                            item.numB1.map((item, index) => (
                              <div key={index} className={styles.box_1ad}>
                                Кількість: {item} шт.
                              </div>
                            ))}
                        </div>
                      )}
                      {index > 0 && (
                        <div className={styles.box_1a2}>
                          {Array.isArray(item.numB) &&
                            item.numB.map((item, index) => (
                              <div key={index} className={styles.box_1ad}>
                                Вартість: {item}грн.
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* кнопка клик */}
                  {index > 0 && (
                    <div className={styles.box_but_1}>
                      <div
                        className={`${styles.box_but} ${
                          activeItems[item._id] && styles.box_butClik
                        }`}
                        onClick={() => {
                          toggleActive(item._id);
                          tId(item._id);
                        }}
                      >
                        Видалити.
                      </div>
                    </div>
                  )}
                </div>
                //
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
