import styles from "./css/App.module.css"

function App() {

  return (
    <div className={styles.div}>
        <h1>Create Account 👋</h1>
        <p>Please register on our Streamline, where you can continue using our service.</p>
    <div className={styles.form}>
        <div className="username">
          <input className={styles.input} type="text" name="username" id="username" placeholder="Enter your username" />
        </div>

        <div className="useremail">
          <input className={styles.input} type="text" name="useremail" id="useremail" placeholder="Enter your email" />
        </div>

        <div className="usepassword">
          <input className={styles.input} type="text" name="usepassword" id="usepassword" placeholder="Enter your usepassword" />
        </div>
    </div>
    <div className={styles.privacy}>
      <input type="checkbox" name="" id="" />
      <a href="#">I agree to privacy policy & terms</a>
    </div>
    <div className={styles.ctabtn}>
      <button>Continue</button>
    </div>
    <div className={styles.hrline}>
      <div className={styles.line}></div>
      <span>or</span>
      <div className={styles.line}></div>
    </div>
    
  </div>
  )
}

export default App
