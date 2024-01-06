import React from 'react'
import styles from "./style.module.scss"
import apprachIamge from "../../assets/approach.jpg"
import Data from './Data'

const Approach = () => {
    return (
        <main className={styles.approach}>
            <h2>Driven by Insights</h2>
            <img src={apprachIamge} alt="" />
            <section className={styles.approach__container}>
                <h2>Services</h2>
                <div className={styles.approach__container_content}>
                    {Data.map((item, index) => {
                        return (
                            <div className={styles.approach__container_content_item} key={index}>
                                <span>
                                    0{index + 1}
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.approach__container_about}>
                    <h2>The Kronfol Advantage</h2>
                    <div>
                        <p>Our mission is to provide the best service, care and match for both our clients and candidates. We are committed to building long-term relationships with our clients and candidates and have an in-depth understanding of the market. We are passionate about what we do and are committed to delivering excellence in everything we do.</p>
                        <p>Our vision is to be the leading recruitment agency in the UK and to be recognised as a company that provides the best service, care and match for both our clients and candidates.</p>
                        <p> We are committed to building long-term relationships with our clients and candidates and have an in-depth understanding of the market. We are passionate about what we do and are committed to delivering excellence in everything we do.</p>
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default Approach