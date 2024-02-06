"use client";

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

export function NewVerificationForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const token = useSearchParams().get("token");

  const onSubmit = useCallback( function verifyingToken() {
      if(success || error) return;
      if (!token) {
        setError("missing token");
        return;
      }

      newVerification(token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      })
    .catch(()=>{
        setError("Something went wrong")
      })
    },
    [token,success,error],
  );

  useEffect(function () {

    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <CardWrapper
        headerLabel="Verifying your email"
        backButtonLabel="Back to Login"
        backButtonHref="/auth/login"
      >
        <div className="flex items-center justify-center w-full">
          {!success && !error && (

            <BeatLoader />
          ) }
          <FormSuccess message={success}/>
          {!success && (
            <FormError message={error}/>
          )}
        </div>
      </CardWrapper>
    </div>
  );
}
