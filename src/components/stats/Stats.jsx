import React from 'react'
import styles from "./style.module.scss"

const Stats = () => {
    const list = [
        {
            title: "Combined Years In Business",
            number: "45+",
        },
        {
            title: "Finished Projects",
            number: "76+",
        },
        {
            title: "# Of Champagne Bottles Delivered",
            number: "556+",
        },
    ]
    return (
        <section className={styles.stats}>
            <div className={styles.stats__container}>
                {list.map((item, index) => {
                    return (
                        <div className={styles.stats__container__item} key={index}>
                            <h2>{item.number}</h2>
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Stats