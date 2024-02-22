import { AlertCircle, Terminal } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/common/components/ui/alert";

const VerifyEmailPage = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-screen mt-16">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>verify email sent to your account</AlertTitle>
        <AlertDescription>
          Thank you for creating an account with us. We have sent a verification
          email to your email address. Please verify your email to continue.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default VerifyEmailPage;
