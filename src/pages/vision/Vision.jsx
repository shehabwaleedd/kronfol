import React from 'react'
import styles from "./style.module.scss"
import vision from "../../assets/vision.jpg"
import vision2 from "../../assets/vision2.jpg"
import Data from './Data'
import { Clients } from './Data'

const Vision = () => {
    return (
        <main className={styles.vision}>
            <h1>Powered by Partnerships</h1>
            <img src={vision} alt="" />
            <section className={styles.vision__container}>
                <h2>High Performance</h2>
                <div className={styles.vision__container_content}>
                    {Data.map((item, index) => {
                        return (
                            <div className={styles.vision__container_content_item} key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.vision__container_about}>
                    <h2>About Us</h2>
                    <div>
                        <p>Our mission is to provide the best service, care and match for both our clients and candidates. We are committed to building long-term relationships with our clients and candidates and have an in-depth understanding of the market. We are passionate about what we do and are committed to delivering excellence in everything we do.</p>
                        <p>Our vision is to be the leading recruitment agency in the UK and to be recognised as a company that provides the best service, care and match for both our clients and candidates.</p>
                        <p> We are committed to building long-term relationships with our clients and candidates and have an in-depth understanding of the market. We are passionate about what we do and are committed to delivering excellence in everything we do.</p>
                    </div>
                </div>
            </section>
            <section className={styles.vision_clients}>
                <h2>Our Clients</h2>
                <div className={styles.vision_clients_container}>
                    {Clients.map((item, index) => {
                        return (
                            <div className={styles.vision_clients_container_item} key={index}>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </section>
            <img src={vision2} alt="" />
        </main>
    )
}

export default Vision