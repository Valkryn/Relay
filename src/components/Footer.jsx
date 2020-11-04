import React from "react"

function Footer(){
  let currentDate = new Date()
  let year = currentDate.getFullYear()

  return(
    <div>
      <footer>
      <p>Copyright {year}</p>
      </footer>
    </div>
  )
}
export default Footer;
