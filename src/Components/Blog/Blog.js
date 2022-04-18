import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="table className='mx-auto'">
        <h1>
          <strong>Difference between authorization and authentication</strong>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Authorization</th>
              <th scope="col">Authentication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Authentication verifies who the user is.</td>
              <td>
                Authorization determines what resources a user can access.
              </td>
            </tr>
            <tr>
              <td>
                Authentication works through passwords, one-time pins, biometric
                information, and other information provided or entered by the
                user.
              </td>
              <td>
                Authorization works through settings that are implemented and
                maintained by the organization.
              </td>
            </tr>
            <tr>
              <td>
                Authentication is the first step of a good identity and access
                management process..
              </td>
              <td>Authorization always takes place after authentication.</td>
            </tr>
            <tr>
              <td>
                Authentication works through passwords, one-time pins, biometric
                information, and other information provided or entered by the
                user.
              </td>
              <td>
                Authorization works through settings that are implemented and
                maintained by the organization.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <div className='mx-auto'>
        <h1>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <br />
        <p>
          Google’s Firebase is a mobile platform that lets you develop mobile
          apps. It is especially geared towards business apps, with the
          intention of helping businesses grow their user bases and increase
          their profits through their mobile apps. The screenshot from Google
          Firebase below shows just some of the features that are a part of
          Firebase, again, with the intention of developing, growing and
          earning:
          <ul>
            <li>App Development Made Easy</li>
            <li>Incredibly Built-In Analytics</li>
            <li>Growth and User Engagement</li>
            <li>Increase Your Earnings</li>
          </ul>
        </p>
      </div>
      <br />
      <div className='mx-auto'>
      <h1>
        What other services does firebase provide other than authentication
      </h1>
      <p>
         <ol>
            <li>Open Source Backend Platform</li>
            <li>Parse Hosting Platform</li>
            <li>Mobile Backend as a Service (mBaaS) for the Enterprise</li>
            <li>Mobile Backend and API Services Platform</li>
            <li>Backend for web, hybrid, or native mobile apps and IoT projects</li>
            <li>Real-time APIs and Global Messaging;</li>
            <li>App Performance Management</li>
            <li>Game Backend Platform</li>
            <li>Generic backend with a client API for Offline First applications</li>
            <li>Open-Source backend for Flutter developers</li>
         </ol>
      </p>

      </div>
    </div>
  );
};

export default Blog;
