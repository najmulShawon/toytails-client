import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200 p-4 lg:p-0 ">
      <footer className="footer py-10  max-w-7xl mx-auto  text-white">
        <div>
          <span className="mb-2 font-bold uppercase text-white">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="mb-2 font-bold uppercase text-white">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="mb-2 font-bold uppercase text-white">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="mb-2 font-bold uppercase text-white">Social</span>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div>
          <span className="mb-2 font-bold uppercase text-white">Address</span>

          <p>
            999 Hamilton Street
            <br /> Silicon Valley, USA 7823
            <br /> Phone: 213-115-014
            <br /> Email: tanvirbinsiraj.edu.bd@gmail.com
          </p>
        </div>
      </footer>
      <footer className="footer  max-w-7xl mx-auto py-4 border-t  bg-base-200 text-base-content border-base-300 flex justify-between items-center">
        <div className="items-center grid-flow-col ">
          <Link to="/" className="flex items-center normal-case text-xl">
            <img className="w-8" src={logo} alt="" />
            <h1 className="font-bold ms-2 text-white">ToyTails</h1>
          </Link>
        </div>
        <p className="hidden lg:block text-white">
          Copyright © 2023 - All right reserved
        </p>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to="https://twitter.com/i/flow/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link to="https://www.youtube.com/watch?v=voh0MEYaYp4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link to="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
      <p className=" text-center lg:hidden mt-5 text-white">
        Copyright © 2023 - All right reserved
      </p>
    </div>
  );
};

export default Footer;