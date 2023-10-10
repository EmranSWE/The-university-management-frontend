import React from "react";

type IParamsProp = {
  params: any;
};
const AdminEditPage = ({ params }: IParamsProp) => {
  const { id } = params;

  return (
    <div>
      <h1>Admin edit page {id}</h1>
    </div>
  );
};

export default AdminEditPage;
