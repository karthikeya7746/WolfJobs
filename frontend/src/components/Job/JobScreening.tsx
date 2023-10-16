import { useEffect, useState } from "react";
import { useApplicationStore } from "../../store/ApplicationStore";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const JobScreening = (props: any) => {
  const { jobData }: { jobData: Job } = props;

  const [displayList, setDisplayList] = useState<Application[]>([]);

  const applicationList = useApplicationStore((state) => state.applicationList);

  useEffect(() => {
    // let displayList: Application[] = [];s
    setDisplayList(
      applicationList.filter(
        (item) => item.jobid === jobData._id && item.status === "applied"
      )
    );
  }, []);

  const handleAccept = (applicantid: string) => {
    const url = "http://localhost:8000/api/v1/users/modifyApplication";

    const body = {
      applicationId: applicantid,
      status: "screening",
    };

    axios.post(url, body).then((res) => {
      if (res.status == 200) {
        toast.success("Accepted candidate");
        return;
      }
      toast.error("Failed to accept candidate");
    });
  };
  const handleReject = (applicantid: string) => {
    const url = "http://localhost:8000/api/v1/users/modifyApplication";

    const body = {
      applicationId: applicantid,
      status: "rejected",
    };

    axios.post(url, body).then((res) => {
      if (res.status == 200) {
        toast.success("Rejected candidate");
        return;
      }
      toast.error("Failed to reject candidate");
    });
  };

  return (
    <>
      <div>Screening</div>
      {displayList?.map((item: Application) => (
        <div className=" p-1">
          <div className="bg-white my-2 mx-1 p-2 rounded-lg">
            <div className=" flex flex-row justify-between">
              <div className="flex flex-col">
                <div> Name: {item.applicantname} </div>
                {!!item?.phonenumber && <div>Phone: {item.phonenumber} </div>}
                <div>Email: {item.applicantemail}</div>
                {!!item?.applicantSkills && (
                  <div>Skills: {item.applicantSkills}</div>
                )}
              </div>
              <div className="flex flex-row">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    return handleAccept(item._id);
                  }}
                >
                  Accept
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    return handleReject(item._id);
                  }}
                >
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobScreening;
