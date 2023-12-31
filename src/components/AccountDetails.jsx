import React from 'react';

const AccountSettings = () => {
  const userProfile = {
    username: 'john_doe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
  };

  const subscriptionPlan = {
    planName: 'Premium',
    renewalDate: '2023-12-31',
  };


  const changePasswordData = {
    currentPassword: '********',
    newPassword: '********',
    confirmPassword: '********',
  };

  const usageStatistics = {
    totalUsage: 150,
    lastLogin: '2023-12-30T18:30:00',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Account Settings</h1>

      <div className="mb-6 p-4 bg-gray-100 rounded-md">
  <h2 className="text-xl font-bold mb-4">Update User Profile</h2>
  <form>
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-600">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={userProfile.username}
        className="mt-1 p-2 w-full border rounded-md"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={userProfile.email}
        className="mt-1 p-2 w-full border rounded-md"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={userProfile.firstName}
        className="mt-1 p-2 w-full border rounded-md"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={userProfile.lastName}
        className="mt-1 p-2 w-full border rounded-md"
      />
    </div>

    <button
      type="submit"
      className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded"
    >
      Update Profile
    </button>
  </form>
</div>


      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-600">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={changePasswordData.currentPassword}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={changePasswordData.newPassword}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={changePasswordData.confirmPassword}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded "
            >
              Change Password
            </button>
          </form>
        </div>
      </div>

      
      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold mb-4">Manage Subscription Plan</h2>
        <p className="mb-2">Plan Name: {subscriptionPlan.planName}</p>
        <p className="mb-2">Renewal Date: {subscriptionPlan.renewalDate}</p>
      </div>

      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold mb-4">Link Third-Party Accounts</h2>
      </div>

      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold mb-4">View Usage Statistics</h2>
        <p className="mb-2">Total Usage: {usageStatistics.totalUsage} MB</p>
        <p className="mb-2">Last Login: {usageStatistics.lastLogin}</p>
      </div>
    </div>
  );
};

export default AccountSettings;
