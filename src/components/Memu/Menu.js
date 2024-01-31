import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Menu({ flutters, onMouseEnter, onMouseLeave }) {
  //   console.log(flutters);
  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {flutters &&
        flutters.map((item, index) => (
          <div key={index} className={styles.component_box}>
            {(item.mas && (
              <div className={styles.component_name_box}>
                <Image src={item.img} alt={item.name} width={30} height={30} />
                <div className={styles.component_name}>{item.name}</div>
              </div>
            )) || (
              <Link href="/" className={styles.component_name_box}>
                <Image src={item.img} alt={item.name} width={30} height={30} />
                <div className={styles.component_name}>{item.name}</div>
              </Link>
            )}
            {flutters[index].mas && (
              <div className={styles.component_mas}>
                {flutters[index].mas.map((item, index) => (
                  <Link
                    href="/"
                    key={index}
                    className={styles.component_mas_elem}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
