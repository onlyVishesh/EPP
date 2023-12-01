// CreateEvent.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.css"; // Import the CSS file

const CreateEvent = () => {
  const navigate = useNavigate();

  const [eventForm, setEventForm] = useState({
    eventName: "",
    organizerClub: "",
    clubCoordinator: "",
    eventDate: "",
    eventTime: "",
    eventDetails: "",
    numVolunteers: 0,
    numAttendees: 0,
    catalogue: "",
    fee: 0,
    organizerName: "",
    extra: "",
    clubDepartment: "Select",
    permissions: [],
  });

  const handlePermissionChange = (index, key, value) => {
    const updatedPermissions = [...eventForm.permissions];
    updatedPermissions[index][key] = value;
    setEventForm({ ...eventForm, permissions: updatedPermissions });
  };

  const handleAddPermission = () => {
    setEventForm({
      ...eventForm,
      permissions: [
        ...eventForm.permissions,
        { name: "", attachment: "", sendTo: "" },
      ],
    });
  };


  const handleSubmit = () => {
    // Assuming you have a method to store the event in your config.js file
    // import { addEvent } from './config';
    // addEvent(eventForm);

    // For simplicity, we'll just log the event for now
    console.log(eventForm);

    // Redirect to the next page or home after submission
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="title">Create Event</h2>

      {/* Event Form Fields */}
      <div className="form-fields">
        <label>
          Event Name:
          <input
            type="text"
            value={eventForm.eventName}
            onChange={(e) =>
              setEventForm({ ...eventForm, eventName: e.target.value })
            }
          />
        </label>

        <label>
          Organiser Club Name:
          <input
            type="text"
            value={eventForm.organizerClub}
            onChange={(e) =>
              setEventForm({ ...eventForm, organizerClub: e.target.value })
            }
          />
        </label>

        <label>
          Club Coordinator:
          <input
            type="text"
            value={eventForm.clubCoordinator}
            onChange={(e) =>
              setEventForm({ ...eventForm, clubCoordinator: e.target.value })
            }
          />
        </label>

        <label>
          Event Date:
          <input
            type="date"
            value={eventForm.eventDate}
            onChange={(e) =>
              setEventForm({ ...eventForm, eventDate: e.target.value })
            }
          />
        </label>

        <label>
          Event Time:
          <input
            type="time"
            value={eventForm.eventTime}
            onChange={(e) =>
              setEventForm({ ...eventForm, eventTime: e.target.value })
            }
          />
        </label>

        <label>
          Club Department:
          <select
            value={eventForm.clubDepartment}
            onChange={(e) =>
              setEventForm({ ...eventForm, clubDepartment: e.target.value })
            }
          >
            <option value="null">
              Select
            </option>
            <option value="CSE">CSE</option>
            <option value="CS">CS</option>
            <option value="IT">IT</option>
            <option value="CSIT">CSIT</option>
            <option value="CSE(AI)">CSE(AI)</option>
            <option value="CSE(ML&AI)">CSE(ML&AI)</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
          </select>
        </label>

        <label>
          Event Details:
          <textarea
            value={eventForm.eventDetails}
            onChange={(e) =>
              setEventForm({ ...eventForm, eventDetails: e.target.value })
            }
          />
        </label>

        <label>
          No of Volunteers:
          <input
            type="number"
            value={eventForm.numVolunteers}
            onChange={(e) =>
              setEventForm({
                ...eventForm,
                numVolunteers: parseInt(e.target.value),
              })
            }
          />
        </label>

        <label>
          No of Expected Attendees:
          <input
            type="number"
            value={eventForm.numAttendees}
            onChange={(e) =>
              setEventForm({
                ...eventForm,
                numAttendees: parseInt(e.target.value),
              })
            }
          />
        </label>

        <label>
          Catalogue:
          <input
            type="text"
            value={eventForm.catalogue}
            onChange={(e) =>
              setEventForm({ ...eventForm, catalogue: e.target.value })
            }
          />
        </label>

        <label>
          Fee:
          <input
            type="number"
            value={eventForm.fee}
            onChange={(e) =>
              setEventForm({ ...eventForm, fee: parseFloat(e.target.value) })
            }
          />
        </label>

        <label>
          Organiser Name:
          <input
            type="text"
            value={eventForm.organizerName}
            onChange={(e) =>
              setEventForm({ ...eventForm, organizerName: e.target.value })
            }
          />
        </label>

        <label>
          Extra:
          <textarea
            value={eventForm.extra}
            onChange={(e) =>
              setEventForm({ ...eventForm, extra: e.target.value })
            }
          />
        </label>
      </div>

      {/* Permission Form */}
      {eventForm.permissions.map((permission, index) => (
        <div key={index} className="permission-container">
          <input
            type="text"
            placeholder="Permission Name"
            value={permission.name}
            onChange={(e) =>
              handlePermissionChange(index, "name", e.target.value)
            }
            className="input"
          />
          <input
            type="file"
            placeholder="Attached Permission"
            value={permission.attachment}
            onChange={(e) =>
              handlePermissionChange(index, "attachment", e.target.value)
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Send to"
            value={permission.sendTo}
            onChange={(e) =>
              handlePermissionChange(index, "sendTo", e.target.value)
            }
            className="input"
          />
        </div>
      ))}
      <button className="add-permission-button" onClick={handleAddPermission}>
        Add more permission
      </button>

      <div className="buttons-container">
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    
  );
};

export default CreateEvent;
