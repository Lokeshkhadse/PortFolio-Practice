import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
 import toast, { Toaster } from "react-hot-toast"; // Ensure Toaster is used
import "./Contact.css"; // Import CSS file

function Contact() {
  const {
    register,
    handleSubmit,
    reset, // Add reset function
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/bgdppywa", userInfo);
       toast.success("Your message has been sent successfully!"); // Show success message
    alert("Your message has been sent successfully!");
      reset(); // Reset form fields after submission
    } catch (error) {
      console.log(error);
       toast.error("Something went wrong. Please try again.");
    alert("Something went wrong. Please try again");
    }
  };

  return (
    <div name="Contact" className="contact-container">
      {/* Toast Notification */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="contact-content">
        <h1 className="contact-header">Contact me</h1>
        <span className="contact-subtext">
          Please fill out the form below to contact me
        </span>
      </div>
      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h1>Send Your Message</h1>
          <div className="contact-input-group">
            <label>Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span className="error-text">This field is required</span>}
          </div>
          <div className="contact-input-group">
            <label>Email Address</label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-text">This field is required</span>}
          </div>
          <div className="contact-input-group">
            <label>Message</label>
            <textarea
              {...register("message", { required: true })}
              placeholder="Enter your Query"
            ></textarea>
            {errors.message && <span className="error-text">This field is required</span>}
          </div>
          <button type="submit" className="contact-submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
