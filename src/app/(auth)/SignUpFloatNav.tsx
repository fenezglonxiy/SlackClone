import Link from "@/components/Link";
import Typography from "@/components/Typography";

const SignUpFloatNav = function () {
  return (
    <Typography
      as="div"
      variant="xs"
      className="absolute right-10 top-1/2 -translate-y-2/4 text-right"
    >
      New to Slack?
      <Link href="/signup" className="mt-1.5 block">
        Create an account
      </Link>
    </Typography>
  );
};

export default SignUpFloatNav;
