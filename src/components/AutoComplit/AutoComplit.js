"use client";
import { useEffect, useState } from "react";
import styles from "./AutoComplit.module.css";
import Link from "next/link";

export default function AutoComplit({ value }) {
  const [flutters, setFlutters] = useState(null);
  const [tryAuto, setTryAuto] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/autoComplit/${value}`);
        const data = await response.json();
        setFlutters(data);
        setFilteredProducts(data);
      } catch (error) {
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [value]);
  return (
    <div
      className={styles.auto_complid_box}
      style={{ display: flutters ? "block" : "none" }}
    >
      {flutters &&
        tryAuto &&
        Object.values(flutters).map((item, index) => (
          <Link key={index} href={`/product?id=${item._id}`}>
            <div
              className={styles.auto_complid_element}
              onClick={() => setTryAuto(false)}
            >
              {index + 1}.{item.name}
            </div>
          </Link>
        ))}
    </div>
  );
}
