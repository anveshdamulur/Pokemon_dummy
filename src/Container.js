import styles from './Logo.module.css';
import './Container.css'
export default function Container(props) {
    console.log(props)
  return <div {...props} className={styles.root} />;
}