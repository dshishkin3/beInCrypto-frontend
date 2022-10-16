import Image from "next/image";

import React from "react";
import Link from "next/link";

import Title from "../../../ui/title/Title";
import { CustomDate } from "../custom-date/CustomDate";

import styles from "./NewsCard.module.scss";

export const NewsCard: React.FC<{ newsData: any }> = ({ newsData }) => {
  return (
    <Link href={newsData.news_link} passHref>
      <li className={styles.newsCard}>
        <Image
          className={styles.image}
          src={newsData.related_image_big}
          alt="Picture of the author"
          width={350}
          height={200}
          objectFit="cover"
        />

        <section className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <Title size="var(--x4)">{newsData.HEADLINE}</Title>
          </div>
          <div className={styles.bottomContent}>
            <p className="text-capture">{newsData.news_provider_name}</p>
            <CustomDate dateString={newsData.last_updated} />
          </div>
        </section>
      </li>
    </Link>
  );
};
