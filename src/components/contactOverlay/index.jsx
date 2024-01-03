import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { contactPageHeight } from '../../components/navbar/anim';
import Body from './Body';
import Footer from './Footer';



export default function Index() {


  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={contactPageHeight}
      className={styles.nav}>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body />
          <Footer />
        </div>
      </div>
    </motion.div >
  )
}