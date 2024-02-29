"use client";
// ------------
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NovaPoshta from "novaposhta";

// ------------
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Basket.module.css";
import { useLocalStorage } from "react-use";
import {
  BsChevronDown,
  BsChevronUp,
  BsTrash3,
  BsWindowStack,
} from "react-icons/bs";
import { useUserContext } from "../../app/Context/store";
import { BsArrowLeft } from "react-icons/bs";
import { BsX } from "react-icons/bs";
// ----------
import { PiWechatLogoFill } from "react-icons/pi";
import { ImTruck } from "react-icons/im";
import { Formik, Form, Field, ErrorMessage } from "formik";

// ----------

export default function Basket({ fals }) {
  const { setCard, onCard, setDelcard } = useUserContext();
  const [twoCard, setTwoCard] = useState(onCard);
  const [t, setT] = useState(true);
  const [truF, setTruF] = useState(false);
  const [truK, setTruK] = useState(true);
  const [numB, setNumB] = useState([]);
  const [numBd, setNumBd] = useState(0);
  const [numB2, setNumB2] = useState(0);
  const [numB1, setNumB1] = useState([]);
  const [eId, setEId] = useState("");
  const [onTrue, setOnTrue] = useState(false);
  const [day, setDay] = useState([]);
  const [trueCtrel1, setTrueCtrel1] = useState(false);
  const [trueCtrel2, setTrueCtrel2] = useState(false);
  //   -------------
  const api = new NovaPoshta({ apiKey: "8764786e4aa64a72682768a26ef85caf" });
  const [Warehouses, setWarehouses] = useState(false);
  const [Cities, setCities] = useState(false);
  const [CityName, setCityName] = useState(false);
  const [CitiesInput, setCitiesInput] = useState("");
  const [CitiesInput1, setCitiesInput1] = useState("");
  const [trueClickText, setTrueClickText] = useState(false);

  //   -------------

  //   input
  const [selectedOption, setSelectedOption] = useState(
    "Онлайн-оплата банківською карткою (WayForPay)"
  );
  const [selectedOption1, setSelectedOption1] = useState("Нова пошта");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  //   input

  function Adrlas(index) {
    setNumB((prevN) => {
      const updatedN = [...prevN]; // Створюємо копію масиву
      updatedN.splice(index, 1); // Видаляємо елемент за індексом
      return updatedN; // Повертаємо оновлений масив
    });
    setNumB1((prevN) => {
      const updatedN = [...prevN]; // Створюємо копію масиву
      updatedN.splice(index, 1); // Видаляємо елемент за індексом
      return updatedN; // Повертаємо оновлений масив
    });
  }

  useEffect(() => {
    setTwoCard(onCard);
  }, [onCard]);

  useEffect(() => {
    setTwoCard(onCard);
  }, [onCard]);
  useEffect(() => {
    setTwoCard(onCard);
  }, [onCard]);

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
    const addOnesx = () => {
      const numbers = twoCard.map((obj) => obj.price);
      setNumB(numbers);
    };
    addOnesx();
  }, [twoCard]);

  useEffect(() => {
    const sum = numB.reduce((total, num) => total + num, 0);
    setNumBd(sum);
    if (numB.length > numB1.length) {
      const newArray = numB.map(() => 1);
      setNumB1(newArray);
    }
  }, [numB]);

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

  //   dddddddddd відділення
  useEffect(() => {
    api.address
      .getWarehouses({ CityName: String(CityName) })
      .then((json) => {
        setWarehouses(json.data);
      })
      .catch((errors) => {});
  }, [CityName]);
  useEffect(() => {
    api.address
      .searchSettlements({ CityName: CitiesInput })
      .then((json) => {
        setCities(json);
        // console.log(Cities.data[0].Addresses);
      })
      .catch((errors) => {});
  }, [CitiesInput]);
  //   dddddddddd
  const handleSubmit = async (values) => {
    console.log(values, "kk");
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
  const updateDei = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    setDay(`${day}-${month}-${year}`);
  };

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
                  pib: "",
                  email: "",
                  phone: "",
                  street: "",

                  someField: "",
                  userData: "",
                  department: "",
                  courier: "",
                  card: "",
                  day: "",
                  numB1: "",
                  numB: "",
                  CitiesInput: "",
                  CitiesInput1: "",
                }}
                validate={(values) => {
                  values.userData = twoCard;
                  values.someField = numBd;
                  values.courier = selectedOption1;
                  values.card = selectedOption;
                  values.day = day;
                  values.numB1 = numB1;
                  values.numB = numB;
                  values.CitiesInput = CitiesInput;
                  values.CitiesInput1 = CitiesInput1;

                  const errors = {};
                  if (!values.pib) {
                    errors.pib = "це обов'язкове поле";
                  }

                  if (!values.phone) {
                    errors.phone = "Телефон обов'язкове поле";
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
                          <PiWechatLogoFill size="20px" />
                          <h4 className={styles.h3}>Контактні дані</h4>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_сontacts} ${styles.form_сontacts2v}`}
                      >
                        {/* хх */}
                        <Field
                          type="text"
                          name="pib"
                          placeholder="ПІБ"
                          className={styles.name3}
                        />
                        <ErrorMessage
                          name="pib"
                          component="div"
                          className={`${styles.error} ${styles.error6}`}
                        />
                      </div>
                      {/* хх */}
                      <div className={styles.tel_box}>
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
                      </div>
                    </div>
                    <div className={styles.box_сontacts}>
                      <div className={styles.box_h3}>
                        <div className={styles.h3_dox}>
                          <ImTruck size="20px" />
                          <h4 className={styles.h3}>Способи доставки</h4>
                        </div>
                      </div>
                      <div
                        className={`${styles.form_сontacts} ${styles.form_delivery}`}
                      >
                        {/* 1 */}
                        <fieldset
                          className={`${styles.fieldset} ${
                            trueCtrel1 && styles.fieldset_true
                          }`}
                        >
                          <div
                            className={styles.iconCt}
                            onClick={() => {
                              setTrueCtrel1(!trueCtrel1);
                            }}
                          >
                            {trueCtrel1 && <BsChevronUp size="20px" />}
                            {!trueCtrel1 && <BsChevronDown size="20px" />}
                          </div>
                          {/*  */}

                          <div className={styles.fieldset_input1}>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="nova"
                                name="courier"
                                value="Нова пошта"
                                checked={selectedOption1 === "Нова пошта"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Нова пошта">Нова пошта.</label>
                            </div>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="ykr"
                                name="courier"
                                value="Укрпошта"
                                checked={selectedOption1 === "Укрпошта"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Укрпошта">Укрпошта.</label>
                            </div>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="meest1"
                                name="courier"
                                value="Meest Express"
                                checked={selectedOption1 === "Meest Express"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Meest Express">
                                Meest Express.
                              </label>
                            </div>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="meest2"
                                name="courier"
                                value="Delivery"
                                checked={selectedOption1 === "Delivery"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Delivery">Delivery.</label>
                            </div>
                            <h5 className={styles.h3}>Самовивіз:</h5>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="meest3"
                                name="courier"
                                value="Харків"
                                checked={selectedOption1 === "Харків"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Харків">Харків.</label>
                            </div>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="meest4"
                                name="courier"
                                value="Київ"
                                checked={selectedOption1 === "Київ"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Київ">Київ.</label>
                            </div>
                            <div className={styles.fieldset_input_text}>
                              <input
                                className={styles.fieldset_input}
                                type="radio"
                                id="meest5"
                                name="courier"
                                value="Львів"
                                checked={selectedOption1 === "Львів"}
                                onChange={handleOptionChange1}
                              />
                              <label htmlFor="Львів">Львів.</label>
                            </div>
                          </div>
                        </fieldset>
                        {/* 1 and*/}

                        {selectedOption1 === "Львів" ||
                        selectedOption1 === "Харків" ||
                        selectedOption1 === "Київ" ? (
                          <Field
                            type="text"
                            name="street"
                            placeholder="Адреса"
                            className={styles.name1}
                          />
                        ) : null}

                        {selectedOption1 === "Львів" ||
                        selectedOption1 === "Харків" ||
                        selectedOption1 === "Київ" ? (
                          <ErrorMessage
                            name="street"
                            component="div"
                            className={`${styles.error} ${styles.error5}`}
                          />
                        ) : null}
                        {/* -----------------------пош нова */}
                        <div className={styles.nov_box}>
                          {selectedOption1 !== "Львів" &&
                            selectedOption1 !== "Харків" &&
                            selectedOption1 !== "Київ" && (
                              <div className={styles.nov_box_inputg}>
                                <input
                                  type="text"
                                  placeholder="Місто"
                                  className={styles.nov_box_input}
                                  onChange={(event) => {
                                    setCitiesInput(event.target.value),
                                      setTrueClickText(true);
                                  }}
                                  value={CitiesInput}
                                />
                                {trueClickText && Cities && (
                                  <div className={styles.nov_box_input_poick}>
                                    {Cities.data[0].Addresses.map(
                                      (item, index) => (
                                        <div
                                          key={index}
                                          id={`${index}_nov`}
                                          onClick={() => {
                                            setCityName(item.MainDescription);
                                            setTrueClickText(false);
                                            setCitiesInput(
                                              item.MainDescription
                                            );
                                          }}
                                          className={
                                            styles.nov_box_input_poick_map
                                          }
                                        >
                                          {item.MainDescription}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            )}

                          {selectedOption1 === "Нова пошта" && Warehouses && (
                            <div className={styles.nov_icon1}>
                              <Autocomplete
                                disablePortal
                                className={styles.nov_icon}
                                id="combo-box-demo"
                                inputValue={CitiesInput1}
                                onInputChange={(event, newInputValue) => {
                                  setCitiesInput1(newInputValue);
                                }}
                                options={Warehouses.map(
                                  (warehouse) => warehouse.Description
                                )}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    className={styles.nov_icon3}
                                    {...params}
                                    label="Відділення нової пошти"
                                  />
                                )}
                              />
                            </div>
                          )}
                        </div>
                        {/* -----------------------пош нова and*/}

                        {selectedOption1 !== "Нова пошта" &&
                          selectedOption1 !== "Львів" &&
                          selectedOption1 !== "Київ" &&
                          selectedOption1 !== "Харків" && (
                            <Field
                              type="text"
                              name="department"
                              placeholder="Відділення"
                              className={styles.name2}
                            />
                          )}
                        {selectedOption1 !== "Нова пошта" &&
                          selectedOption1 !== "Львів" &&
                          selectedOption1 !== "Київ" &&
                          selectedOption1 !== "Харків" && (
                            <ErrorMessage
                              name="department"
                              component="div"
                              className={`${styles.error} ${styles.error6}`}
                            />
                          )}
                        <div className={styles.fieldset_box}>
                          <div className={styles.box_h3}>
                            <div className={styles.h3_dox}>
                              <BsWindowStack size="20px" />
                              <h4 className={styles.h3}>Оплата</h4>
                            </div>
                          </div>
                          {/* 2 -оплата*/}
                          <fieldset
                            className={`${styles.fieldset1} ${
                              trueCtrel2 && styles.fieldset1_true
                            }`}
                          >
                            <div
                              className={styles.iconCt}
                              onClick={() => {
                                setTrueCtrel2(!trueCtrel2);
                              }}
                            >
                              {trueCtrel2 && <BsChevronUp size="20px" />}
                              {!trueCtrel2 && <BsChevronDown size="20px" />}
                            </div>
                            <div className={styles.fieldset_input1}>
                              <div className={styles.fieldset_input_text}>
                                <input
                                  className={styles.fieldset_input}
                                  type="radio"
                                  id="card1"
                                  name="card"
                                  value="Онлайн-оплата банківською карткою (WayForPay)"
                                  checked={
                                    selectedOption ===
                                    "Онлайн-оплата банківською карткою (WayForPay)"
                                  }
                                  onChange={handleOptionChange}
                                />
                                <label htmlFor="Онлайн-оплата банківською карткою (WayForPay)">
                                  Онлайн-оплата банківською карткою (WayForPay).
                                </label>
                              </div>
                              <div className={styles.coment}>
                                Ви можете сплатити любою карткою Visa або
                                MasterCard - цілодобово.
                              </div>
                              <div className={styles.fieldset_input_text}>
                                <input
                                  className={styles.fieldset_input}
                                  type="radio"
                                  id="card2"
                                  name="card"
                                  value="Післяплата у відділенні при отриманні"
                                  checked={
                                    selectedOption ===
                                    "Післяплата у відділенні при отриманні"
                                  }
                                  onChange={handleOptionChange}
                                />
                                <label htmlFor="Післяплата у відділенні при отриманні">
                                  Післяплата у відділенні при отриманні.
                                </label>
                              </div>
                              <div className={styles.coment}>
                                -------------------------------------------------------
                              </div>
                              <div className={styles.fieldset_input_text}>
                                <input
                                  className={styles.fieldset_input}
                                  type="radio"
                                  id="card3"
                                  name="card"
                                  value="Оплата по реквізитам"
                                  checked={
                                    selectedOption === "Оплата по реквізитам"
                                  }
                                  onChange={handleOptionChange}
                                />
                                <label htmlFor="Оплата по реквізитам">
                                  Оплата по реквізитам.
                                </label>
                              </div>
                              <div className={styles.coment}>
                                -------------------------------------------------------
                              </div>
                              <div className={styles.fieldset_input_text}>
                                <input
                                  className={styles.fieldset_input}
                                  type="radio"
                                  id="card4"
                                  name="card"
                                  value="Оплата по реквізитам юр. особа з ПДВ"
                                  checked={
                                    selectedOption ===
                                    "Оплата по реквізитам юр. особа з ПДВ"
                                  }
                                  onChange={handleOptionChange}
                                />
                                <label htmlFor="Оплата по реквізитам юр. особа з ПДВ">
                                  Оплата по реквізитам юр. особа з ПДВ.
                                </label>
                              </div>
                              <div className={styles.coment}>
                                Безготівковий розрахунок з ПДВ ця форма оплати
                                найбільше підходить для фірм (юридичних осіб,
                                платників ПДВ). Весь пакет документів, включаючи
                                податкову накладну, ви отримуєте разом із
                                товаром. Рахунок-фактуру на товар Ви можете
                                отримати в офісі компанії або електронною
                                поштою.
                              </div>
                            </div>
                          </fieldset>
                          {/* 2 -оплата and*/}
                        </div>
                        <div className={styles.price}>
                          до сплати:{" "}
                          <span className={styles.price_span}>{numBd}</span>
                          грн.
                        </div>
                        <button
                          onClick={() => {
                            updateDei();
                          }}
                          className={`${styles.issue_order} ${styles.issue_or}`}
                          disabled={isSubmitting}
                          type="submit"
                        >
                          Оформити замовлення
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
            {/* ---------------------- */}

            {truK && (
              <div className={styles.bas_ralac}>
                {twoCard.length === 0 ? (
                  <p></p>
                ) : (
                  <div className={styles.h111}>
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
                              if (numB1[index] > 1) {
                                updateNumBn22(index);
                                updateNumBn(index, item.price);
                              }
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
                          Adrlas(index);
                          setEId(item.id);
                          setDelcard(2);
                        }}
                        id={item.id}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
        {truK && (
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
                  setTruK(false);
                }}
              >
                Перейти до оформлення
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
