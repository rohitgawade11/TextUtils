import React from 'react'

export default function Footer() {
    let date = new Date();
    let previousYear = date.getFullYear() - 1;
    let currentYear = date.getFullYear();

  return (
    <footer>
     © TextUtils {previousYear}-{currentYear}, All Right Reserved...!
  </footer>
  )
}