"use server";

import { getUser} from "@/middleware/services/UserService";
import LocalProxy from "@/components/client/LocalProxy";

export default async function Authorize() {
  const user = await getUser();
  
  if (!user) {
    return <LocalProxy page={"/"}/>;
  } else {
    return <></>;
  }
}
