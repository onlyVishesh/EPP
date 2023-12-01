// Members.js

import { useState } from 'react';
import './Member.css'; // Import the CSS file

const Member = () => {
  const initialMembers = [
    { name: 'Vishesh', email: 'Vishesh@example.com', libraryId: '2226cse1119', yearBranch: '3rd Year CSE' },
    { name: 'Jane Smith', email: 'jane@example.com', libraryId: 'LIB456', yearBranch: '2nd Year ECE' },
    // Add more initial members as needed
  ];

  const [members, setMembers] = useState(initialMembers);
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', email: '', libraryId: '', yearBranch: '' });
  const [recentMembers, setRecentMembers] = useState([]);

  const handleAddMember = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const updatedMembers = [...members, newMember];
    const topThreeRecentMembers = [newMember, ...recentMembers.slice(0, 2)];
    
    setMembers(updatedMembers);
    setRecentMembers(topThreeRecentMembers);
    setNewMember({ name: '', email: '', libraryId: '', yearBranch: '' });
    setShowForm(false);
  };

  return (
    <div className="members-container">
      <h2>GDSC</h2>
      <p>No. of Current Members: {members.length}</p>

      <ul>
        <h3>Members List:</h3>
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>

      <button onClick={handleAddMember}>Add New Member</button>

      <div className={`form-container ${showForm ? 'show' : ''}`}>
        <h2>Add New Member</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            />
          </label>

          <label>
            Library ID:
            <input
              type="text"
              value={newMember.libraryId}
              onChange={(e) => setNewMember({ ...newMember, libraryId: e.target.value })}
            />
          </label>

          <label>
            Year and Branch:
            <input
              type="text"
              value={newMember.yearBranch}
              onChange={(e) => setNewMember({ ...newMember, yearBranch: e.target.value })}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="recent-members">
        <h3>Top 3 Recently Added Members:</h3>
        <ul>
          {recentMembers.map((member, index) => (
            <li key={index}>{member.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Member;
