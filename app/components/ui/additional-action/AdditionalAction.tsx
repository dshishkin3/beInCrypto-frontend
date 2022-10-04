import Link from "next/link";
import React, { FC } from "react";

import styles from "./AdditionalAction.module.scss";

export const AdditionalAction: FC<any> = ({
  children,
  actionText,
  to = "/",
}) => {
  return (
    <div>
      <span className={styles.text}>{children} </span>
      <Link href={to}>
        <span className={styles.link}>{actionText}</span>
      </Link>
    </div>
  );
};
