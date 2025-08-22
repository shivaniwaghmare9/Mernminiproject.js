

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-col">
//           <h3>About Us</h3>
//           <p>
//             We are a team of developers building web and mobile experiences.
//             Our goal is to deliver high-quality, scalable, and beautiful digital products.
//           </p>
//         </div>

//         <div className="footer-col">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/insert">Insert</a></li>
//             <li><a href="/display">Display</a></li>
//             <li><a href="/update">Update</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h3>Contact</h3>
//           <p>Email: support@yourdomain.com</p>
//           <p>Phone: +1 123 456 7890</p>
//           <p>Address: 456 Main Street, City, Country</p>
//         </div>

//         <div className="footer-col">
//           <h3>Follow Us</h3>
//           <div className="footer-social">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            We are a team of developers building web and mobile experiences.
            Our goal is to deliver high-quality, scalable, and beautiful digital products.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/insert">Insert</a></li>
            <li><a href="/display">Display</a></li>
            <li><a href="/update">Update</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: support@yourdomain.com</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Address: 456 Main Street, City, Country</p>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
