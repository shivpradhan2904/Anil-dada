import React from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from "../image/arrow.png";
import img3 from "../image/shop.png";

function FAQ() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="w-full min-h-10 flex justify-between bg-[#3AAFA9]">
        <button onClick={() => navigate('/home')}>
          <img className="w-9 m-2" src={img2} alt="Back" />
        </button>
        <div className="py-2 text-white text-xl font-medium">FAQ</div>
        <button onClick={() => navigate('/shop')}>
          <img className="w-7 m-2" src={img3} alt="Shop" />
        </button>
      </nav>

      <div className="h-screen-full w-full bg-gray-100 px-2">
        <strong className="block p-4 text-xl font-bold text-gray-800">FAQ</strong>

        <strong className="inline-block p-4 text-lg md:text-lg font- bold text-gray-700">
          Q: How does Work Order at L A Smart Assistant work?
        </strong>
        <p className="p-4 text-gray-600">
          L A Smart Assistant is a mobile app that helps you to know how your work can be done in a smarter way by considering cost, quality, and time. Once downloaded on your phone (Android compatible), you can search for different kinds of work/services we provide.
        </p>

        <strong className="block p-4 text-lg font-bold text-gray-700">
          Q: Is creating a work order at L A Smart Assistant helpful to customers?
        </strong>
        <p className="p-4 text-gray-600">
          Yes, this app gives a proper way to do your work and also guides you to do your work yourself. We educate people on how to use smart devices and complete their tasks independently without relying on others. We charge a minimal consultant fee if required, and customers have to pay other third-party fees.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: How do I make special requests?
        </strong>
        <p className="p-4 text-gray-600">
          When placing an order, you can use WhatsApp or make a direct call to make special requests and get the work done.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: How do I know if my work order has been received, and how do I track it?
        </strong>
        <p className="p-4 text-gray-600">
          Once you place your order, you will automatically be directed to the order status page that tracks the progress of your order in real-time. Here you can track order confirmation, preparation, and delivery.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: Where can I see my Order at L A Smart Assistant receipt?
        </strong>
        <p className="p-4 text-gray-600">
          You can tap on 'Orders' in the bottom navigation bar for a listing of current and past orders. Selecting a past order will open up the receipt window. From here, you can re-send yourself any prior receipts. In the app Settings, you can also enter an email address to which all receipts can be automatically sent.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: How do I change or cancel my order?
        </strong>
        <p className="p-4 text-gray-600">
          You can add to, edit, or cancel your order prior to Check Out. However, once you check out, an order can only be changed or canceled by calling the shop or contacting L A Smart Assistant with a valid reason within a limited amount of time from placing the order. You can reach an L A Smart Assistant representative by dialing +91637093232.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: How much does this app cost?
        </strong>
        <p className="p-4 text-gray-600">
          L A Smart Assistant is a free app! Download our app from Google Play.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: Why are your prices sometimes different from what I see in the App?
        </strong>
        <p className="p-4 text-gray-600">
          Prices may be different for various reasons. We update our prices using a variety of sources, and there may be instances where the prices available to us are outdated. Additionally, some providers have increased prices on their services to account for the added costs of employing drivers and increased overhead. For these reasons, and possibly others, there will be times when prices available on our app may be slightly higher or lower than what you see in the application.
        </p>

        <strong className="block p-4 text-lg font- bold text-gray-700">
          Q: How do I contact L A Smart Assistant if I have any questions or problems?
        </strong>
        <p className="p-4 text-gray-600">
          For immediate assistance regarding an existing order, please call +91637093232. For general inquiries or comments, feel free to contact us through the app.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
