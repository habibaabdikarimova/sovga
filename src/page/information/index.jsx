import React from "react";
import { useGetData } from "../../utils/hooks/getData";
import { usePostData } from "../../utils/hooks/postData";

function Information() {
  const information = useGetData(["information"], "/information");
  console.log(information);
  const postMainData = usePostData("/information");
  // const onSub = (data) => {
  //     postMainData.mutate(
  //       {
  //         name_Uz: "Team 1",
  //         name_Ru: "Team 1",
  //         name_En: "Team 1",
  //         photoId: "d56be775-280e-4ed2-9417-c962cfc35a92",
  //       },
  //       {
  //         onSuccess: () => console.log("success"),
  // onError: () => console.log("error");
  //       }
  //     );
  //     console.log(data);
  //     reset();
  //   };
  return (
    <div>
      information
      {information?.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        information?.data?.data?.map((e, index) => (
          <div key={index}>
            {e.address}
            {e.phone}
          </div>
        ))
      )}
    </div>
  );
}

export default Information;
