import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JOB_DATA_CONTEXT } from "../../../context/JobDataProvider";
import ApplyDetailsAndApply from "./ApplyDetailsAndApply";

const JobApplyForm = () => {
  const { id } = useParams();
  const { jobData } = useContext(JOB_DATA_CONTEXT);

  const actualData = jobData?.filter((aData) => aData._id === id);

  return (
    <div>
      {actualData?.map((data) => (
        <ApplyDetailsAndApply data={data} key={data?._id} />
      ))}
    </div>
  );
};

export default JobApplyForm;
