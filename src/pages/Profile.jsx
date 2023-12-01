import { useForm } from "react-hook-form";
import "./Profile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // For demonstration purposes, you can handle the form data as needed here.
    // Replace the following logic with your actual form submission logic.

    try {
      // Mock API call or other processing
      // For example, you might want to send the data to your server or handle it in some way.
      console.log("Profile data submitted successfully!");

      // Display success toast
      toast.success("Profile successfully submitted!");
    } catch (error) {
      // Display error toast
      toast.error("Error submitting profile. Please try again.");
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="container-header">
          <h1>My Profile</h1>
        </div>
        <div className="secondary-container">
          <div className="profile-image">
            <h2>Vishesh</h2>
          </div>
          <div className="form-container">
            <form action="" method="" onSubmit={handleSubmit(onSubmit)}>
              {/* ... (other form controls) */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
