import React from 'react';
// import { useNavigate } from 'react-router-dom';

const LogoLink: React.FC = () => {

  // const navigate = useNavigate();

  const checkUnsavedData = () => {
    const v1 = localStorage.getItem("template_v1");
    const v2 = localStorage.getItem("template_v2");

    if (v1 && v2 && v1 != v2) {
      const confirmNavigation = window.confirm('Changes you made may not be saved. Are you sure you want to leave this page?');
      if (confirmNavigation) {
        localStorage.removeItem("template_v1");
        localStorage.removeItem("template_v2");
        // navigate("/");
      }
      return false;
    }
    // else navigate("/");
  }

  return (
    <a className="mr-6 flex items-center" onClick={checkUnsavedData} style={{ "cursor": "pointer" }}>
      <img src="/img/logo.svg" alt="Boxento Logo" className="mr-2" width="24" height="24" />
      <h1 className="text-lg font-semibold">Boxento</h1>
    </a>
  );
};

export default LogoLink;