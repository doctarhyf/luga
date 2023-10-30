import React from "react";
import { ROUTES, clPage } from "../../flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Login() {
  return (
    <div className={clPage}>
      <div className="w-64 ">
        <form className="flex gap-4 flex-col">
          <div className=" items-center w-full flex gap-2 border p-2 hover:border-sky-500 rounded ">
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className=" text-neutral-500 w-4  "
              />
            </div>

            <input
              className="outline-0 w-[85%]  "
              type="text"
              value=""
              id="iump_login_username"
              name="log"
              placeholder="Username"
            />
          </div>

          <div className=" items-center w-full flex gap-2 border p-2 hover:border-sky-500 rounded ">
            <div>
              <FontAwesomeIcon
                icon={faLock}
                className=" text-neutral-500 w-4  "
              />
            </div>

            <input
              className="outline-0 w-[85%]  "
              type="text"
              value=""
              id="iump_login_username"
              name="log"
              placeholder="Password"
            />
          </div>

          <button className="btn btn-primary">LOGIN</button>
          <div className="flex justify-center gap-4 text-sm">
            <Link href={ROUTES.SUBSCRIPTION.path}>Register</Link> |{" "}
            <Link href={ROUTES.RECOVER.path}>Lost your password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
