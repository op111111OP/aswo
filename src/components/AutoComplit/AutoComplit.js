import { useEffect, useState } from "react";
import styles from "./AutoComplit.module.css";
import Link from "next/link";

export default function AutoComplit({ value }) {
  const [flutters, setFlutters] = useState(null);
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
    <div className={styles.auto_complid_box}>
      {flutters &&
        flutters.map((item, index) => (
          <div key={index} className={styles.auto_complid_element}>
            {item.name}
          </div>
        ))}
    </div>
  );
}
