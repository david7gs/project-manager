export default function Footer() {
  const dateYear = new Date().getFullYear();
  return (
    <footer className="footer-wrap">
      <div className="footer flex justify-center">©{dateYear} | -dgs- | All rights reserved</div>
    </footer>
  );
}
