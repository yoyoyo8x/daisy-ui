"use client";
import Mail from "@/assets/Contact/mail";
import Phone from "@/assets/Contact/phone";
import Delivery from "@/assets/Contact/delivery";

function Contact() {
  const store = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="pt-[67px] bg-base-300">
        <div className="text-center px-20">
          <div className="flex flex-col p-2 m-auto">
            <h3 className="text-4xl font-semibold text-center my-4">
              Contact Us
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea
              dolore quia beatae maiores rem magnam dicta laborum! Repellat,
              provident cumque! Adipisci doloribus atque, accusantium quaerat
              eum cum dolorum id.
            </p>
            <p className="mb-4">
              We are looking forward hearing from you and seeing you as our
              customer!
            </p>
          </div>
          <div className="grid grid-cols-3 m-auto mb-16">
            <div className="p-2">
              <Delivery />
              <h3 className="font-medium text-xl mx-3">Fast Delivery</h3>
              <p>
                We always deliver our products on time!
                <br />
                Order now and be ready for your food!
              </p>
            </div>
            <div className="p-2">
              <Phone />
              <h3 className="font-medium text-xl mx-3">Telephone</h3>
              <p>
                We are happy to answer your questions or give you directions via
                phone.
                <br />
                <a href="callto:+1 800 889 9898">+1 800 889 9898 </a>
              </p>
            </div>
            <div className="p-2">
              <Mail />
              <h3 className="font-medium text-xl mx-3">Email</h3>
              <p>
                if you are on the go and still want to ask a question, simply
                drop us an e-mail.
                <br />
                <a href="mailto:mail@demolink.org">mail@demolink.org </a>
              </p>
            </div>
          </div>
        </div>
        <div id="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13271559.690122416!2d101.96617061548831!3d10.091626277353477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1702579308779!5m2!1sen!2s"
            title="GoogleMap"
            width="100%"
            height={(global?.innerHeight * 2) / 3}
            className="border-none mb-8 "
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="text-4xl font-semibold text-center my-4">
            Contact Form
          </div>
          <form className="pb-10 my-form" onSubmit={store}>
            <div className="grid grid-cols-2 gap-4 justify-center py-3">
              <div className="flex flex-col justify-center items-end">
                <input
                  className="text-sm mb-4 p-4 border border-solid border-[#ebeced] w-[80%]"
                  type="text"
                  placeholder="First Name*"
                />

                <input
                  className="text-sm mb-4 p-4 border border-solid border-[#ebeced] w-[80%]"
                  type="text"
                  placeholder="Last Name*"
                  id="second-n"
                />

                <input
                  className="text-sm mb-4 p-4 border border-solid border-[#ebeced] w-[80%]"
                  type="email"
                  placeholder="Email Address*"
                />
              </div>
              <div className="flex">
                <textarea
                  placeholder="Your Message"
                  className="text-sm mb-1 p-4 border border-solid border-[#ebeced] w-[90%] h-[194px] min-h-[194px]"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-neutral text-white text-lg p-2 uppercase font-medium">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
