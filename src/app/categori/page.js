"use client";
import Slider from "rc-slider";
import styles from "./page.module.css";
import { BsCardList } from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Basket from "../../components/Basket/Basket";
import { useUserContext } from "../Context/store";
import { useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function Page() {
  const { setId, setOnCard1 } = useUserContext();
  const [resCategori, setResCategori] = useState([]);
  const [resCategori1, setResCategori1] = useState([]);
  const searchParams = useSearchParams();
  const onCategori = searchParams.get("categori");
  const falsepon = searchParams.get("false");
  const falsepon1 = searchParams.get("currentPage1");
  const i = searchParams.get("i");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [flutters, setFlutters] = useState([]);
  const [cehage, setCehage] = useState(false);
  const [cehageCor, setCehageCor] = useState(false);
  const [nIFalsum, setIFals] = useState(false);
  const [nIFalsum1, setIFals1] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts1, setFilteredProducts1] = useState([]);
  const [filteredProducts2, setFilteredProducts2] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countri, setCountri] = useState([{}]);
  const [countri1, setCountri1] = useState([{}]);
  const [countryCheckboxes, setCountryCheckboxes] = useState({});
  const [countryCheckboxes1, setCountryCheckboxes1] = useState({});

  // ===============
  const [showPopup, setShowPopup] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  //   --
  const [botClick, setBotClick] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imgSrc) => {
    setImageErrors((prevErrors) => ({ ...prevErrors, [imgSrc]: true }));
  };

  const handleMouseEnter = (src) => {
    setImageSrc(src);
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  //   -----
  const [flutters1, setFlutters1] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    //  ---
    const newCountryCheckboxes = {};
    Object.keys(countryCheckboxes).forEach((country) => {
      newCountryCheckboxes[country] = false;
    });
    // Оновлюємо стан інп
    setCountryCheckboxes(newCountryCheckboxes);
    const newCountryCheckboxes1 = {};
    Object.keys(countryCheckboxes1).forEach((country) => {
      newCountryCheckboxes1[country] = false;
    });
    // Оновлюємо стан інп
    setCountryCheckboxes1(newCountryCheckboxes1);
  };

  //   -----
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 850) {
        setIFals(false);
        setIFals1(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    //  ---
    const newCountryCheckboxes = {};
    Object.keys(countryCheckboxes).forEach((country) => {
      newCountryCheckboxes[country] = false;
    });
    // Оновлюємо стан інп
    setCountryCheckboxes(newCountryCheckboxes);
    const newCountryCheckboxes1 = {};
    Object.keys(countryCheckboxes1).forEach((country) => {
      newCountryCheckboxes1[country] = false;
    });
    // Оновлюємо стан інп
    setCountryCheckboxes1(newCountryCheckboxes1);
  }, [selectedCountries, currentPage, onCategori]);
  useEffect(() => {
    setCurrentPage("1");
  }, [falsepon1, onCategori]);
  //   -----

  const sortByValueAscending = () => {
    const sortedArray = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedArray);
  };
  const sortByValueDescending = () => {
    const sortedArray = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedArray);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `api/categori/${onCategori}?page=${currentPage}`
        );
        const data = await response.json();
        setFlutters(data.docs);
        setFlutters1(data.totalPages);
        setFilteredProducts(data.docs);
        setSelectedCountries(data.docs);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      }
    };
    fetchData();
  }, [onCategori, currentPage, falsepon1]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/findCat/${i}`);
        const data = await response.json();
        setResCategori(data);
      } catch (error) {
        console.log("Что-то пошло не так...");
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [i]);
  useEffect(() => {
    if (resCategori && resCategori.length > 0 && resCategori[0].u) {
      const masArrayWithP = resCategori[0].u
        .filter((item) => Array.isArray(item.mas)) // перевірка чи mas є масивом
        .filter((item) =>
          item.mas.some((subItem) => subItem.text === onCategori)
        )
        .map((item) => item.mas)
        .flat(); // "розгладжуємо" масив, щоб отримати всі об'єкти mas в одному масиві
      setResCategori1(masArrayWithP);
    }
  }, [resCategori, onCategori]);
  useEffect(() => {
    setPriceRange([
      Math.min(...flutters.map((obj) => obj.price)),
      Math.max(...flutters.map((obj) => obj.price)),
    ]);
  }, [flutters]);

  //   bbbbbbbbbbbbbbbbb
  const handleSliderChange = (value) => {
    setPriceRange(value);
    const filtered = flutters.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setFilteredProducts(filtered);
  };
  const handleBoxClick = () => {
    setCehageCor(false);
  };
  const handleBasketClick = (e, object) => {
    setOnCard1(object);
    setCehageCor(true);
    e.stopPropagation();
  };
  function fals(t) {
    setCehageCor(t);
  }
  //   -----------країна
  //   ______mas

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setCountryCheckboxes((prevState) => ({
      ...prevState,
      [value]: checked,
    }));

    setFilteredProducts1(selectedCountries);
  };

  useEffect(() => {
    setFilteredProducts1(
      filteredProducts1.filter((item) =>
        Object.keys(countryCheckboxes).some(
          (country) => country === item.country && countryCheckboxes[country]
        )
      )
    );
  }, [countryCheckboxes]);

  // ---
  useEffect(() => {
    const countCountries = (selectedCountries) => {
      const countryCounts = {};
      selectedCountries.forEach((item) => {
        countryCounts[item.country] = (countryCounts[item.country] || 0) + 1;
      });
      return Object.entries(countryCounts).map(([country, num]) => ({
        country,
        num,
      }));
    };
    const countedCountries = countCountries(selectedCountries);
    setCountri(countedCountries);
  }, [selectedCountries]);
  //   -----------країна

  //   -----------бренд
  //   ______mas

  const handleCheckboxChange1 = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setCountryCheckboxes1((prevState) => ({
      ...prevState,
      [value]: checked,
    }));

    setFilteredProducts2(selectedCountries);
  };

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setFilteredProducts(selectedCountries);
    }
  }, [filteredProducts]);

  // ---
  useEffect(() => {
    setFilteredProducts2(
      filteredProducts2.filter((item) =>
        Object.keys(countryCheckboxes1).some(
          (brand) => brand === item.brand && countryCheckboxes1[brand]
        )
      )
    );
  }, [countryCheckboxes1]);

  useEffect(() => {
    const countCountries = (selectedCountries) => {
      const countryCounts = {};
      selectedCountries.forEach((item) => {
        countryCounts[item.brand] = (countryCounts[item.brand] || 0) + 1;
      });
      return Object.entries(countryCounts).map(([brand, num]) => ({
        brand,
        num,
      }));
    };
    const countedCountries1 = countCountries(selectedCountries);
    setCountri1(countedCountries1);
  }, [selectedCountries]);

  //   -----------бренд
  // ---------------------
  useEffect(() => {
    const mergeArrays = (filteredProducts1, filteredProducts2) => {
      if (filteredProducts1.length === 0) {
        setFilteredProducts(filteredProducts2);
      } else if (filteredProducts2.length === 0) {
        setFilteredProducts(filteredProducts1);
      } else {
        const combinedArray = [...filteredProducts1, ...filteredProducts2];
        const uniqueSet = new Set(combinedArray.map((obj) => obj._id));
        const uniqueArray = Array.from(uniqueSet).map((id) =>
          combinedArray.find((obj) => obj._id === id)
        );
        setFilteredProducts(uniqueArray);
      }
    };
    mergeArrays(filteredProducts1, filteredProducts2);
  }, [filteredProducts1, filteredProducts2]);
  // ---------------------

  return (
    <div className={styles.main}>
      {cehageCor && <Basket fals={fals} />}
      {cehageCor && (
        <div
          className={styles.auto}
          onClick={() => {
            setCehageCor(false);
          }}
        ></div>
      )}
      <div className={styles.header_auto}>
        <FaShoppingCart
          size={25}
          className={styles.FaShoppingCart}
          onClick={() => {
            setCehageCor(true);
          }}
        />
      </div>
      <div className={styles.main_h1_box} id="myBox" onClick={handleBoxClick}>
        <div className={styles.main_h1}>{onCategori}</div>
        <div className={styles.main_h2}>
          <div className={styles.main_sort}>Сортування:</div>
          <div className={styles.main_p_box}>
            <div className={styles.main_p1} onClick={sortByValueAscending}>
              спочатку дешевше
            </div>
            <div className={styles.main_p2} onClick={sortByValueDescending}>
              спочатку дорожчі
            </div>
          </div>
          <div className={styles.reflection_box}>
            <div className={styles.reflection}>Відображення:</div>
            <div className={styles.reflection_icon}>
              <BsCardList
                className={styles.reflection_icon1}
                size={25}
                onClick={() => {
                  setIFals(true);
                }}
              />
              <HiSquares2X2
                className={styles.reflection_icon2}
                size={25}
                onClick={() => {
                  setIFals(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box} id="myBox" onClick={handleBoxClick}>
        {/* кн сорт */}
        <div
          className={styles.main_buton_left}
          onClick={() => setBotClick(!botClick)}
        >
          {botClick ? "Згорнути сортування" : "Розгорнути сортування"}
        </div>

        <div
          className={`${styles.box_left} ${botClick && styles.box_left_activ}`}
        >
          <div className={styles.box_slider}>
            <div className={styles.price_box_cl}>
              <label
                htmlFor="price-range"
                className={styles.price_box_cl_label}
              >
                від:
              </label>

              <input
                type="number"
                value={priceRange[0]}
                className={styles.price_box_cl_input}
                onChange={(event) => {
                  handleSliderChange([event.target.value, priceRange[1]]);
                }}
              ></input>
              <label
                htmlFor="price-range"
                className={styles.price_box_cl_label}
              >
                до:
              </label>
              <input
                type="number"
                value={priceRange[1]}
                className={styles.price_box_cl_input}
                onChange={(event) => {
                  handleSliderChange([priceRange[0], event.target.value]);
                }}
              ></input>
            </div>
            <div className={styles.slider}>
              <Slider
                range
                min={Math.min(...flutters.map((obj) => obj.price))}
                max={Math.max(...flutters.map((obj) => obj.price))}
                step={1}
                value={priceRange}
                onChange={handleSliderChange}
                className={styles.slider_el}
                handleStyle={{
                  borderColor: "blue",
                  height: 18,
                  width: 18,
                  marginTop: -7,
                  backgroundColor: "white",
                }}
              />
            </div>
            {/* in */}
            <div className={styles.categori_box_left1000}>
              {countri && (
                <div className={styles.categori_box_left1}>
                  <div className={styles.categori_box_left1_h1}>Країна:</div>
                  {Array.isArray(countri) &&
                    countri.map((item, index) => (
                      <div key={index} className={styles.component_mas_in}>
                        {item.country !== "false" && (
                          <label htmlFor={`checkbox1_${index}_1`}>
                            {item.country}
                          </label>
                        )}
                        {item.country !== "false" && (
                          <input
                            id={`checkbox1_${index}_1`}
                            className={styles.main_input}
                            type="checkbox"
                            value={item.country}
                            checked={countryCheckboxes[item.country]}
                            onChange={handleCheckboxChange}
                          />
                        )}
                        {item.country !== "false" && (
                          <div className={styles.main_input_box1}>
                            {item.num}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
              {/* in */}
              {/* in бр*/}
              {countri1 && (
                <div className={styles.categori_box_left1}>
                  <div className={styles.categori_box_left1_h1}>Бренд:</div>
                  {Array.isArray(countri1) &&
                    countri1.map((item, index) => (
                      <div key={index} className={styles.component_mas_in}>
                        {item.brand !== "false" &&
                          item.brand !== "undefined" && (
                            <label htmlFor={`checkbox2_${index}_1`}>
                              {item.brand}
                            </label>
                          )}
                        {item.brand !== "false" &&
                          item.brand !== "undefined" && (
                            <input
                              id={`checkbox2_${index}_1`}
                              className={styles.main_input}
                              type="checkbox"
                              value={item.brand}
                              checked={countryCheckboxes1[item.brand]}
                              onChange={handleCheckboxChange1}
                            />
                          )}{" "}
                        {item.brand !== "false" &&
                          item.brand !== "undefined" && (
                            <div className={styles.main_input_box1}>
                              {item.num}
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              )}
              {/* in бр*/}
            </div>
          </div>
          {falsepon === "1" && (
            <div className={styles.categori_box_left}>
              <div className={styles.llef_h2}>Поля із категорії:</div>
              {Array.isArray(resCategori1) &&
                resCategori1.map((item, index) => (
                  <Link
                    href={`./categori?categori=${item.text}&false=1&currentPage1=1`}
                    key={index}
                    className={styles.component_mas_elem}
                  >
                    <div className={styles.categori_box_left_elem}>
                      <div
                        className={styles.categori_left_elem}
                        onClick={() => {
                          setClick(item.text);
                        }}
                        style={{
                          color: onCategori === item.text ? "blue" : "black",
                          textDecoration:
                            onCategori === item.text ? "underline" : "none",
                        }}
                      >
                        {index + 1}. {item.text}.
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>

        <div className={styles.box_right}>
          {nIFalsum && (
            <div className={styles.right_h1}>
              <div className={styles.right_h2}>Назва</div>
              <div className={styles.right_hh}>
                <div className={styles.artic_h2}>Артикул</div>
                <div className={styles.right_h2}>Ціна</div>
              </div>
            </div>
          )}
          <div
            className={
              nIFalsum === false
                ? styles.right_goods_box
                : styles.right_goods_box1
            }
          >
            {Array.isArray(filteredProducts) &&
              filteredProducts.map((item, index) => (
                <div
                  className={
                    nIFalsum === false
                      ? styles.swiper_slide
                      : styles.swiper_slide1
                  }
                  key={index}
                  onMouseEnter={() => {
                    setCehage(index);
                  }}
                  onMouseLeave={() => {
                    setCehage(false);
                  }}
                >
                  <div
                    className={
                      nIFalsum === false ? styles.slide_box : styles.slide_box1
                    }
                  >
                    <Link href={`./product?id=${item._id}`}>
                      <div
                        className={
                          nIFalsum === false
                            ? styles.link_box
                            : styles.link_box1
                        }
                        onClick={() => {
                          setId(item._id);
                        }}
                      >
                        <div
                          className={
                            nIFalsum === false
                              ? styles.img_box
                              : styles.img_box1
                          }
                          onMouseEnter={
                            nIFalsum === true
                              ? () => handleMouseEnter(item.img)
                              : null
                          }
                          onMouseLeave={
                            nIFalsum === true ? handleMouseLeave : null
                          }
                        >
                          <Image
                            className={
                              nIFalsum === false ? styles.img : styles.img1
                            }
                            src={
                              imageErrors[item.img]
                                ? "https://www.aswo.com/typo3conf/ext/aswo/Resources/Public/Images/favicon.ico"
                                : item.img
                            }
                            alt="Vercel Logo"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                            width={30}
                            height={30}
                            onError={() => handleImageError(item.img)}
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                              ...(imageErrors[item.img] && {
                                filter: "blur(3px) opacity(30%) ",
                                transform: "scale(0.7)",
                              }),
                            }}
                          />

                          {showPopup && (
                            <div
                              className={styles.img_vv}
                              style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "white",
                                padding: "20px",
                                border: "1px solid #ccc",
                                zIndex: "9999",
                              }}
                            >
                              <Image
                                className={
                                  nIFalsum === false ? styles.img : styles.img1
                                }
                                src={
                                  imageErrors[imageSrc]
                                    ? "https://www.aswo.com/typo3conf/ext/aswo/Resources/Public/Images/favicon.ico"
                                    : imageSrc
                                }
                                //   src={imageSrc}
                                onError={() => handleImageError(imageSrc)}
                                alt="Vercel Logo"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                                width={30}
                                height={30}
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "contain",
                                  ...(imageErrors[imageSrc] && {
                                    filter: "blur(3px) opacity(30%) ",
                                    transform: "scale(0.7)",
                                  }),
                                }}
                              />
                            </div>
                          )}
                        </div>
                        <div
                          className={
                            nIFalsum === false
                              ? styles.text_box
                              : styles.text_box1
                          }
                        >
                          {window.innerWidth < 600
                            ? `${item.name.slice(0, 67)}...`
                            : item.name}
                        </div>
                      </div>
                    </Link>
                    <div
                      className={
                        nIFalsum === false ? styles.article : styles.article1
                      }
                    >
                      {" "}
                      <span
                        className={
                          nIFalsum === false ? styles.span : styles.span1
                        }
                      >
                        Артикул:
                      </span>
                      {item.article}
                    </div>
                    <div
                      className={
                        nIFalsum === false
                          ? styles.price_box
                          : styles.price_box1
                      }
                    >
                      {item.price === 0 && (
                        <div
                          className={
                            nIFalsum === false
                              ? styles.text_box_price
                              : styles.text_box_price1
                          }
                          style={{ fontSize: "10px", width: "77px" }}
                        >
                          Зверніться до адміністратора.
                        </div>
                      )}
                      {item.price !== 0 && (
                        <div
                          className={
                            nIFalsum === false
                              ? styles.text_box_price
                              : styles.text_box_price1
                          }
                        >
                          {item.price}грн
                        </div>
                      )}
                      <FaShoppingCart
                        size={25}
                        color=" #0058a2"
                        id="basket"
                        onClick={(e) => {
                          handleBasketClick(e, {
                            categori: item.categori,
                            brand: item.brand,
                            country: item.country,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                            id: item._id,
                            article: item.article,
                            com: item.com,
                          });
                        }}
                        className={styles.shopping}
                      />
                    </div>
                    {cehage === index && nIFalsum1 === false && (
                      <div
                        className={
                          nIFalsum === false
                            ? styles.text_botom_box
                            : styles.text_botom_box1
                        }
                      >
                        {item.brand && <div>Бренд: {item.brand}</div>}
                        <div> Країна виробництва: {item.country}</div>
                      </div>
                    )}
                    {nIFalsum1 && (
                      <div
                        className={
                          nIFalsum === false
                            ? styles.text_botom_box
                            : styles.text_botom_box1
                        }
                      >
                        {item.brand && <div>Бренд: {item.brand}</div>}
                        <div> Країна виробництва: {item.country}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          {flutters1 > 1 && (
            <a href="#top">
              <Stack spacing={2} mt={3} className={styles.stack}>
                {/* <Link
                  href={`./categori?categori=${onCategori}&false=1&currentPage1=${currentPage}`}
                > */}
                <Pagination
                  count={flutters1} // Загальна кількість сторінок
                  page={currentPage}
                  onChange={handleChange}
                />
                {/* </Link> */}
              </Stack>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
