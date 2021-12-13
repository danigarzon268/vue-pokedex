import AuthService from "@/common/auth.service";

export default function guest({ next, router }) {
  if (AuthService.getToken()) {
    router.replace({ name: "onboarding" });
    return;
  }

  return next();
}
